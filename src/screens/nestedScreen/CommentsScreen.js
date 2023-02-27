import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { glStyle } from "../../styles/style";
// firebase
import { db } from "../../firebase/config";
import { collection, doc, getDocs, addDoc } from "firebase/firestore";

// icons
import { AntDesign } from "@expo/vector-icons";

function CommentsScreen({ route }) {
  const { id, imageUrl } = route.params;
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    setAllComments([]);
    getAllComments();
  }, [])

  async function createComment() {
    const postsRef = await doc(db, "posts", id);

    await addDoc(collection(postsRef, "comments"), { comment });

    setAllComments((prev => [...prev, { comment }]))
    setComment('');
  }

 async function getAllComments() {
     const postsRef = await doc(db, "posts", id);

    const querySnapshot = await getDocs(collection(postsRef, "comments"));

   querySnapshot.forEach((doc) => {
      setAllComments((prevState)=>[...prevState, { ...doc.data(), commentId: doc.id}])
  });
  }

  return (
    <View style={styles.container}>
       <View style={styles.photoContainer}>
        <Image source={{ uri: imageUrl }} style={styles.photo} />
      </View>
      <View style={styles.listContainer}>
         <FlatList
        data={allComments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.avatarComments}></View>
            <Text style={[styles.textComments, glStyle.textSmall]}>{item.comment}</Text>
          </View>
        )}
      />
</View>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={[glStyle.textBold, styles.inputComments]}
          placeholder="Сomment..."
          value={comment}
          onChangeText={setComment}
        />

        <TouchableOpacity
          onPress={createComment}
          style={styles.buttonContainer}
        >
          <AntDesign name="arrowup" size={16} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  photoContainer: {
    height: 240,
    overflow: "hidden",
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 32,
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  listContainer: {
    // marginVertical: 16,
    flex: 1,
    marginBottom: 32,
  },
  itemContainer: {
    marginTop: 24,
    flexDirection: 'row',
  },
  avatarComments: {
    width: 28,
    height: 28,
    borderRadius: 14,

    backgroundColor: 'red',
  },
  textComments: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    padding: 16,
    marginLeft: 16,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    color: '#212121',
  },
  inputContainer: {
    marginTop: "auto",
  },
  inputComments: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    padding: 16,
    backgroundColor: "#F6F6F6",
  
  },
  buttonContainer: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 34,
    height: 34,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
  },
});
