import {  StyleSheet} from 'react-native'

import { Link } from 'expo-router'
import Spacer from '../components/Spacer'
import ThemedView from '../components/ThemedView'
import ThemeLogo from '../components/ThemeLogo'
import TextTheme from '../components/TextTheme'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <TextTheme style={styles.title}>Week1 Lession ||Practice On ReactNative</TextTheme>
      
      <ThemeLogo/>
      <Link href="/register">Register An Account</Link>
      <Link href="/login"> Login</Link>
      <Spacer height={20}/>
      <Link href="/profile"> Profile Page</Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingTop: 50
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:20,
        marginTop:"30%",
        textAlign:'center'
    }
})