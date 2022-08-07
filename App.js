import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import Intro from './screens/Intro';
import Notes from './screens/Notes';
import NotesInputScreen from './screens/NotesInputScreen';
import { NotesContextProvider } from './context/NotesContext';
import LoginScreen from './screens/LoginScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <>
   <StatusBar  animated={true}
        style={'light'}
        />
    <ApplicationProvider {...eva} theme={eva.light}>

<NotesContextProvider>
<NavigationContainer theme={DarkTheme} >
  <Stack.Navigator  screenOptions={{headerShown:false,animation:'none'}} >

    <Stack.Screen name="Intro" component={Intro} />
    <Stack.Screen name="Notes" component={Notes} />
    <Stack.Screen name="NotesInputScreen" component={NotesInputScreen} />


 
  </Stack.Navigator>
</NavigationContainer>
</NotesContextProvider>
 
</ApplicationProvider>
</>
  );
}


