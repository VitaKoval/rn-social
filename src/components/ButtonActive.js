import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { glStyle } from "../styles/style";

function ButtonActive({children, onPressButton, textColor, ...props}) {
  return (
    <TouchableOpacity style={{...styles.button, ...props}} activeOpacity={0.8} onPress={onPressButton}>
      <Text style={{...styles.buttonText, ...glStyle.text, ...textColor}}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
      fontFamily: 'Roboto400',
      fontSize: 16,
  }
});

export default ButtonActive;