import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { glStyle } from "../../styles/style";


function PostsScreen() {
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFFFFF',
  },
});

export default PostsScreen;
