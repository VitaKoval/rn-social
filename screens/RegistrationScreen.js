import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

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

      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
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
  button: {
      width: "100%",
      backgroundColor: '#FF6C00',
      borderRadius: 100,
      padding: 16,
      marginTop: 27,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#FFFFFF',
  }
});
