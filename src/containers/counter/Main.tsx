import React, {Component} from 'react';
import {View, Text, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

//Custom Imports
import {login} from '../../redux/actions/AuthActions';
import {
  increaseCounter,
  decreaseCounter,
} from '../../redux/actions/CounterActions';
import styles from '../counter/styles';

interface Props {
  loggedIn: boolean;
  reduxLogin: any;
  reduxIncreaseCounter: any;
  reduxDecreaseCounter: any;
  counter: number;
  navigation?: any;
}
interface State {}

class Main extends Component<Props, State> {
  state = {};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loggedInContainer}>
          <Text style={styles.loggedInText}>Logged In</Text>
          <Text style={styles.loggedInText}>{`${this.props.loggedIn}`}</Text>
          <Button
            title="Login"
            onPress={
              this.props.loggedIn === false
                ? () => this.props.reduxLogin(true)
                : () => this.props.reduxLogin(false)
            }
            style={styles.loginButton}
          />
        </View>
        <Text style={styles.counterTitle}>Counter</Text>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={() => this.props.reduxIncreaseCounter()}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.props.reduxDecreaseCounter()}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => this.props.navigation.popToTop()}>
          <Text style={styles.backButtonText}>Go To Home</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state: any) => {
  return {
    counter: state.CounterReducer.counter,
    loggedIn: state.AuthReducer.loggedIn,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch: any) => {
  //Action
  return {
    reduxIncreaseCounter: () => dispatch(increaseCounter()),
    reduxDecreaseCounter: () => dispatch(decreaseCounter()),
    reduxLogin: (Done: any) => dispatch(login(Done)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
