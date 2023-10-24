import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './screens/onboarding/Onboarding';
import React from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import Search from './screens/search/Search';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboard"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bottom"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
