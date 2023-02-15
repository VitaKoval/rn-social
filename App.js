import { useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import useRoute from "./router";
// fonts
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

function App() {
  const [isAuth, setIsAuth] = useState(null);

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

  const routing = useRoute(isAuth);

  return (
    // обернуть onLayout={onLayoutRootView}
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
}

export default App;
