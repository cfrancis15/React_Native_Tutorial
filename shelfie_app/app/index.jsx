import { StyleSheet, Text, View, Image } from 'react-native'
import Train from '../assets/img/Train.jpg'


const Home = () => {
  return (
    <View style={styles.container}>
        <Image source={Train} style={styles.image}/>


      <Text style={[styles.title, {color:'purple'}]}>Title text</Text>
      <Text style = {{marginTop:10, marginBottom:10}}>Hello stylesheet</Text>
    

        <View style={cardStyles.card}>
            <Text>This is a Class</Text>
        </View>
    
    </View>
  )
}

export default Home



//creating stylesheets we use above

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    image:{
        marginVertical:20,
        width:150,
        height:90

    },


    title:{
        fontWeight:'bold',
        fontSize:18
    }




})

const cardStyles= StyleSheet.create({
    card:{
        backgroundColor:'#eeee',
        borderRadius: 5,
        padding: 20,
        boxShadow:'4px 4px rgba(0,0,0,0.1)'
    }
})