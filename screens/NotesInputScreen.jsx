import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useContext, useState } from "react";
import Screen from "../components/Screen";
import { Input } from "@ui-kitten/components";
import { NotesContext } from "../context/NotesContext";

export default function NotesInputScreen({ navigation }) {
  const useInputState = (initialValue = "") => {
    const [value, setValue] = React.useState(initialValue);

    return { value, onChangeText: setValue };
  };

  const multilineInputState = useInputState();

  const { handleAddNotes} = useContext(NotesContext);

  return (
    <Screen>
      <View style={styles.container}>
        <Input
          autoFocus
          {...multilineInputState}
          multiline={true}
          textStyle={{
            minHeight: 64,
            color: "#7E7E7E",
            borderColor: "black",
            fontSize: 22,
            borderRadius: 4,
          }}
          placeholder="Write a note"
          style={styles.input}
          placeholderTextColor="grey"
        />

        {
          <TouchableOpacity style={styles.button}>
            <Text
              onPress={() => {
                handleAddNotes(multilineInputState.value);
                if (multilineInputState.value) {
                  navigation.navigate("Notes");
                } else {
                  Alert.alert("input field should not be empty");
                }
              }}
              style={styles.buttonText}
            >
              Add
            </Text>
          </TouchableOpacity>
        }
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 12,
    // marginTop:32
  },
  input: {
    backgroundColor: "#232323",
    color: "#7E7E7E",
    borderColor: "black",
    marginTop: 22,
  },
  button: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 4,
    marginTop: 22,
    padding: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 32,
    textAlign: "center",
  },
});
