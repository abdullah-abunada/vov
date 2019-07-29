import React from 'react';
import { StyleSheet, Dimensions, View, ScrollView, Image } from 'react-native';
import MapView, {
  Polyline,
  ProviderPropType,
  Marker,
  Text,
} from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

const COORDINATES = [
  { latitude: 37.7948605, longitude: -122.4596065 },
  { latitude: 37.8025259, longitude: -122.4351431 },
];

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
    };
  }

  randomColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: this.randomColor(),
        },
      ],
    });
  }

  render() {
    return (
      <MapView
        provider={this.props.provider}
        style={{
          borderWidth: 5,
          width: 335,
          height: 320,
        }}
        initialRegion={this.state.region}
        onPress={e => this.onMapPress(e)}>
        <Polyline
          coordinates={COORDINATES}
          strokeColor="#8a04b2"
          strokeWidth={3}
        />
        {this.state.markers.map(marker => (
          <Marker
            key={marker.key}
            coordinate={marker.coordinate}
            pinColor={marker.color}
          />
        ))}
      </MapView>
    );
  }
}
