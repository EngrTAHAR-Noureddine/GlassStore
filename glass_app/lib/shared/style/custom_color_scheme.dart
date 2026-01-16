import 'package:flutter/material.dart';
import 'package:glass_app/shared/constant/app_color.dart';

class CustomColorScheme {
  static ColorScheme lightTheme = ColorScheme.light(
    brightness: Brightness.dark,
    // Primary
    primary: AppColor.primaryLight,
    onPrimary: AppColor.backgroundLight,
    primaryFixed: AppColor.primaryDark,
    // Secondary
    secondary: AppColor.secondaryLight,
    onSecondary: AppColor.backgroundLight,
    // Surface [Background]
    surface: AppColor.backgroundLight,
    onSurface: AppColor.backgroundDark,
    // Error
    error: AppColor.errorLight,
    onError: AppColor.backgroundLight,
    // Success
    primaryContainer: AppColor.successLight,
    onPrimaryContainer: AppColor.backgroundLight,
    // Border
    secondaryContainer: AppColor.borderLight,
    onSecondaryContainer: AppColor.borderDark,
    // Text
    scrim: AppColor.textLight,
    // Card
    outline: AppColor.cardLight,
    outlineVariant: AppColor.cardDark,
    // Blue
    secondaryFixed: AppColor.blueLight,
  );

  static ColorScheme darkTheme = ColorScheme.light(
    brightness: Brightness.light,
    // Primary
    primary: AppColor.primaryDark,
    onPrimary: AppColor.backgroundDark,
    primaryFixed: AppColor.primaryLight,
    // Secondary
    secondary: AppColor.secondaryDark,
    onSecondary: AppColor.backgroundDark,
    // Surface [Background]
    surface: AppColor.backgroundDark,
    onSurface: AppColor.backgroundLight,
    // Error
    error: AppColor.errorDark,
    onError: AppColor.backgroundDark,
    // Success
    primaryContainer: AppColor.successDark,
    onPrimaryContainer: AppColor.backgroundDark,
    // Border
    secondaryContainer: AppColor.borderDark,
    onSecondaryContainer: AppColor.borderLight,
    // Text
    scrim: AppColor.textDark,
    // Card
    outline: AppColor.cardDark,
    outlineVariant: AppColor.cardLight,
    // Blue
    secondaryFixed: AppColor.blueDark,
  );
}
