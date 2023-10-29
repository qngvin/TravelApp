import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './screens/onboarding/Onboarding';
import React from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import Search from './screens/search/Search';
import CoutryDetail from './components/details/CoutryDetail';
import Recomended from './components/details/Recomended';
import PlaceDetails from './components/details/PlaceDetails';
import HotelDetail from './components/details/HotelDetail';
import HotelList from './components/details/HotelList';
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
        <Stack.Screen
          name="CountryDetail"
          component={CoutryDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Recommended"
          component={Recomended}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PlaceDetails"
          component={PlaceDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HotelDetail"
          component={HotelDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HotelList"
          component={HotelList}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
