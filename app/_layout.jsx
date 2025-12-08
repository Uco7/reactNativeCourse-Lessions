import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router';
import { colors } from '../constants/colors';

const RootLayer = () => {
  const colorScheme=useColorScheme();
  const theme=colors[colorScheme]??colors.light;
  return (
    <>
    <StatusBar value="auto"/>
    <Stack screenOptions={{headerStyle:{backgroundColor:theme.navBackground}
    ,headerTitleStyle:{color:theme.text},headerTintColor:theme.text}}>

      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: 'Home page',
        }}
      />
      <Stack.Screen name='(auth)'options={{headerShown:false}}/>
      <Stack.Screen name='(dashBord)'options={{headerShown:false}}/>
    </Stack>
    
    </>
  )
}

export default RootLayer

const styles = StyleSheet.create({})