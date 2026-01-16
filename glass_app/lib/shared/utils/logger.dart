
import 'dart:developer';

class Logger {
  static void i(String message) => log(name: "INFO::${DateTime.now().toIso8601String()}", message);
}