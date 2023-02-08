import {
  StyleSheet,
  Text,
  
  TouchableOpacity,
} from "react-native";

function ButtonActive({children}) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Text style={styles.buttonText}>{children}</Text>
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
  }
});

export default ButtonActive;