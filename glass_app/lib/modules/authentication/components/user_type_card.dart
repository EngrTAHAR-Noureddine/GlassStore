import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:glass_app/shared/constant/user_type.dart';
import 'package:glass_app/shared/router/app_router.dart';

class UserTypeCard extends StatelessWidget {
  final UserType userType;
  const UserTypeCard({super.key, required this.userType});

  @override
  Widget build(BuildContext context) {
    return InkWell(
        onTap: () => Get.toNamed(AppRouter.register.path, arguments: userType),
        child: Container(
          decoration: BoxDecoration(
            color: Colors.blue.withAlpha(90),
            borderRadius: BorderRadius.circular(8),
          ),
          padding: EdgeInsets.all(16),
          child: Column(
            children: [
              Icon(Icons.person, color: context.theme.colorScheme.primary, size: 32,),
              Text(userType.tr, style: context.textTheme.labelSmall,)
            ],
          ),
        )
    );
  }
}
