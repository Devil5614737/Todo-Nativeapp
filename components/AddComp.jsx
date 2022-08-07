import { StyleSheet, TouchableHighlight } from "react-native"
import { FontAwesome } from '@expo/vector-icons';



export const AddComp=({navigation})=>{
    return (
        <TouchableHighlight style={styles.circle} onPress={()=>{navigation.navigate('NotesInputScreen')
       }}>
            <FontAwesome name="plus" size={24} color="white" />
        </TouchableHighlight>
    )
}

const styles=StyleSheet.create({
    circle:{
        width:55,
        height:55,
        backgroundColor:'#FF002E',
        borderRadius:150,
        position: 'absolute',
        bottom:100,
        right:20,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})