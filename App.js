import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from "firebase/auth";

import OnBoardingScreen from "./OnBoardingScreen";
import Register from "./Register";
import Login from './Login';
import MainScreen from './MainScreen';
import auth from './firebase-config';
import Bubbles from './Bubbles';

const AppStack = createStackNavigator();

const App = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    console.log(auth);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogged(true);
        const uid = user.uid;
      } else {
        setLogged(false);
      }
    });
  },);

  if (!logged) {
    return (
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="OnBoarding" component={OnBoardingScreen} />
          <AppStack.Screen name="Register" component={Register} />
          <AppStack.Screen name="Login" component={Login} />
        </AppStack.Navigator>
      </NavigationContainer>
    )
  }
  else {
    return (
      <NavigationContainer>
        <AppStack.Navigator headerShown="false">
          <AppStack.Screen name = "Home" component={MainScreen} />
          <AppStack.Screen name = "bubbles" component={Bubbles} />
        </AppStack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;