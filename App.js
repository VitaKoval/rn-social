import { useCallback} from "react";
// screens
// import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";

// fonts
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export default function App() {
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

  return (
    <>
      {/* <RegistrationScreen /> */}
      <LoginScreen/>
    </>
  );
}
