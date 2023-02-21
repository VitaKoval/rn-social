import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, {Marker} from "react-native-maps";
import { glStyle } from "../../styles/style";

function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{ longitude: "", latitude: "", latitudeDelta: 0.001, longitudeDelta: 0.006, }}
      >
        <Marker coordinate={{longitude: "", latitude: ""}}/>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
