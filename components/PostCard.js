import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { glStyle } from "../styles/style";

import { EvilIcons } from "@expo/vector-icons";

function PostCard({ dataPost, navigation }) {
  const { photo } = dataPost;

  function toComments() {
    navigation.navigate("CommentsScreen");
  }

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image source={{ uri: photo }} style={styles.photo} />
      </View>
      <Text style={[styles.namePhoto, glStyle.textBold]}>Name photo</Text>
      <View style={styles.descriptionContainer}>
        <TouchableOpacity style={styles.commentContainer} onPress={() => {}}>
          <EvilIcons name="comment" size={24} color="#BDBDBD" />
          <Text style={[styles.commentCounter, glStyle.text]}>0</Text>
        </TouchableOpacity>
        <View style={styles.locationContainer}>
          <EvilIcons name="location" size={24} color="#BDBDBD" />
          <Text style={[styles.locationText, glStyle.text]}>Location</Text>
        </View>
      </View>
    </View>
  );
}

export default PostCard;

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginVertical: 16,

    // borderWidth: 1,
    // borderColor: 'black',
  },
  photoContainer: {
    height: 240,
    overflow: "hidden",
    borderRadius: 8,
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  namePhoto: {
    marginVertical: 8,
    color: "#212121",
  },
  descriptionContainer: {
    flexDirection: "row",
  },
  commentContainer: {
    flexDirection: "row",
    marginRight: 4,
    width: 75,
  },
  commentCounter: {
    color: "#BDBDBD",
  },
  locationContainer: {
    flexDirection: "row",
  },
  locationText: {
    marginLeft: 4,
  },
});
