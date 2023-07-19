import { StyleSheet,StatusBar} from 'react-native';
import CategoriesScreen from '../Meals/screens/CategoriesScreen.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MealsOverviewScreen from './screens/MealsOverviewScreen.js';
import DetailedMealScreen from './screens/MealDetailScreen.js';
import FavoritesScreen from './screens/FavoritesScreen.js';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack= createNativeStackNavigator();
const Drawer= createNativeStackNavigator();

function DrawerNavigator(){
  return ;
}


export default function App() {
  return (
    <>
    <StatusBar style="light"/>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#4f47471'},
        headerTintColor: '#0d0c0c',
        contentStyle:{backgroundColor:'#494d4f'},
      }}
      >
        <Stack.Screen 
        name="MealsCategories" 
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
        }} />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        <Stack.Screen name="MealDetail" component={DetailedMealScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
  },
});