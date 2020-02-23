import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, PagesNav, Profile, Rooms, ReservedRooms } from 'screens';
import { Icon } from 'native-base';
import { Colors } from 'styles';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  inactiveTintColor: Colors.SECOND_TEXT,
  activeTintColor: Colors.INVERSE_COLOR,
  tabStyle: {
    fontSize: 5
  },
  style: {
    borderTopWidth: 0,
    elevation: 0,
  },
}

const getIcon = (name, color) => (
  <Icon
    name={name}
    type="Feather"
    style={{ color, fontSize: 20 }}
  />
)

export default function MainNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Rooms" component={Rooms} options={{
        tabBarIcon: ({ color }) => getIcon('layout', color)
      }} />
      <Tab.Screen name="ReservedRooms" component={ReservedRooms} options={{
        tabBarIcon: ({ color }) => getIcon('briefcase', color)
      }} />
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color }) => getIcon('home', color)
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ color }) => getIcon('user', color)
      }} />
      <Tab.Screen name="Pages" component={PagesNav} options={{
        tabBarIcon: ({ color }) => getIcon('align-right', color)
      }}
      />
    </Tab.Navigator>
  );
}