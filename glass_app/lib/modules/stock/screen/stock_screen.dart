import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:glass_app/modules/authentication/components/custom_app_bar.dart';
import 'package:glass_app/shared/constant/constants.dart';

class StockScreen extends StatefulWidget {
  const StockScreen({super.key});

  @override
  State<StockScreen> createState() => _StockScreenState();
}

class _StockScreenState extends State<StockScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(title: "Stock"),

      body: Center(
        child: ListView(
          children: [
            Card()
          ],
        ),
      ),

      floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,
      floatingActionButton: Padding(
        padding: EdgeInsets.only(bottom: 50),
        child: InkWell(
          onTap: (){},
          child: Container(
            padding: EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: context.theme.colorScheme.primary,
              borderRadius: BorderRadius.circular(infinityRound),
              boxShadow: [
                boxShadow
              ]
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.add, color: context.theme.colorScheme.surface,),
                Text("Add Glasses", style: context.textTheme.labelSmall?.copyWith(
                  color: context.theme.colorScheme.surface,
                ),)
              ],
            ),
          )
      ),),
    );
  }
}
