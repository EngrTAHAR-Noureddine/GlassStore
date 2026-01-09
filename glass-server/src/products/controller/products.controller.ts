import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, ParseUUIDPipe, Post, Put, Query, Req, Res } from '@nestjs/common';
import { GlassService } from '../service/glass.service';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { CreateProductDto } from '../dto/create.product.dto';
import { BrandService } from '../service/brand.service';
import { UpdateProductDto } from '../dto/update.product.dto';
import { ProductVariantService } from '../service/product.variant.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SellersService } from '../../sellers/sellers.service';

const idSeller = "9db9261f-1c56-4e40-b1b1-a0357753f44e"; // TODO : remove this hardcoded value and get seller from req.user

@ApiTags("Glasses")
@Controller('glasses')
export class ProductsController {

    constructor(
        private readonly glassService: GlassService,
        private readonly brandService: BrandService,
        private readonly productVariantService: ProductVariantService,
        private readonly sellersService: SellersService, // TODO : remove this and get seller from req.user
    ){}

    @ApiResponse({status: 200, description: 'List of brands retrieved successfully.'})
    @Get("brands")
    async getBrands(@Query() paginationQuery : PaginationQueryDto) {
        const brands = await this.brandService.findAll(paginationQuery);
        return brands;
    }

    @ApiResponse({status: 200, description: 'List of glasses retrieved successfully.'})
    @Get()
    getAll(@Query() paginationQuery : PaginationQueryDto) {
        const glasses = this.glassService.findAll(paginationQuery);
        return glasses;
    }

    @ApiResponse({status: 200, description: 'List of glasses by seller retrieved successfully.'})
    @Get("seller/:id")
    getBySeller(@Param('id', ParseUUIDPipe) id: string) {
        const glasses = this.glassService.findBySeller(id);
        return glasses;
    }

    @ApiResponse({status: 200, description: 'Glass retrieved successfully.'})
    @Get(":id")
    getById(@Param('id', ParseUUIDPipe) id: string) {
        const glasses = this.glassService.findOne(id);
        return glasses;
    }

    @ApiResponse({status: 201, description: 'Glass created successfully.'})
    @Post()
    async createProduct(@Body() productDto: CreateProductDto, /* @Req() req */) {
        let brand;
        if (productDto.idBrand) {
            brand = await this.brandService.findOne(productDto.idBrand);
        } else if (productDto.brand && productDto.brand.name) {
            brand = await this.brandService.findByName(productDto.brand.name);
            if (!brand) {
                brand = await this.brandService.create(productDto.brand);
            }
        }

        let seller = await this.sellersService.findOne(idSeller);

        // Pass the brand object directly as you planned
        const glass = await this.glassService.create(productDto.glass, brand, seller /* req.user */);

        // 3. Create the Variant linked to the new Glass ID
        if (productDto.variant) {
            // Ensure the variant is linked to the newly created glass
            const variantData = {
                ...productDto.variant,
                glassId: glass.id,
                glass: glass
            };
            await this.productVariantService.create(variantData);
        }

        // Return the created glass (you might want to return the glass with variants included)
        return glass;
    }

    @ApiResponse({status: 201, description: 'Glass updated successfully.'})
    @Put(":id")
    async updateProduct(
        @Param('id', ParseUUIDPipe) id: string, // Use ParseUUIDPipe for UUIDs
        @Body() productDto: UpdateProductDto,   // Use @Body() for update payloads
        /* @Req() req */
    ) {
        let brand;
        // 1. Handle Brand Logic (AWAIT is required)
        if (productDto.idBrand) {
            brand = await this.brandService.findOne(productDto.idBrand);
        } else if (productDto.brand) {
            brand = await this.brandService.create(productDto.brand);
        }

        let updatedGlass;

        // 2. Update Glass Logic
        if (productDto.glass) {
            let seller = await this.sellersService.findOne(idSeller);
            // Pass the brand object and the seller (req.user) to ensure ownership
            updatedGlass = await this.glassService.update(id, productDto.glass, brand, /*req.user*/ seller);
        }

        // 3. Update Variant Logic
        if (productDto.variant && updatedGlass && productDto.variant.id) {
            // Ensure we are updating the specific variant associated with this glass
            await this.productVariantService.update(productDto.variant.id, productDto.variant);
        }

        // 4. Return the result (Scoping: updatedGlass must be defined outside the if block)
        return updatedGlass;
    }

    @ApiResponse({status: 200, description: 'Glass deleted successfully.'})
    @Delete(":id")
    async deleteGlass(@Param('id', ParseUUIDPipe) id: string) {
        // We 'await' the result to ensure the deletion finishes before sending a response
        const result = await this.glassService.remove(id);
        return {
            message: 'Glass and associated variants deleted successfully',
            success: true
        };
    }

}
