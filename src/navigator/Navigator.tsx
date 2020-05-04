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
import Login from '../containers/Login/index';
import ForgotPassword from '../containers/ForgotPassword/ForgotPassword';
import Verifications from '../containers/Verification/Verifications';
import Maps from '../containers/Map/Maps';
import Edit from '../containers/EditProfile/Edit';
import SignUp from '../containers/SignUp/index';
import Chatlist from '../containers/Chat/ChatList/index';
import ChatMain from '../containers/Chat/ChatMain/index';
import InboxFlatList from '../containers/Chat/ChatList/InboxFlatList';
import MainList from '../containers/TodoList/mainList';
import TodoList from '../containers/TodoList/TodoList';
import NewList from '../containers/NewList/NewList';
import Music from '../containers/Music/Music';
import Faq from '../containers/FAQ/Faq';
import CardList from '../containers/Card/CardList';
import Icon from 'react-native-vector-icons/Ionicons';
import {vw, vh} from '../constants/dimensions';
import images from '../constants/images';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

interface Props {}
interface State {}

function TabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Maps'} component={Maps} />
      <Tab.Screen name={'Edit'} component={Edit} />
      {/* <Tab.Screen name={'Messages'} component={Chatlist} /> */}
      <Tab.Screen name={'Activities'} component={NewList} />
      <Tab.Screen name={'Music'} component={Music} />
      <Tab.Screen name={'Faq'} component={Faq} />
      <Tab.Screen name={'Card'} component={CardList} />
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
          <Stack.Screen name={'SocialLogin'} component={LoginHandler} />
          <Stack.Screen name={'ReduxPresist'} component={Main} />
          <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
          <Stack.Screen name={'DrawerNavigator'} component={DrawerNavigator} />
          <Stack.Screen name={'Tutorial'} component={Tutorial} />
          <Stack.Screen name={'Login'} component={Login} />
          <Stack.Screen name={'Forgot'} component={ForgotPassword} />
          <Stack.Screen name={'Verification'} component={Verifications} />
          <Stack.Screen name={'SignUp'} component={SignUp} />
          <Stack.Screen name={'ChatMain'} component={ChatMain} />
          <Stack.Screen name={'InboxFlatList'} component={InboxFlatList} />
          <Stack.Screen name={'Chatlist'} component={Chatlist} />
          <Stack.Screen name={'MainList'} component={MainList} />
          <Stack.Screen name={'TodoList'} component={TodoList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
