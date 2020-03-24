import React, {useState, useEffect, Component} from 'react';
import {Animated, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import styles from './styles';
interface Props {
  navigation?: any;
}

const AnimView = (props: any) => {
  const [animate] = useState(new Animated.Value(0));

  React.useEffect(() => {
    SplashScreen.hide();
    Animated.timing(animate, {
      toValue: 1,
      duration: 3000,
    }).start();
  }, []);

  return (
    <Animated.View style={{...props.style, opacity: animate}}>
      {props.children}
    </Animated.View>
  );
};

export default class Splash extends React.Component<Props> {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.mainView}>
        <AnimView style={styles.animatedView}>
          <Text style={styles.textStyle}>NewProject</Text>
        </AnimView>
      </View>
    );
  }
}
