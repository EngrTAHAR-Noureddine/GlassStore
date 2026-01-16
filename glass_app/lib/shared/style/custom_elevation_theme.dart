import 'package:flutter/material.dart';
import 'package:glass_app/shared/constant/app_color.dart';
import 'package:glass_app/shared/constant/constants.dart';

class CustomElevationTheme {
  static ElevatedButtonThemeData lightTheme = ElevatedButtonThemeData(
    style: ButtonStyle(
      backgroundColor: WidgetStatePropertyAll(AppColor.primaryLight),
      foregroundColor: WidgetStatePropertyAll(AppColor.backgroundLight),
      elevation: WidgetStatePropertyAll(0),
      textStyle: WidgetStatePropertyAll(
        TextStyle(
          fontSize: 16,
          color: AppColor.backgroundLight,
          fontWeight: FontWeight.w600,
        ),
      ),
      padding: WidgetStatePropertyAll(
        EdgeInsets.symmetric(vertical: 16, horizontal: 16),
      ),
      shape: WidgetStatePropertyAll(
        RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(infinityRound),
        ),
      ),
    ),
  );

  static ElevatedButtonThemeData darkTheme = ElevatedButtonThemeData(
    style: ButtonStyle(
      backgroundColor: WidgetStatePropertyAll(AppColor.primaryDark),
      foregroundColor: WidgetStatePropertyAll(AppColor.backgroundDark),
      elevation: WidgetStatePropertyAll(0),
      textStyle: WidgetStatePropertyAll(
        TextStyle(
          fontSize: 16,
          color: AppColor.backgroundDark,
          fontWeight: FontWeight.w600,
        ),
      ),
      padding: WidgetStatePropertyAll(
        EdgeInsets.symmetric(vertical: 16, horizontal: 16),
      ),
      shape: WidgetStatePropertyAll(
        RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(infinityRound),
        ),
      ),
    ),
  );
}
