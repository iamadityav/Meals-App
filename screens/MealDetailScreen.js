import {View, Text,Image,StyleSheet,ScrollView} from 'react-native';
import React from 'react';
import {MEALS} from '../data/dummy-data';
import Subtitle from '../components/Subtitle';
import List from '../components/List';
import MealDeatails from '../components/MealDeatails';

const DetailedMealScreen = ({route}) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <ScrollView>
      <Image style={style.image} source={{uri: selectedMeal.imageUrl}} />
      <Text style={style.title}>{selectedMeal.title}</Text>
      <MealDeatails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={style.detailText}
      />
      <Subtitle>Ingredients</Subtitle>
      <List data={selectedMeal.ingredients}/>
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps}/>
    </ScrollView>
  );
};

export default DetailedMealScreen;
const style= StyleSheet.create({
  image:{
    width:'100%',
    height:350,
  },
  title:{
    fontWeight:'bold',
    fontSize:24,
    margin:8,
    textAlign:'center',
    color:'white',
  },
  detailText:{
    color:'white',
  },
})
