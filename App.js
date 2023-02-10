import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardShow = () => {
    setIsShowKeyboard(true);
  };

  const keyboardHide = (data) => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <>
      <StatusBar style="auto" />
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container}>
          <ImageBackground
            source={require("./assets/image/photoBG.png")}
            style={styles.bgImage}
          >
            <KeyboardAvoidingView
              style={styles.containerForm}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              {/* <RegistrationScreen
                keyboardShow={keyboardShow}
                isShowKeyboard={isShowKeyboard}
              /> */}
              <LoginScreen
                keyboardShow={keyboardShow}
                isShowKeyboard={isShowKeyboard}

              />
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: 'flex-end',
  },
  bgImage: {
    flex: 1,
  },
  containerForm: {
    flex: 1,
    justifyContent: "flex-end",
  },
  // form: {
  //   alignItems: "center",
  //   paddingHorizontal: 16,
  //   paddingTop: 92,
  //   paddingBottom: 78,
  //   marginTop: "auto",
  //   backgroundColor: "#FFFFFF",

  //   borderTopRightRadius: 25,
  //   borderTopLeftRadius: 25,
  // },
});
