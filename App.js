import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const bruschetta = require("./assets/bruschetta.png")
const Stack = createNativeStackNavigator();
let servings = 1;

function SetServings(servingAmount){
  if (servings == 0) {
    servings = 1
  }
servings = servingAmount * servings
}

function HomeScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <Text style={styles.heading}>Bruschetta Recipe</Text>
      <Image source={bruschetta}/>
      <TextInput style={styles.textbox} onChangeText={ (newText) => SetServings(newText)}
       placeholder='Enter the Number of Servings'></TextInput>

      <Pressable style={styles.button} onPress={() => navigation.navigate('Recipe')}>
        <Text style={styles.buttonText}>
          View Recipe
        </Text>
      </Pressable>
    </View>
  );
}

function RecipeScreen(){
  return(
    <View style={styles.container}>
      <Text style={styles.heading}>Bruschetta</Text>
        <Text style={styles.subheading}>Ingredients</Text>

          <Text style={styles.text}>
          {"\n"}{4 * servings} plum Tomatoes{"\n"}
          {6 * servings} basil leaves{"\n"}
          {3 * servings} garlic cloves, chopped{"\n"}
          {3 * servings} TB olive oil{"\n"}
          </Text>

        <Text style={styles.subheading}>Directions</Text>

          <Text style={styles.text}>
            Combine the ingrdients. Add salt to taste.
            Top French bread slices with mixture
          </Text>
    </View>
  );
}


export default function App() {
  
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
         name="Home"
         component={HomeScreen} 
         options={{ 
          title: 'Healthy Recipes',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
        <Stack.Screen
         name="Recipe" 
         component={RecipeScreen}
         options={{ 
          title: 'Healthy Recipes',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 100,
    paddingBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
  },
  subheading: {
    marginLeft: 25,
    paddingTop: 30,
    fontWeight: 'bold',
    fontSize: 24,
  },
  button: {
    alignItems: 'center',
    marginTop: 15,
    padding: 5,
  },
  textbox: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 15,
  },
  text: {
    marginLeft: 55,
    marginRight: 20,
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
    backgroundColor: 'grey',
    padding: 5,
  }
});
