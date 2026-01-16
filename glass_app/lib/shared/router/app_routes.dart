import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:glass_app/modules/authentication/screen/auth_screen.dart';
import 'package:glass_app/modules/home/screen/home_screen.dart';
import 'package:glass_app/shared/router/app_router.dart';

class AppRoutes {
  static GetPageRoute? generateRoute(RouteSettings settings) {

    AppRouter routeSetting = AppRouter.values.byName(settings.name?.replaceAll("/", "") ?? "");
    String effectiveRouteName = routeSetting.path;
    Widget routeWidget = Container();

    switch(routeSetting){
      case AppRouter.login:
        routeWidget = AuthScreen();
        break;
      case AppRouter.home:
        routeWidget = HomeScreen();
        break;
    }

    return GetPageRoute(
      settings: settings, // Use the (potentially updated) settings
      page: () => routeWidget,
      routeName: effectiveRouteName, // Use the (potentially updated) effective route name
    );
  }
}