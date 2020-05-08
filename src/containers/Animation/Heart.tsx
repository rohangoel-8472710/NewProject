import React, {Component} from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';
import images from '../../constants/images';

export default class Heart extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <Image style={styles.imageLines} source={images.threelines} />
          <Text style={styles.headerText}>Animation</Text>
        </SafeAreaView>
        <View style={styles.body}>
          <LottieView
            source={require('../../assets/heart.json')}
            style={styles.heartAnimation}
            autoPlay
            loop
          />
        </View>
      </View>
    );
  }
}
