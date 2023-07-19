import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const MealDeatails = ({duration, complexity , affordability}) => {
  // const complexityText = typeof complexity === 'string' ? complexity.toUpperCase() : '';
  // const affordabilityText = typeof complexity === 'string' ? complexity.toUpperCase() : '';
  return (
    <View style={styles.details}>
    <Text style={styles.detailItem}>{duration}m</Text>
    <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
    <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
</View>
  )
}

export default MealDeatails;
const styles =StyleSheet.create({
    details: {
        flexDirection:'row',
        alignItems:'center',
        padding:8,
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12,
    }
})