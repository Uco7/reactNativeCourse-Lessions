import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonTheme from '../../components/ButtonTheme'
import ThemedView from '../../components/ThemedView'
import TextTheme from '../../components/TextTheme'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'

const Register  = () => {
  return (
    <ThemedView style={styles.container}>
      <TextTheme style={styles.textStyle}>Register Page</TextTheme>
      <Spacer height={20}/>
      <Text style={styles.textStyle}>This is where users can register.</Text>
      <Spacer height={20}/>
      <ButtonTheme>
        <TextTheme>Register</TextTheme>
      </ButtonTheme>
      <Text>Or</Text>
      <ButtonTheme>
        <Link href="/login">
        
        <TextTheme>Login</TextTheme>
        </Link>
      </ButtonTheme>
      <Link href="/">
      
      <TextTheme>Go to Home</TextTheme>
      </Link>
    </ThemedView>
  )
}

export default Register 

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