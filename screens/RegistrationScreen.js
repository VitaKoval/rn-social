import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import ButtonActive from "../components/ButtonActive";

export default function RegistrationScreen() {
  return (
    <>
      <Text style={styles.nameForm}>Registration</Text>

      <TextInput style={styles.input} placeholder="Login" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <ButtonActive>Register</ButtonActive>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    padding: 16,
    marginVertical: 16,
  },
  nameForm: {
    fontSize: 30,
    marginBottom: 16,
  },
});
