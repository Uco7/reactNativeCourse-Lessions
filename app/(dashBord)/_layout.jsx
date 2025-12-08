import {  useColorScheme} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { colors } from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

const DashBordLayout = () => {
    const colorScheme = useColorScheme();
    const theme = colors[colorScheme] ?? colors.light;
  return (
   <Tabs screenOptions={{headerShown:false,
    tabBarStyle:{backgroundColor:theme.navBackground},
    tabBarActiveTintColor:theme.text,
    tabBarInactiveTintColor:theme.inactiveTint



   }}>
    {/* we want tab */}
    <Tabs.Screen name="book" options={{title:'Book Page',
      tabBarIcon:({focused})=>(
        <Ionicons
        name={focused?'book':'book-outline'}
        size={24}
        color={focused?theme.text:theme.inactiveTint}   
        
        
        />
      )



    }}/>
    <Tabs.Screen name="profile" options={{title:'Profile Page',
    tabBarIcon:({focused})=>(
      <Ionicons
      name={focused?'person':'person-outline'}
      size={24}
      color={focused?theme.text:theme.inactiveTint}/>


  )}}/>
  <Tabs.Screen name="create" options={{title:"create Page",
  tabBarIcon:({focused})=>(
    <Ionicons
      name={focused?"create":"create-outline"}
    size={24}
    color={focused?theme.text:theme.inactiveTint}
    />
  )

  }}/>
   </Tabs>
  )
}

export default DashBordLayout

