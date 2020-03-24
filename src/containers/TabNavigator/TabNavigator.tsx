import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props {}
interface State {}

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

class TabNavigator extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'HomeTab') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'SettingsTab') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="HomeTab" component={HomeScreen} />
          <Tab.Screen name="SettingsTab" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default TabNavigator;
