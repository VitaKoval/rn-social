import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  View,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState, useCallback, useEffect } from "react";
// screens
import RegistrationScreen from "./screens/RegistrationScreen";
// import LoginScreen from "./screens/LoginScreen";

// fonts
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width - 16*2);

  // dimenshions screen
  useEffect(() => {
    const onChange = () => {
      const windowWidth = Dimensions.get("window").width - 16*2;
      setDimensions(windowWidth);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  // fonts
  const [fontsLoaded] = useFonts({
    Roboto500: require("./assets/fonts/Roboto-Medium.ttf"),
    Roboto400: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  // keyboard
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
        <View style={styles.container} onLayout={onLayoutRootView}>
          <ImageBackground
            source={require("./assets/image/photoBG.png")}
            style={styles.bgImage}
          >
            <KeyboardAvoidingView
              style={styles.containerForm}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <RegistrationScreen
                keyboardShow={keyboardShow}
                isShowKeyboard={isShowKeyboard}
              />
              {/* <LoginScreen
                keyboardShow={keyboardShow}
                isShowKeyboard={isShowKeyboard}
              /> */}
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
  },
  bgImage: {
    flex: 1,
  },
  containerForm: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
