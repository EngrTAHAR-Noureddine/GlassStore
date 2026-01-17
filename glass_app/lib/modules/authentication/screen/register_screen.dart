import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:glass_app/modules/authentication/components/custom_app_bar.dart';
import 'package:glass_app/shared/constant/user_type.dart';
import 'package:glass_app/shared/router/app_router.dart';

class RegisterScreen extends StatefulWidget {
  final UserType userType;
  const RegisterScreen({super.key, required this.userType});

  @override
  State<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(title: "Register"),
      body: Container(
        padding: EdgeInsets.all(16),
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(widget.userType.tr, style: context.textTheme.headlineSmall,),
              SizedBox.square(dimension: 16,),
              Form(
                child: Column(
                  spacing: 16,
                  children: [
                    TextFormField(),
                    TextFormField(),
                    TextFormField(),
                    TextFormField(),
                    TextFormField(),
                    TextFormField(),
                    ElevatedButton(
                        onPressed: () => Get.offAllNamed(AppRouter.home.path),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [Text("Register")],)
                    )
                  ],
                ),
              ),

              SizedBox.square(dimension: 32,),

              Row(
                mainAxisAlignment:MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Text("Do have an account?"),
                  TextButton(
                      onPressed: () => Get.offAllNamed(AppRouter.login.path),
                      child: Text("Login")
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
