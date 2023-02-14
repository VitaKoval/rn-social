import { StyleSheet, View, Text, TextInput } from "react-native";
import { useState } from "react";
import ButtonActive from "../components/ButtonActive";
import { glStyle } from "../styles/style";


const initialState = {
  email: "",
  password: "",
};

function LoginScreen({ keyboardShow, isShowKeyboard }) {
  const [inputData, setInputData] = useState(initialState);

  function onSubmitForm() {
    console.log(inputData);
    setInputData(initialState);
  }

  return (
    <View style={{ ...styles.form, marginBottom: isShowKeyboard ? -170 : 0 }}>
      <Text style={{...styles.nameForm, ...glStyle.title}}>Login</Text>

      <TextInput
        style={{...styles.input, ...glStyle.text}}
        placeholder="Email"
        onFocus={keyboardShow}
        value={inputData.email}
        onChangeText={(value) =>
          setInputData((pravState) => ({ ...pravState, email: value }))
        }
      />
      <TextInput
        style={{...styles.input, ...glStyle.text}}
        placeholder="Password"
        secureTextEntry={true}
        onFocus={keyboardShow}
        value={inputData.password}
        onChangeText={(value) =>
          setInputData((pravState) => ({ ...pravState, password: value }))
        }
      />
      <ButtonActive onPressButton={onSubmitForm}>Login</ButtonActive>
      <Text style={{...styles.textForm, ...glStyle.text}}>Don’t have an account? Join</Text>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 78,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
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
    marginBottom: 16,
  },
  textForm: {
      marginTop: 16,
      color: '#1B4371'
  },
});
