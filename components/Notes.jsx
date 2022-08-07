import { Card, Text as T } from "@ui-kitten/components";
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableHighlight, View } from "react-native";
import {useContext} from 'react';
import {NotesContext} from '../context/NotesContext';


export const Notes=({title,id})=>{
  const {handleDeleteNotes}=useContext(NotesContext)

    return (
        <Card style={styles.card}>
        <T style={styles.cardText}>
          {title}
        </T>
        <View style={styles.iconContainer}>
    
        <TouchableHighlight onPress={()=>handleDeleteNotes(id)}>

        <MaterialIcons style={{right:0}} name="delete" size={24} color="red" />
        </TouchableHighlight>
        </View>
      </Card>
    )
}



const styles = StyleSheet.create({
    card: {
      backgroundColor: "#252525",
      borderColor:"#252525",
      paddingBottom:12,
      marginBottom:25
    },
    cardText: {
      color: "#7E7E7E",
      maxWidth:'80%'
    },
    iconContainer:{
      position:'absolute',
      right:18,
      bottom:0,
      flexDirection:'row',
      alignItems:'center'
    }
  });
  