import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useColorScheme } from 'react-native';
import { colors } from '../constants/colors';

const TextTheme = ({style,...prop}) => {
    const colorScheme = useColorScheme();
    const theme=colors[colorScheme]??colors.light;
    const textColor=theme=="dark"?theme.title:theme.text;
  return (
 
      <Text
      style={[{color:textColor},style]}
      {...prop}
      
      />
    
  )
}

export default TextTheme

const styles = StyleSheet.create({})