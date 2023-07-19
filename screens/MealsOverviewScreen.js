import {React ,useLayoutEffect} from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { MEALS , CATEGORIES} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({ route , navigation}) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(catId)
  );

  useLayoutEffect(() =>{

  const categoryTitle=CATEGORIES.find((category) => category.id === catId).title;

  navigation.setOptions({
    title:categoryTitle,
  });

  },[catId,navigation]);


  function renderMealItem({ item }) {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
