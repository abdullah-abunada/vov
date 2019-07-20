
import React from 'react';
// import { Permissions, MapView, Location } from 'expo';
import MapView from 'react-native-maps';

export default function searchBar(props) {
  return (
    <MapView
    ref={this.mapRef}
    style={{ flex: 1, alignSelf: 'stretch', height: 150 }}
    initialRegion={{
      latitude: 31.963158,
      longitude: 35.930359,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    // region={this.state.mapRegion}
    provider={null}
    // onRegionChange={this._handleMapRegionChange}
    // onPress={e => this.handleMapPress(e)}
  >
    <MapView.Marker
      coordinate={{
        latitude: 31.963158,
        longitude: 35.930359}}
      title="marker.title"
      description="desss"
    />
  </MapView>
  );
}