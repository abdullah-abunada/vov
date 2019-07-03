import { Dimensions } from 'react-native';
import { Header } from 'react-navigation';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  screenMargin: 15,
  headerHeight: Header.HEIGHT,
};
