import { View,Pressable, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import MealDeatails from './MealDeatails';

const MealItem = ({title,imageUrl ,duration,id,complexity,affordability}) => {

    const navigation = useNavigation();

    function selectMealItemHandler(){
    navigation.navigate('MealDetail',{mealId:id});
    }
    

  return (
    <View style={styles.MealItem}>
        <Pressable style={({pressed}) =>(pressed ? styles.buttonPressed : null)} onPress={selectMealItemHandler}>
            <View>
                <Image source={{uri: imageUrl}} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <MealDeatails 
            duration={duration}
            affordability={affordability}
            complexity={complexity}/>
        </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    MealItem:{
        margin:16,
        borderRadius:8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation:4,
        shadowColor:'black',
        shadowOpacity: 0.25,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
    },
    buttonPressed:{
        opacity:0.25,
    },
    image: {
        width:'100%',
        height:200,
    },
    title: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            margin:5,
        },
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