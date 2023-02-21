import { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import PostCard from "../../components/PostCard";
import { glStyle } from "../../styles/style";

function PostsScreen({ route, navigation }) {
  const [posts, setPosts] = useState([]);

  console.log("navigationPostScreen", navigation.navigate);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <PostCard dataPost={item} navigation={navigation} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
});

export default PostsScreen;
