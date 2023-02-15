// import { useState, useEffect } from "react";
// import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native-web";
// import { glStyle } from "../../styles/style";
// screens
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

// icons
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ButtonActive from "../../components/ButtonActive";

const MainTab = createBottomTabNavigator();

function Home() {
  return (
     <MainTab.Navigator screenOptions={{ tabBarShowLabel: false,  }}>
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
        // options={{
        //   tabBarButton: () => (
        //     <TouchableOpacity />
        //     //   <Entypo name="plus" size={13} color="#FFFFFF" />
        //     // </TouchableOpacity>
        //   ),
        // }}
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

export default Home;
