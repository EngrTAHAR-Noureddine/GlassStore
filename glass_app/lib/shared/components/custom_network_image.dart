import 'package:flutter/material.dart';
import 'package:glass_app/shared/utils/logger.dart';

class CustomNetworkImage extends StatelessWidget {
  final String? src;
  final Widget? errorWidget;
  final Widget? loadingWidget;
  final BoxFit? fit;
  final double? width;
  final double? height;
  final Color? background;
  final BoxShape boxShape;

  const CustomNetworkImage(
    this.src, {
    super.key,
    this.errorWidget,
    this.loadingWidget,
    this.fit = BoxFit.fill,
    this.background,
    this.boxShape = BoxShape.rectangle,
    this.width = double.infinity,
    this.height = double.infinity,
  });

  @override
  Widget build(BuildContext context) {
    Logger.i("src : $src");
    return Container(
      decoration: BoxDecoration(color: background, shape: boxShape),
      clipBehavior: Clip.hardEdge,
      child: Image.network(
        "$src",
        height: height,
        width: width,
        fit: fit,
        errorBuilder: (context, obj, stack) {
          return errorWidget ?? _ipsumWidget();
        },
        loadingBuilder: (context, child, loadingProgress) {
          if (loadingProgress == null) {
            return child;
          }
          return loadingWidget ?? _ipsumWidget();
        },
        filterQuality: FilterQuality.high,
      ),
    );
  }

  Widget _ipsumWidget() => Container(
    decoration: BoxDecoration(color: background, shape: boxShape),
    height: height,
    width: width,
  );
}
