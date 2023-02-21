import { createStackNavigator } from "@react-navigation/stack";
import DefaultScreenPosts from "../nestedScreen/DefaultScreenPosts";
import MapScreen from "../nestedScreen/MapScreen";
import CommentsScreen from "../nestedScreen/CommentsScreen";

// icons
import { MaterialIcons } from "@expo/vector-icons";

const NestedScreen = createStackNavigator();

function PostsScreen() {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        options={{
          headerRight: () => (
            <MaterialIcons
              name="logout"
              size={24}
              color="#BDBDBD"
              style={{ marginRight: 16 }}
            />
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
