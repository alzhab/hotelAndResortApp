import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import MainNavigator from './MainNavigator';
import {
  Signin,
  Signup,
  Aboutus,
  PageNotFound,
  Blog,
  Contactus,
  RoomDetails,
} from 'screens';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
        <Stack.Screen name="Main" component={MainNavigator} />
        <Stack.Screen name="Aboutus" component={Aboutus} />
        <Stack.Screen name="Contactus" component={Contactus} />
        <Stack.Screen name="PageNotFound" component={PageNotFound} />
        <Stack.Screen name="RoomDetails" component={RoomDetails} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;