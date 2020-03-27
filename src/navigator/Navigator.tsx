import * as React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../constants/colors';
import Home from '../containers/Home/Home';
import LoginHandler from '../SocialLoginHandler/LoginHandler';
import Main from '../containers/counter/Main';
import TabNavigator from '../containers/TabNavigator/TabNavigator';
import DrawerNavigator from '../containers/DrawerNavigator/DrawerNavigator';
import Splash from '../containers/Splash/Splash';
import Tutorial from '../containers/TutorialScreen/Tutorial';
import Login from '../containers/Login/Login';
import ForgotPassword from '../containers/ForgotPassword/ForgotPassword';
import Verifications from '../containers/Verification/Verifications';
import {vw, vh} from '../constants/dimensions';
import images from '../constants/images';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

interface Props {}
interface State {}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function TabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Settings'} component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default class Navigator extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" headerMode="none">
          <Stack.Screen name={'Splash'} component={Splash} />
          <Stack.Screen name={'Home'} component={TabBar} />
          {/* <Stack.Screen name={'Login'} component={LoginHandler} /> */}
          <Stack.Screen name={'ReduxPresist'} component={Main} />
          <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
          <Stack.Screen name={'DrawerNavigator'} component={DrawerNavigator} />
          <Stack.Screen name={'Tutorial'} component={Tutorial} />
          <Stack.Screen name={'Login'} component={Login} />
          <Stack.Screen name={'Forgot'} component={ForgotPassword} />
          <Stack.Screen name={'Verification'} component={Verifications} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
