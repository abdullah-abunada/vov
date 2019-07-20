
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backdrop: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    opacity: 0,
    backgroundColor: 'black',
  },
  content: {
    borderColor: '#707070',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
