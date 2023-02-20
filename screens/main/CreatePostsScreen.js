import { Camera } from "expo-camera";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import ButtonActive from "../../components/ButtonActive";
import { glStyle } from "../../styles/style";
import { Ionicons } from '@expo/vector-icons';

function CreatePostsScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState();
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  // keyboard
  const keyboardShow = () => {
    setIsShowKeyboard(true);
  };

  const keyboardHide = (data) => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  // camera
  const cameraAccessRequest = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  };

  useEffect(() => {
    cameraAccessRequest();
  }, []);

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
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <Camera style={styles.camera} ref={setCameraRef}>
          {photo && (
            <View style={styles.photoContainer}>
              <Image style={styles.photo} source={{ uri: photo }} />
            </View>
          )}

          <TouchableOpacity
            style={[styles.snapContainer, {backgroundColor: photo? "rgba(255, 255, 255, 0.3);" :"#FFFFFF",}]}
            onPress={takePhoto}
          >
            <Ionicons name="md-camera" size={24} color={photo ? '#FFFFFF':"#BDBDBD"} />
          </TouchableOpacity>
        </Camera>
        <TouchableOpacity style={styles.actionPhoto} onPress={() => {}}>
          <Text style={[styles.actionPhotoText, glStyle.text]}>
            Upload a photo
          </Text>
        </TouchableOpacity>
        <TextInput
          style={[styles.input, { fontFamily: "Roboto500" }]}
          placeholder="Name..."
          onFocus={keyboardShow}
        />
        <TextInput
          style={[styles.input, { fontFamily: "Roboto400" }]}
          placeholder="Locality..."
          onFocus={keyboardShow}
        />
        <View style={styles.buttonContainer}>
          <ButtonActive
            onPressButton={() => {}}
            backgroundColor={photo ? "#FF6C00" : "#F6F6F6"}
            textColor={{color: photo ? "#FFFFFF" : "#BDBDBD"}}
          >
            Publish
          </ButtonActive>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  camera: {
    height: 240,
    alignItems: "center",
    justifyContent: "center",
  },
  photoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    borderWidth: 1,
    borderColor: "red",
  },
  photo: {
    minWidth: 100,
    height: 100,
  },
  snapContainer: {

              borderWidth: 1,
              width: 60,
              height: 60,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            
  },
  actionPhoto: {
    marginTop: 8,
    marginBottom: 16,
  },
  actionPhotoText: {
    color: "#BDBDBD",
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 16,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 2,
    marginVertical: 16,
  },
  buttonContainer: {
    marginTop: 16,
  },
});

export default CreatePostsScreen;
