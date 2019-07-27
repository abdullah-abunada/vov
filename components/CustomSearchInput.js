import React from "react";
import { Platform, View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function searchBar(props) {
  return (
    <View style={styles.container}>
      <Ionicons
        name={
          Platform.OS === "ios"
            ? `ios-${props.iconName}`
            : `md-${props.iconName}`
        }
        size={26}
        style={{ paddingHorizontal: 10 }}
        color={"#707070"}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor="#DEDEDE"
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DEDEDE",
    borderRadius: 10
  },
  textInput: {
    fontSize: 12,
    fontFamily: "poppins-regular"
  }
});
