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
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

function CreatePostsScreen({ navigation }) {
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

  async function takePhoto() {
    const photo = await cameraRef.takePictureAsync();
    setPhoto(photo.uri);
  }

  function uploadPhoto() {
    setPhoto(undefined);
  }

  function sendPost() {
    navigation.navigate("Posts", { photo });
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={styles.cameraContainer}>
          <Camera style={styles.camera} ref={setCameraRef}>
            {photo && (
              <View style={styles.photoContainer}>
                <Image style={styles.photo} source={{ uri: photo }} />
              </View>
            )}

            <TouchableOpacity
              style={[
                styles.snapContainer,
                {
                  backgroundColor: photo
                    ? "rgba(255, 255, 255, 0.3);"
                    : "#FFFFFF",
                },
              ]}
              onPress={takePhoto}
            >
              <Ionicons
                name="md-camera"
                size={24}
                color={photo ? "#FFFFFF" : "#BDBDBD"}
              />
            </TouchableOpacity>
          </Camera>
        </View>

        <TouchableOpacity style={styles.actionPhoto} onPress={uploadPhoto}>
          <Text style={[styles.actionPhotoText, glStyle.text]}>
            Upload a photo
          </Text>
        </TouchableOpacity>
        <TextInput
          style={[styles.input, glStyle.textBold]}
          placeholder="Name..."
          onFocus={keyboardShow}
        />
        <View>
          <TextInput
            style={[styles.input, glStyle.text, { paddingLeft: 28 }]}
            placeholder="Location..."
            onFocus={keyboardShow}
          />
          <View style={styles.inputIcon}>
            <EvilIcons name="location" size={24} color="#BDBDBD" />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonActive
            onPressButton={sendPost}
            backgroundColor={photo ? "#FF6C00" : "#F6F6F6"}
            textColor={{ color: photo ? "#FFFFFF" : "#BDBDBD" }}
          >
            Send
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
  cameraContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    overflow: "hidden",
  },
  camera: {
    height: 240,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  photoContainer: {
    position: "absolute",
    top: 0,
    left: 0,

    borderRadius: 8,
    overflow: "hidden",
  },
  photo: {
    minWidth: 100,
    height: 100,
  },
  snapContainer: {
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
  inputIcon: {
    position: "absolute",
    top: 30,
    left: 0,
  },
  buttonContainer: {
    marginTop: 16,
  },
});

export default CreatePostsScreen;
