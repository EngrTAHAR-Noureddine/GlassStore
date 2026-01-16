import 'package:flutter/material.dart';
import 'package:glass_app/shared/constant/app_color.dart';

class CustomExpansionTileTheme {
  static ExpansionTileThemeData lightTheme = ExpansionTileThemeData(
    backgroundColor: AppColor.cardLight,
    collapsedBackgroundColor: AppColor.cardLight,
    collapsedIconColor: AppColor.textLight,
    iconColor: AppColor.textLight,
    textColor: AppColor.textLight,
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
    collapsedShape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(16),
    ),
  );

  static ExpansionTileThemeData darkTheme = ExpansionTileThemeData(
    backgroundColor: AppColor.cardDark,
    collapsedBackgroundColor: AppColor.cardDark,
    collapsedIconColor: AppColor.textDark,
    iconColor: AppColor.textDark,
    textColor: AppColor.textDark,
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
    collapsedShape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(16),
    ),
  );
}
