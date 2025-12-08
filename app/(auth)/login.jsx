import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonTheme from '../../components/ButtonTheme'
import ThemedView from '../../components/ThemedView'
import TextTheme from '../../components/TextTheme'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'

const login = () => {
  return (
   <ThemedView style={styles.container}>
        
         
           <TextTheme>Login Page</TextTheme>
         
         <ButtonTheme>
           
           
           <TextTheme>Login</TextTheme>
           
         </ButtonTheme>
         <Text>Or</Text>
         <ButtonTheme>
            <Link href="/register">
            <TextTheme>Register</TextTheme>
            </Link>
           
         </ButtonTheme>
         <Link href="/">
         
         <TextTheme>Go to Home</TextTheme>
         </Link>
       </ThemedView>
  )
}

export default login

const styles = StyleSheet.create({
     container:{
        flex:1,
        alignItems:'center',
       
        justifyContent:'center'
    },
    textStyle:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:20
    }
})