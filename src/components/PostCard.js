import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { glStyle } from "../styles/style";
// icons
import { EvilIcons } from "@expo/vector-icons";

function PostCard({ dataPost, navigation }) {
  const { userId, nikname, imageUrl, location, district, description, id } = dataPost;

  function toComments() {
    navigation.navigate("CommentsScreen", {id, imageUrl});
  }

  function toLocationMap() {
    navigation.navigate("MapScreen", { location });
  }

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image source={{ uri: imageUrl }} style={styles.photo} />
      </View>
      <Text style={[styles.namePhoto, glStyle.textBold]}>{description}</Text>
      <View style={styles.descriptionContainer}>
        <TouchableOpacity style={styles.commentContainer} onPress={toComments}>
          <EvilIcons name="comment" size={24} color="#BDBDBD" />
          <Text style={[styles.commentCounter, glStyle.text]}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.locationContainer}
          onPress={toLocationMap}
        >
          <EvilIcons name="location" size={24} color="#BDBDBD" />
          <Text style={[styles.locationText, glStyle.text]}>
            {`${district.city}, ${district.country}`}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PostCard;

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginVertical: 16,
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
