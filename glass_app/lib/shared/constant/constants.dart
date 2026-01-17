import 'package:flutter/material.dart';

final RouteObserver<ModalRoute<void>> routeObserver =
RouteObserver<ModalRoute<void>>();

const double infinityRound = 100000000;

const String robotoFont = "Roboto";


final BoxShadow boxShadow = BoxShadow(
  color: Colors.black.withValues(alpha: 0.25),
  blurRadius: 10,
  spreadRadius: 0,
  offset: Offset(0, 0),
);

const String defaultImageUrl = "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/bltef575b0f62119da7/623c9e0d5b7c350f0d48fee7/fw24-2.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840";