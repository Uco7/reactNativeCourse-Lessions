import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useColorScheme } from 'react-native';
import { colors } from '../constants/colors';
import { Pressable } from 'react-native';

const ButtonTheme = ({style,...prop}) => {
    const colorScheme = useColorScheme();
    const theme=colors[colorScheme]??colors.light;
  return (
   <Pressable style={({pressed})=>[styles.btn, pressed&&styles.opacity, ,style]}
   {...prop} />
  )
}

export default ButtonTheme

const styles = StyleSheet.create({
    btn:{
        padding:10,
        backgroundColor:colors.primary,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
    },  
    opacity:{
        opacity:0.7
    }

    })