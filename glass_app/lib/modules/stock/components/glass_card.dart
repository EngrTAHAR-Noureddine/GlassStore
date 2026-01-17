import 'package:flutter/material.dart';
import 'package:glass_app/shared/components/custom_network_image.dart';
import 'package:glass_app/shared/constant/constants.dart';

class GlassCard extends StatelessWidget {
  const GlassCard({super.key});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          CustomNetworkImage(
            defaultImageUrl,
            fit: BoxFit.cover,
            boxShape: BoxShape.rectangle,
            // width: 200,
            // height: 200,
          ),
          Row(
            children: [
              Text("Glass Name"),
              Icon(Icons.star)
            ],
          )
        ],
      ),
    );
  }
}
