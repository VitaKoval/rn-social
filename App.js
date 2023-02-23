import { useCallback, useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
// fonts
import { useFonts } from "expo-font";
import Main from "./src/components/Main";

// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

function App() {
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
    // onLayout={onLayoutRootView}
    <Provider store={store} >
     <Main/>
    </Provider>
  );
}

export default App;
