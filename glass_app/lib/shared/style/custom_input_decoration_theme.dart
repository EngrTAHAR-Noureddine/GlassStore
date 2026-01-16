import 'package:flutter/material.dart';
import 'package:glass_app/shared/constant/app_color.dart';
import 'package:glass_app/shared/constant/constants.dart';

class CustomInputDecorationTheme {
  static InputDecorationTheme lightThem = InputDecorationTheme(
    border: OutlineInputBorder(
      borderRadius: BorderRadius.circular(infinityRound),
      borderSide: BorderSide(color: AppColor.borderLight, width: 1),
    ),
    contentPadding: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
    filled: false,
    disabledBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(infinityRound),
      borderSide: BorderSide(color: AppColor.borderLight, width: 1),
    ),
    errorBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(infinityRound),
      borderSide: BorderSide(color: AppColor.errorLight, width: 1),
    ),
    focusedBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(infinityRound),
      borderSide: BorderSide(color: AppColor.primaryLight, width: 1),
    ),
    enabledBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(infinityRound),
      borderSide: BorderSide(color: AppColor.borderLight, width: 1),
    ),
    hintStyle: TextStyle(
      color: AppColor.borderLight,
      fontSize: 14,
      fontWeight: FontWeight.w400,
    ),
    isDense: true,
  );

  static InputDecorationTheme darkTheme = InputDecorationTheme(
    border: OutlineInputBorder(
      borderRadius: BorderRadius.circular(infinityRound),
      borderSide: BorderSide(color: AppColor.borderDark, width: 1),
    ),
    contentPadding: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
    filled: false,
    disabledBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(infinityRound),
      borderSide: BorderSide(color: AppColor.borderDark, width: 1),
    ),
    errorBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(infinityRound),
      borderSide: BorderSide(color: AppColor.errorDark, width: 1),
    ),
    focusedBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(infinityRound),
      borderSide: BorderSide(color: AppColor.primaryDark, width: 1),
    ),
    enabledBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(infinityRound),
      borderSide: BorderSide(color: AppColor.borderDark, width: 1),
    ),
    hintStyle: TextStyle(
      color: AppColor.borderDark,
      fontSize: 14,
      fontWeight: FontWeight.w400,
    ),
    isDense: true,
  );
}
