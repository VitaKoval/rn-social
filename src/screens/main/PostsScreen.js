import React from "react";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultScreenPosts from "../nestedScreen/DefaultScreenPosts";
import MapScreen from "../nestedScreen/MapScreen";
import CommentsScreen from "../nestedScreen/CommentsScreen";
import { authSingOutUser } from "../../redux/auth/authOperations";

// icons
import { MaterialIcons } from "@expo/vector-icons";

const NestedScreen = createStackNavigator();

function PostsScreen() {
  const dispatch = useDispatch();

  function onLogoutHandle() {
      dispatch(authSingOutUser());
  }

  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={onLogoutHandle}>
              <MaterialIcons
                name="logout"
                size={24}
                color="#BDBDBD"
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          ),
        }}
        name="Posts"
        component={DefaultScreenPosts}
      />
      <NestedScreen.Screen name="MapScreen" component={MapScreen} />
      <NestedScreen.Screen name="CommentsScreen" component={CommentsScreen} />
    </NestedScreen.Navigator>
  );
}

export default PostsScreen;
