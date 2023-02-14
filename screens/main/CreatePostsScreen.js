import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { glStyle } from "../../styles/style";

function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <Text>CreatePostsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreatePostsScreen;
