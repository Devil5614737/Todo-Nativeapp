import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import { AntDesign } from "@expo/vector-icons";
import FadeInView from "../Animation";

export default function Intro({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <FadeInView
          style={{ fontSize:22 }}
        >
          <Text style={styles.text}>NotesApp</Text>
        </FadeInView>

        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate("Notes")}
        >
          <AntDesign name="arrowright" size={30} color="white" />
        </TouchableHighlight>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: "black",
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 64,
    textAlign: "center",
    top: 50,
  },
  button: {
    backgroundColor: "#4280EF",
    width: 60,
    height: 60,
    borderRadius: 100,
    position: "absolute",
    bottom: 20,
    right: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 28,
  },
});
