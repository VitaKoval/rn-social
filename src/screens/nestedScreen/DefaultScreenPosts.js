import { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { getAllPosts } from "../../redux/dashboard/dashboardOperations";
// firebase
import { db } from "../../firebase/config";
import { collection, doc, getDocs } from "firebase/firestore";

import PostCard from "../../components/PostCard";

function DefaultScreenPosts({ route, navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([]);
    getAllPosts();
  },[]);

  async function getAllPosts() {
  const querySnapshot = await getDocs(collection(db, "posts"));

   querySnapshot.forEach((doc) => {
  setPosts((prevState)=>[...prevState, { ...doc.data(), id: doc.id }]);
  });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <PostCard
            dataPost={item}
            navigation={navigation}
          />
        )}
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

export default DefaultScreenPosts;
