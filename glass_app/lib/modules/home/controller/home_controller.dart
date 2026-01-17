import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:glass_app/modules/account/screen/account_screen.dart';
import 'package:glass_app/modules/favorites/screen/favorites_screen.dart';
import 'package:glass_app/modules/glasses/screen/glasses_screen.dart';
import 'package:glass_app/modules/orders/screen/orders_screen.dart';
import 'package:glass_app/modules/stock/screen/stock_screen.dart';

class HomeController {

  Rx<int> selectedIndex = 0.obs;

  int get length => icons.length;

  List<IconData> icons = [
    CupertinoIcons.eyeglasses, // for doctors
    // Icons.home, // for clients
    Icons.local_shipping,
    CupertinoIcons.heart_fill,
    CupertinoIcons.person_crop_circle,
  ];

  List<Widget> screens = [
    // GlassesScreen(), // for clients
    StockScreen(), // for doctors
    OrdersScreen(),
    FavoritesScreen(),
    AccountScreen(),
  ];

}