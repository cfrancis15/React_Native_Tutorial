import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'


const Register = () => {
  return (

      <ThemedView style = {styles.container}>
        <Spacer/>
            <ThemedText title = {true} style={styles.title}>
                Register your account
            </ThemedText>

        <Spacer height={100}/>
            <Link href='/register'>
                <ThemedText style={{textAlign:'center'}}>Register</ThemedText>
            </Link>

      </ThemedView>

  )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
    },
    title:{
        textAlign:"center",
        fontsize:18,
        marginBottom:30
    }
})