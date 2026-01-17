import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:glass_app/shared/constant/constants.dart';
import 'package:glass_app/shared/router/app_routes.dart';
import 'package:glass_app/shared/style/app_theme.dart';
import 'package:glass_app/shared/translation/app_translation.dart';
import 'package:glass_app/shared/utils/extensions.dart';

void main() {
  runApp(GlassesApp());
}

class GlassesApp extends StatelessWidget {

  final GlobalKey<NavigatorState> _navigatorKey = GlobalKey<NavigatorState>();
  GlassesApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      navigatorKey: _navigatorKey,
      title: 'Glasses',
      debugShowCheckedModeBanner: false,
      builder: (context, child) {
        return Overlay(
          initialEntries: [
            OverlayEntry(
              builder: (context) => ScrollConfiguration(
                behavior: NoGlowScrollBehavior(),
                child: child!,
              ),
            ),
          ],
        );
      },
      onGenerateRoute: (settings) => AppRoutes.generateRoute(settings),
      translations: AppTranslation(),
      locale: Locale('en', 'US'),
      fallbackLocale: Locale('en', 'US'),
      themeMode: ThemeMode.system,
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      navigatorObservers: [routeObserver],
    );
  }
}
