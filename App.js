import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, TextInput } from "react-native";
require;
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/image/photoBG.png")}
          style={styles.bgImage}
        >
          <View style={styles.form}>
            <Text style={styles.nameForm}>Registration</Text>
            <View >
              <TextInput style={styles.input}/>
            </View>
            <View >
              <TextInput style={styles.input}/>
            </View>
            <View >
              <TextInput style={styles.input}/>
            </View>
      </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
  },
  form: {
    flex: 1,
    justifyContent: "flex-start",
    // alignItems: 'center',
    marginTop: 263,
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 45,
    backgroundColor: '#FFFFFF',

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    padding: 16,
  },
  nameForm: {
    fontSize: 30,
  }
});
