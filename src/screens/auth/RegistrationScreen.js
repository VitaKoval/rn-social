import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import ButtonActive from "../../components/ButtonActive";
import { glStyle } from "../../styles/style";
import { authSingUpUser } from "../../redux/auth/authOperations"; 
import { useDispatch } from 'react-redux';

const initialState = {
  email: "",
  login: "",
  password: "",
};

function RegistrationScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [inputData, setInputData] = useState(initialState);

  const dispatch = useDispatch();
  
  // keyboard
  const keyboardShow = () => {
    setIsShowKeyboard(true);
  };

  const keyboardHide = (data) => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  function onSubmitForm() {
    console.log(inputData);
    dispatch(authSingUpUser(inputData));
    setInputData(initialState);
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../../assets/image/photoBG.png")}
            style={styles.bgImage}
          >
            <KeyboardAvoidingView
              style={styles.containerForm}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View
                style={{
                  ...styles.form,
                  marginBottom: isShowKeyboard ? -170 : 0,
                }}
              >
                <Text style={{ ...styles.nameForm, ...glStyle.title }}>
                  Registration
                </Text>

                <TextInput
                  style={{ ...styles.input, ...glStyle.text }}
                  placeholder="Login"
                  onFocus={keyboardShow}
                  value={inputData.login}
                  onChangeText={(value) =>
                    setInputData((pravState) => ({
                      ...pravState,
                      login: value,
                    }))
                  }
                />
                <TextInput
                  style={{ ...styles.input, ...glStyle.text }}
                  placeholder="Email"
                  onFocus={keyboardShow}
                  value={inputData.email}
                  onChangeText={(value) =>
                    setInputData((pravState) => ({
                      ...pravState,
                      email: value,
                    }))
                  }
                />
                <TextInput
                  style={{ ...styles.input, ...glStyle.text }}
                  placeholder="Password"
                  secureTextEntry={true}
                  onFocus={keyboardShow}
                  value={inputData.password}
                  onChangeText={(value) =>
                    setInputData((pravState) => ({
                      ...pravState,
                      password: value,
                    }))
                  }
                />
                <ButtonActive onPressButton={onSubmitForm}>
                  Register
                </ButtonActive>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <Text style={{ ...styles.textForm, ...glStyle.text }}>
                    Already have an account?{""}
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={{ ...glStyle.text, color: "#1B4371" }}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImage: {
    flex: 1,
  },
  containerForm: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 92,
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
    marginBottom: 33,
  },
  textForm: {
    marginTop: 16,
    color: "#1B4371",
  },
});

export default RegistrationScreen;




// const [dimensions, setDimensions] = useState(
  //   Dimensions.get("window").width - 16 * 2
  // );

  // // dimenshions screen
  // useEffect(() => {
  //   const onChange = () => {
  //     const windowWidth = Dimensions.get("window").width - 16 * 2;
  //     setDimensions(windowWidth);
  //   };
  //   Dimensions.addEventListener("change", onChange);
  //   return () => {
  //     Dimensions.removeEventListener("change", onChange);
  //   };
  // }, []);
