import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
      },
      subtitleContainer:{
        padding:6,
        margin:6,
        marginHorizontal:24,
        marginVertical:4,
        borderBottomColor:'white',
        borderBottomWidth:2,
      }
})