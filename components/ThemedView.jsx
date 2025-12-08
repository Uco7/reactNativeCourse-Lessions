import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useColorScheme } from 'react-native';
import { colors } from '../constants/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ThemedView = ({style, safe=false,...prop}) => {
    const colorScheme = useColorScheme();
    const theme=colors[colorScheme]??colors.light;
    if(!safe) return (

    <View
    style={[{backgroundColor:theme.background},style]}  
    {...prop }
    
    />   )  
    const insets=useSafeAreaInsets
  return (

    <View
    style={[{backgroundColor:theme.navBackground,
    paddingTop:insets.top,paddingBottom:insets.bottom



    },style]}
    
    
    
    {...prop} />
     
    
  )
}

export default ThemedView

const styles = StyleSheet.create({})