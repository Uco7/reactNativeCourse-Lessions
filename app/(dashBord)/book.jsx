import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextTheme from '../../components/TextTheme'
import ThemedView from '../../components/ThemedView'
import { Link } from 'expo-router'
import Spacer from '../../components/Spacer'

const Book = () => {
  return (
    <ThemedView style={styles.container}>
      <TextTheme style={styles.title}>Book Page</TextTheme>
      <Link href="/">Go to Home</Link>  
      <Spacer height={20}/>                                                            
      <Link href="/profile">Profile Page</Link>                                                              
      <Spacer height={20}/>                                                            
      <Link href="/">Home Page</Link>                                                              
    </ThemedView>
  )
}

export default Book

const styles = StyleSheet.create({
       container:{
        flex:1,
        alignItems:'center',
        paddingTop: 50
    },
    title:{
        fontSize:16,
        fontWeight:'400',
        marginBottom:20,
        marginTop:"30%",
        textAlign:'center'
    }

})