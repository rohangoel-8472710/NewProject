import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';

export default class Heart extends React.Component {
  animation: any;
  componentDidMount() {
    this.animation.play();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Text>This is a Heart Animation</Text>
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            source={require('../../assets/heart.json')}
            style={styles.heartAnimation}
            autoPlay
            loop
          />
        </View>
      </SafeAreaView>
    );
  }
}
