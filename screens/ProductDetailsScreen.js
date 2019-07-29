import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  ImageBackground,
} from 'react-native';
import Map from '../components/Map';
import CustomButton from '../components/CustomButton';
import IconAndLabel from '../components/IconAndLabel';
import Review from '../components/review';

class ProductDetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <ImageBackground
              source={require('../assets/images/product.png')}
              style={{ height: 307 }}>
              <Text> </Text>
            </ImageBackground>

            <View style={styles.map}>
              <View style={{ flex: 3 }}>
                <Map />
              </View>

              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    padding: 15,
                    fontWeight: '900',
                    fontSize: 14,
                    fontFamily: 'poppins-regular',
                    textAlign: 'left',
                    marginLeft: 9,
                  }}>
                  CHECKPEA RESTURANT
                </Text>
                <View style={styles.container2}>
                  <IconAndLabel
                    name="star"
                    color="#F1D542"
                    text="4.5"
                    style={styles.Ionicons}
                  />
                  <IconAndLabel name="pricetag" color="green" text="45%-70%" />
                  <IconAndLabel
                    name="bookmark"
                    color="#F30095"
                    text="VAELACHERY"
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.containerParag}>
            <Text style={{ fontFamily: 'poppins-regular', fontSize: 12 }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, In t.. {'    '}
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                  color: '#8A04B2',
                }}>
                Read more{' '}
              </Text>
            </Text>
          </View>

          <Review />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <CustomButton
            text="GET COUPON"
            textStyle={styles.buttonStyle}
            backgroundColor="#8A04B2"
            height={46}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 18,
    paddingBottom: 4,
  },
  container: {
    flex: 1,
  },
  header: {
    height: 495,
  },
  map: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 180,
    position: 'absolute',
    left: 30,
    right: 30,
    justifyContent: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  containerParag: {
    marginTop: 120,
    marginLeft: 20,
  },
  buttonStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 13,
    textTransform: 'uppercase',
  },
  buttonContainer: {
    margin: 20,
  },
});

ProductDetailsScreen.propTypes = {};

export default ProductDetailsScreen;

ProductDetailsScreen.navigationOptions = {
  header: null,
};




