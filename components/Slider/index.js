import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

 class OffersSlider extends React.Component {
  state = {
    sliderOneChanging: false,
    sliderOneValue: [5],
    multiSliderValue: [3, 7],
    nonCollidingMultiSliderValue: [0, 100],
  };

   sliderOneValuesChangeStart = () => {
    this.setState({
      sliderOneChanging: true,
    });
  };

   sliderOneValuesChange = values => {
    let newValues = [0];
    newValues[0] = values[0];
    this.setState({
      sliderOneValue: newValues,
    });
  };

   sliderOneValuesChangeFinish = () => {
    this.setState({
      sliderOneChanging: false,
    });
  };

   multiSliderValuesChange = values => {
    this.setState({
      multiSliderValue: values,
    });
  };

   nonCollidingMultiSliderValuesChange = values => {
    this.setState({
      nonCollidingMultiSliderValue: values,
    });
  };

   render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.sliderOne}>
          <Text style={styles.text}>
            {this.state.nonCollidingMultiSliderValue[0]}{' '}
          </Text>
          <Text style={styles.text}>
            {this.state.nonCollidingMultiSliderValue[1]}
          </Text>
        </View>
        <MultiSlider
          values={[
            this.state.nonCollidingMultiSliderValue[0],
            this.state.nonCollidingMultiSliderValue[1],
          ]}
          sliderLength={335}
          onValuesChange={this.nonCollidingMultiSliderValuesChange}
          min={0}
          max={100}
          step={1}
          allowOverlap={false}
          snapped
          minMarkerOverlapDistance={40}
          markerStyle={{
            height: 22,
            width: 14,
            backgroundColor: '#8A04B2',
            borderRadius: 5,
          }}
          pressedMarkerStyle={{
            height: 22,
            width: 14,
            backgroundColor: '#8A04B2',
            borderRadius: 5,
          }}
          trackStyle={{
            backgroundColor: '#f5f5f0',
            height: 8,
          }}
          selectedStyle={{
            backgroundColor: '#8A04B2',
          }}
        />
      </View>
    );
  }
}

 export default OffersSlider;

 var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
  },
  text: {
    paddingVertical: 20,
  },
  sliderOne: {
    fontSize: 12,
    opacity: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 'auto',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    position: 'absolute',
    left: 0,
    top: 0,
  },
});