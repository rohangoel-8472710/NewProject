import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import styles from './styles';
interface Props {
  navigation?: any;
}
interface State {}

class Home extends Component<Props, State> {
  state = {};

  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => this.props.navigation.navigate('ReduxPresist')}>
          <Text style={styles.buttonText}>Redux Presist Example</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Social Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => this.props.navigation.navigate('TabNavigator')}>
          <Text style={styles.buttonText}>Tab Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => this.props.navigation.navigate('DrawerNavigator')}>
          <Text style={styles.buttonText}>Drawer Navigation</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
