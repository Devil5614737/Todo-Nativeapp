import { ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import { Notes as Note } from "../components/Notes";
import { AddComp } from "../components/AddComp";
import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";




export default function Notes({ navigation }) {
  const { notes } = useContext(NotesContext);

  
  return (
    <>
      <Screen>
        <View style={styles.container}>
          <Text style={styles.text}>All Notes</Text>
          <ScrollView style={styles.notesContainer}>
            {notes.length <= 0 && (
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  color: "grey",
                  marginTop: 222,
                  textAlign: "center",
                }}
              >
                Create notes by clicking the add button below
              </Text>
            )}
            {notes.map((item) => (
              <Note key={item.id} title={item.title} id={item.id} navigation={navigation}/>
            ))}
          </ScrollView>
        </View>

        <AddComp navigation={navigation}/>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 12,
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 35,
    top: 32,
  },
  notesContainer: {
    marginTop: 60,
  },
});
