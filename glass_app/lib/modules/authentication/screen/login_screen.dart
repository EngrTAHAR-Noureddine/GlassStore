import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:glass_app/shared/router/app_router.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        scrolledUnderElevation: 0,
      ),
      backgroundColor: context.theme.colorScheme.surface,
      body: Container(
        padding: EdgeInsets.all(8),
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            spacing: 8,
            children: [
              Text(
                "Welcome to Glasses Store!",
                style: context.textTheme.titleSmall,
              ),
              Text(
                "Put your email and password to login.",
                style: context.textTheme.bodyMedium,
              ),
              SizedBox.square(dimension: 32,),
              Form(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisSize: MainAxisSize.min,
                    spacing: 16,
                    children: [
                      TextFormField(

                      ),

                      TextFormField(

                      ),

                      ElevatedButton(
                          onPressed: () => Get.offAllNamed(AppRouter.home.path),
                          child: Row(
                            mainAxisAlignment:MainAxisAlignment.center,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: [Text("Login")],))
                    ],
                  )),

              Row(
                mainAxisAlignment:MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Text("Don't have an account?"),
                  TextButton(
                      onPressed: () => Get.toNamed(AppRouter.userType.path),
                      child: Text("Register")
                  ),
                ],
              ),

            ],
          ),
        )
      )
    );
  }
}
