import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:glass_app/modules/home/controller/home_controller.dart';
import 'package:glass_app/shared/constant/constants.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {

  late final HomeController _controller;

  @override
  void initState() {
    super.initState();
    _controller = HomeController();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ObxValue((selectedIndex) => _controller.screens[selectedIndex.value], _controller.selectedIndex),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
      floatingActionButton: Container(
        margin: EdgeInsets.all(8),
        decoration: BoxDecoration(
          color: context.theme.cardColor,
          borderRadius: BorderRadius.circular(infinityRound),
          boxShadow: [
            boxShadow
          ]
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          spacing: 4,
          children: List.generate(_controller.length, (index) => _floatingButton(index)),
        ),
      ),
    );
  }

  Widget _floatingButton(int index) => ObxValue((selectedIndex) => FloatingActionButton(
    backgroundColor: selectedIndex.value == index ? context.theme.colorScheme.primary : context.theme.colorScheme.surface,
    onPressed: () => _controller.selectedIndex.value = index,
    mini: true,
    child: Icon(_controller.icons[index], color: selectedIndex.value == index ? context.theme.colorScheme.surface : context.theme.colorScheme.primary,),
  ), _controller.selectedIndex);
}
