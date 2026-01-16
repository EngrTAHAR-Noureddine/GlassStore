import 'package:flutter/material.dart';
import 'package:glass_app/shared/constant/app_color.dart';
import 'package:glass_app/shared/constant/constants.dart';
import 'package:glass_app/shared/style/custom_color_scheme.dart';
import 'package:glass_app/shared/style/custom_elevation_theme.dart';
import 'package:glass_app/shared/style/custom_expansion_tile_theme.dart';
import 'package:glass_app/shared/style/custom_input_decoration_theme.dart';
import 'package:glass_app/shared/style/custom_popup_menu_theme.dart';
import 'package:glass_app/shared/style/custom_text_theme.dart';

class AppTheme {
  static List<BoxShadow> shadow = [
    BoxShadow(
      color: Colors.black.withValues(alpha: 0.25),
      blurRadius: 10,
      spreadRadius: 0,
      offset: Offset(0, 2),
    ),
  ];
  static ThemeData lightTheme = ThemeData(
    useMaterial3: false,
    fontFamily: robotoFont,
    splashFactory: NoSplash.splashFactory,
    brightness: Brightness.dark,
    scaffoldBackgroundColor: AppColor.primaryLight,
    splashColor: AppColor.primaryLight.withValues(alpha: .5),
    primaryColor: AppColor.primaryLight,
    cardColor: AppColor.cardLight,
    colorScheme: CustomColorScheme.lightTheme,
    elevatedButtonTheme: CustomElevationTheme.lightTheme,
    textButtonTheme: TextButtonThemeData(
      style: TextButton.styleFrom(splashFactory: NoSplash.splashFactory),
    ),
    popupMenuTheme: CustomPopUpMenuTheme.lightTheme,
    inputDecorationTheme: CustomInputDecorationTheme.lightThem,
    expansionTileTheme: CustomExpansionTileTheme.lightTheme,
    floatingActionButtonTheme: FloatingActionButtonThemeData(
      elevation: 0,
      backgroundColor: Colors.transparent,
      splashColor: Colors.transparent,
      hoverColor: Colors.transparent,
      focusColor: Colors.transparent,
      highlightElevation: 0,
      hoverElevation: 0,
      focusElevation: 0,
      disabledElevation: 0,
    ),
    textTheme: CustomTextTheme.lightTheme,
  );
  static ThemeData darkTheme = ThemeData(
    useMaterial3: false,
    fontFamily: robotoFont,
    floatingActionButtonTheme: FloatingActionButtonThemeData(
      elevation: 0,
      backgroundColor: Colors.transparent,
      splashColor: Colors.transparent,
      hoverColor: Colors.transparent,
      focusColor: Colors.transparent,
      highlightElevation: 0,
      hoverElevation: 0,
      focusElevation: 0,
      disabledElevation: 0,
    ),
    scaffoldBackgroundColor: AppColor.primaryDark,
    splashColor: AppColor.primaryDark.withValues(alpha: .5),
    primaryColor: AppColor.primaryDark,
    colorScheme: CustomColorScheme.darkTheme,
    elevatedButtonTheme: CustomElevationTheme.darkTheme,
    textButtonTheme: TextButtonThemeData(
      style: TextButton.styleFrom(splashFactory: NoSplash.splashFactory),
    ),
    popupMenuTheme: CustomPopUpMenuTheme.darkTheme,
    inputDecorationTheme: CustomInputDecorationTheme.darkTheme,
    textTheme: CustomTextTheme.darkTheme,
  );
}
