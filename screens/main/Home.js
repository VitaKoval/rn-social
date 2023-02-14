import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { glStyle } from "../../styles/style";

function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
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

export default Home;
