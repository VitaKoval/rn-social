import {
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import ButtonActive from "../components/ButtonActive";

function RegistrationScreen({keyboardShow, keyboardHide}) {
    return (
      <>
      <Text style={styles.nameForm}>Registration</Text>

      <TextInput style={styles.input} placeholder="Login" onFocus={keyboardShow}/>
      <TextInput style={styles.input} placeholder="Email" onFocus={keyboardShow}/>
      <TextInput
        style={styles.input}
        placeholder="Password"
                secureTextEntry={true}
                onFocus={keyboardShow}
      />
            <ButtonActive>Register</ButtonActive>
            <Text style={styles.textForm}>Do you have an account? Sing in</Text>
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
    marginBottom: 16,
  },
  nameForm: {
    fontSize: 30,
    marginBottom: 16,
    },
    textForm: {
      marginTop: 16,
  }
});

export default RegistrationScreen;
