import 'package:flutter/material.dart';
import 'package:glass_app/shared/constant/app_color.dart';

class CustomPopUpMenuTheme {
  static PopupMenuThemeData lightTheme = PopupMenuThemeData(
    elevation: 4,
    position: PopupMenuPosition.under,
    menuPadding: EdgeInsets.zero,
    color: AppColor.cardLight,
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
  );

  static PopupMenuThemeData darkTheme = PopupMenuThemeData(
    elevation: 4,
    position: PopupMenuPosition.under,
    menuPadding: EdgeInsets.zero,
    color: AppColor.cardDark,
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
  );
}
