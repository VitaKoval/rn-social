import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// screens
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import Home from "./screens/main/Home";

const AuthStack = createStackNavigator();

function useRoute(isAuth) {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return <Home />;
}

export default useRoute;
