import 'package:flutter/material.dart';
import 'package:get/get.dart';

class CustomAppBar extends StatelessWidget implements PreferredSizeWidget {
  final bool backIcon;
  final String title;
  final Widget? leading;
  final bool centerTitle;
  final Color? bgColor;
  final Color? fgColor;
  final List<Widget>? trailing;
  
  const CustomAppBar({
    super.key,
    this.backIcon = false,
    required this.title,
    this.centerTitle = false,
    this.trailing,
    this.bgColor,
    this.fgColor,
    this.leading,
  });

  @override
  Widget build(BuildContext context) {
    return AppBar(
      elevation: 0,
      scrolledUnderElevation: 0,
      title: Text(title, style: context.textTheme.labelSmall?.copyWith(color: fgColor)),
      centerTitle: centerTitle,
      backgroundColor: bgColor,
      leading: leading,
      actions: trailing,
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}