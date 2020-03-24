import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
interface Props {}
interface State {}

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Notifications</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

class DrawerNavigator extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <NavigationContainer independent={true}>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default DrawerNavigator;
