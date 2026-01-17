import 'package:flutter/material.dart';
import 'package:glass_app/modules/authentication/components/custom_app_bar.dart';

class GlassesScreen extends StatefulWidget {
  const GlassesScreen({super.key});

  @override
  State<GlassesScreen> createState() => _GlassesScreenState();
}

class _GlassesScreenState extends State<GlassesScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(title: "Glasses"),
      body: Container(
        padding: EdgeInsets.all(8),
        child: ListView(
          children: [
            Card()
          ],
        ),
      ),
    );
  }
}
