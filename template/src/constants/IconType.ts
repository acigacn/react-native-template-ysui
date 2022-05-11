import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const enum FontType {
  antDesign = 'AntDesign',
  ionicons = 'Ionicons',
  evilIcons = 'EvilIcons',
  materialIcons = 'MaterialIcons',
  materialCommunityIcons = 'MaterialCommunityIcons',
}

export default (font: FontType) => {
  switch (font) {
    case FontType.antDesign:
      return AntDesign;
    case FontType.ionicons:
      return Ionicons;
    case FontType.evilIcons:
      return EvilIcons;
    case FontType.materialIcons:
      return MaterialIcons;
    case FontType.materialCommunityIcons:
      return MaterialCommunityIcons;
    default:
      return Ionicons;
  }
};
