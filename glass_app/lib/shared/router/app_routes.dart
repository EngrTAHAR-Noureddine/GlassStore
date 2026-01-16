import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:glass_app/modules/authentication/screen/auth_screen.dart';
import 'package:glass_app/modules/home/screen/home_screen.dart';
import 'package:glass_app/shared/router/app_router.dart';
import 'package:glass_app/shared/utils/logger.dart';

class AppRoutes {
  static GetPageRoute? generateRoute(RouteSettings settings) {
    String settingName = (settings.name != null && settings.name!.isNotEmpty && settings.name != "/") ? settings.name! : "/login";
    Logger.i("settingName: $settingName");
    AppRouter routeSetting = AppRouter.values.byName( settingName.replaceAll("/", ""));
    String effectiveRouteName = routeSetting.path;
    Widget routeWidget = Container();

    switch(routeSetting){
      case AppRouter.home:
        routeWidget = HomeScreen();
        break;
      case AppRouter.login:
        routeWidget = AuthScreen();
        break;
    }

    return GetPageRoute(
      settings: settings, // Use the (potentially updated) settings
      page: () => routeWidget,
      routeName: effectiveRouteName, // Use the (potentially updated) effective route name
    );
  }
}