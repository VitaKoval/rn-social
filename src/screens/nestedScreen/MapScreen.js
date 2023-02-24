import { StyleSheet, View, Text } from "react-native";
import MapView, {Marker} from "react-native-maps";


function MapScreen({ route }) {
  const { longitude, latitude } = route.params.location.coords;
  

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{ longitude: longitude.toString(), latitude: latitude.toString(), latitudeDelta: 0.001, longitudeDelta: 0.006, }}
      >
        <Marker coordinate={{longitude: longitude.toString(), latitude: latitude.toString()}}/>
      </MapView>
    </View>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  map: {
    flex: 1,
  },
});


