import {Stack} from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const RootLayout = () => {
  return (

        <Stack screenOptions={{
            headerStyle:{backgroundColor:'#ddd'},
            headerTintColor:'#333'
        }}> //Puts content below a navbar style back button. screenOptions sets options globally for all screens
            
            
            <Stack.Screen name='index' options={{title:'Homepage, StackScreen options title'}}/>
            <Stack.Screen name='about' options={{title: 'About Section'}}/>
            <Stack.Screen name='contact' options={{title:'Contact', headerShown:false}}/>
        </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})