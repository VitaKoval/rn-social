import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native-web";
// screens
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import PostsScreen from "./screens/main/PostsScreen";
import CreatePostsScreen from "./screens/main/CreatePostsScreen";
import ProfileScreen from "./screens/main/ProfileScreen";
// icons
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ButtonActive from "./components/ButtonActive";


const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

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
  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="grid" size={size} color={color} />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarButton: () => (
            <TouchableOpacity >
              <Entypo name="plus" size={13} color="#FFFFFF" />
            </TouchableOpacity>
          ),
        }}
        // options={{
        //   tabBarButton: () => (
        //     <ButtonActive width={70} padding={13} height={40}>
        //       <Entypo name="plus" size={13} color="#FFFFFF" />
        //     </ButtonActive>
        //   ),
        // }}
        // options={{
        //   tabBarIcon: ({ focused, color, size }) => (
        //     <Entypo name="plus" size={size} color={color} />
        //   ),
        // }}
        name="CreatePost"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
}

export default useRoute;
