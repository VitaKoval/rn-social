import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

// icons
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const MainTab = createBottomTabNavigator();

function Home() {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF6C00",
      }}
    >
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="grid" size={size} color={color} />
          ),
          headerShown: false,
        }}
        name="PostsScreen"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? "#F6F6F6" : "#FF6C00",
                  borderRadius: 100,
                  width: 70,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {!focused ? (
                  <Entypo name="plus" size={size} color="#FFFFFF" />
                ) : (
                  <Feather name="trash-2" size={size} color="#BDBDBD" />
                )}
              </View>
            );
          },
        }}
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
