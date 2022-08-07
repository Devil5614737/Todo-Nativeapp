import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import Screen from '../components/Screen'

// import {auth} from '../firebase';


export default function LoginScreen() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

const register=()=>{

}

  return (
    <Screen>
    <View style={styles.container}>

        <Text style={styles.title}>Login / Signup</Text>
        <View style={styles.inputContainer}>
                <TextInput value={email} onChangeText={text=>setEmail(text)} placeholderTextColor={'grey'} style={styles.input} placeholder='enter email' textContentType='emailAddress'/>
                <TextInput value={password}  onChangeText={text=>setPassword(text)} placeholderTextColor={'grey'} style={styles.input} placeholder='enter password' textContentType='password'/>
          
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.btnText}>Signup</Text>
                </TouchableHighlight>
        </View>
 
    </View>

    </Screen>
  )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        padding:12
    },
    title:{
        color:'white',
        fontWeight:'bold',
        fontSize:28,
        textAlign:'center',
        marginTop:22
    },
    inputContainer:{
marginTop:33
    },
    input:{

        marginBottom:15,
        borderRadius:5,
        color:'white',
        fontSize:18,
        padding:12,
        backgroundColor:'#252525'
    },
    button:{
borderWidth:2,
borderColor:'white',
        backgroundColor:'black',
        borderRadius:5,
        marginTop:34,
        padding:18,
    },
    btnText:{
        color:'white',
        fontSize:18,
        textAlign:'center',
        borderRadius:5,
    }
})