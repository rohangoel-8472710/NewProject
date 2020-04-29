import React, {Component} from 'react';
import {View, Text, Animated, Easing, TouchableOpacity} from 'react-native';

import images from '../../constants/images';
import {vh} from '../../constants/dimensions';
import styles from './styles';
interface Props {
  item: any;
}
interface State {}

export default class QAList extends Component<Props, State> {
  state = {toggle: false, showView: false, showHeight: false};
  rotation: Animated.Value;
  height: Animated.Value;
  startDeg: string;
  endDeg: string;
  minHeight: number;
  maxHeight: number;
  constructor(props: Props) {
    super(props);
    this.rotation = new Animated.Value(0);
    this.height = new Animated.Value(0);
    (this.startDeg = '0deg'), (this.endDeg = '45deg');
    (this.minHeight = vh(0)), (this.maxHeight = vh(200));
  }

  ImageRotate = () => {
    Animated.parallel[
      (Animated.timing(this.rotation, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        this.rotation = new Animated.Value(0);
        if (this.startDeg == '0deg') {
          this.startDeg = '45deg';
          this.endDeg = '0deg';
        } else {
          this.startDeg = '0deg';
          this.endDeg = '45deg';
        }
      }),
      Animated.timing(this.height, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
      }).start(() => {
        this.height = new Animated.Value(0);
        if (this.state.showView) {
          (this.minHeight = vh(200)), (this.maxHeight = vh(0));
        } else {
          (this.minHeight = vh(0)), (this.maxHeight = vh(200));
        }
      }))
    ];
  };

  render() {
    const rotateImage = this.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: [this.startDeg, this.endDeg],
      extrapolate: 'clamp',
    });
    const manageHeight = this.height.interpolate({
      inputRange: [0, 1],
      outputRange: [this.minHeight, this.maxHeight],
      extrapolate: 'clamp',
    });
    return (
      <>
        <View style={styles.mainView}>
          <Text style={styles.upperText}>{this.props.item.que}</Text>
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => {
              this.setState(
                {toggle: !this.state.toggle, showView: !this.state.showView},
                () => {
                  this.ImageRotate();
                },
              );
            }}>
            <Animated.Image
              style={{transform: [{rotate: rotateImage}]}}
              source={images.plus}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        {this.state.showView && (
          <Animated.View style={[styles.innerView, {maxHeight: manageHeight}]}>
            <Text style={styles.innerText}>{this.props.item.answer}</Text>
          </Animated.View>
        )}
      </>
    );
  }
}
