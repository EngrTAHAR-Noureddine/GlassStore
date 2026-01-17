import 'package:flutter/material.dart';
import 'package:glass_app/modules/authentication/components/user_type_card.dart';
import 'package:glass_app/shared/constant/user_type.dart';

class UserTypeScreen extends StatelessWidget {

  const UserTypeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body : Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          spacing: 16,
          children: [
            UserTypeCard(
              userType: UserType.doctor,
            ),

            UserTypeCard(
              userType: UserType.client,
            )
          ],
        ),
      )
    );
  }
}
