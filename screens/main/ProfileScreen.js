import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { glStyle } from "../../styles/style";

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
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

export default ProfileScreen;
