import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen";

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/image/photoBG.png")}
          style={styles.bgImage}
        >
          <View style={styles.form}>
            <RegistrationScreen/>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
  },
  form: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
    marginTop: 263,
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 45,
    backgroundColor: "#FFFFFF",

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
});
