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