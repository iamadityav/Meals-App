import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({navigation}){
function renderCategoryItem({item}){
    function pressHandler(){
        navigation.navigate('MealsOverview',{
            categoryId: item.id,
        });
    }
    return (
    <CategoryGridTile title={item.title} color={item.color} onPress={pressHandler}/>
    )
}

    return(
        <FlatList data={CATEGORIES}
        keyExtractor={(item)=>item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        />
    )
}
export default CategoriesScreen;