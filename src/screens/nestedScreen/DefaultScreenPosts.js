import { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
// firebase
import { db } from "../../firebase/config";
import { collection, doc, getDocs } from "firebase/firestore";

import PostCard from "../../components/PostCard";

function DefaultScreenPosts({ route, navigation }) {
  const [posts, setPosts] = useState([]);

  async function getAllPosts() {
    const querySnapshot = await getDocs(collection(db, "posts"));

    //  потрібно щоб вертався масив з обʼєктами і потім його іутити в posts!
   querySnapshot.forEach((doc) => {
      setPosts((prev)=>[...prev, { ...doc.data(), id: doc.id }]);
    });
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  console.log(posts);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <PostCard
            dataPost={item}
            navigation={navigation}
            location={() => {}}
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
