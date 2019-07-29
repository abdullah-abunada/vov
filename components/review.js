import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import CustomButton from './CustomButton';

export default class Review extends React.Component {
  render() {
    return (
      <View style={styles.containerImage}>
        <View style={{ flexDirection: 'row', marginLeft: 22 }}>
          <View style={styles.imagesContainer}>
            <Image
              source={require('../assets/images/user.jpg')}
              style={[styles.imageStyle]}
            />
            <Image
              source={require('../assets/images/user.jpg')}
              style={[styles.imageStyle, styles.image2Style]}
            />
            <Image
              source={require('../assets/images/user.jpg')}
              style={[styles.imageStyle, styles.image3Style]}
            />
          </View>
          <View style={styles.textContainer}>
            <Text>321+</Text>
            <Text style={{ fontFamily: 'poppins-regular', fontSize: 9 }}>
              Reviews
            </Text>
          </View>
        </View>
        <View style={{ marginRight: 20 }}>
          <CustomButton
            text="Write Review"
            textStyle={styles.button2Style}
            backgroundColor="#EBCAEB"
            height={44}
            width={112}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#F7F6F7',
    borderBottomWidth: 1,
    borderBottomColor: '#F7F6F7',
    marginTop: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
  },
  textContainer: {},
  imageStyle: {
    borderRadius: 50,
    width: 34,
    height: 34,
  },
  image2Style: {
    position: 'relative',
    left: -15,
  },
  image3Style: {
    position: 'relative',
    left: -30,
  },

  button2Style: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#8A04B2',
  },
});
