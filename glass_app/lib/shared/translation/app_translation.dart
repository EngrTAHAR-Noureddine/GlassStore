import 'package:get/get.dart';
import 'package:glass_app/shared/translation/english_strings.dart';

class AppTranslation extends Translations {
  @override
  Map<String, Map<String, String>> get keys => {
    'en_US': EnglishStrings.keys,
    'fr_FR': {'text': 'Text'},
  };
}
