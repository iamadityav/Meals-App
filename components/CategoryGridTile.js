import {View,Pressable,Text,StyleSheet} from 'react-native';
import React from 'react';

const CategoryGridTile = ({title,color,onPress}) => {
  return (
    <View style={[styles.gridItem,]}>
      <Pressable style= {({pressed})=>[styles.button,pressed ? styles.buttonPressed:null]}onPress={onPress} >
        <View style={[styles.innerContainer,{backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles=StyleSheet.create({
  gridItem:{
    flex:1,
    margin:16,
    elevation:4,
    height:150,
    backgroundColor:'white',
    shadowColor: 'black',
    shadowOpacity:0.25,
    shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius:8,
  },
  button:{
    flex:1,
  },
  buttonPressed:{
    opacity:0.5,
  },
  innerContainer:{
    flex:1,
    padding:16,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
      fontSize:16,
      fontWeight:'bold',
    },
});
