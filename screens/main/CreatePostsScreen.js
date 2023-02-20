import { Camera } from "expo-camera";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { glStyle } from "../../styles/style";

function CreatePostsScreen() {
  const [hasPermission, setHasPermission] = useState (null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState();

  const cameraAccessRequest = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  }

  useEffect(() => {
    cameraAccessRequest();
  }, [])

  // if (hasPermission === null) { 
  //   return <View />; 
  // } 
  // if (hasPermission === false) { 
  //   return <Text>Нет доступа к камере</Text>; 
  // }

  const takePhoto = async () => {
    const photo = await cameraRef.takePictureAsync();
    setPhoto(photo.uri);
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCameraRef}>
        {photo && (
          <View style={styles.photoContainer}>
            <Image style={styles.photo} source={{ uri: photo }} />
          </View>
        )}

        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: 50,
            height: 50,
            borderColor: "red",
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={takePhoto}
        >
          <Text style={{ color: "white" }}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  camera: {
    height: 240,
    alignItems: "center",
    justifyContent: "center",
  },
  photoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderWidth: 1,
    borderColor: "red",
  },
  photo: {
    width: 150,
    height: 150,
  },
});

export default CreatePostsScreen;
