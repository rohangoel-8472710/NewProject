import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  Animated,
  Dimensions,
  PanResponder,
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
import styles from './styles';
import images from '../../constants/images';
import strings from '../../constants/strings';
import {vw} from '../../constants/dimensions';
const Data = [
  {id: '1', uri: images.firstImg},
  {id: '2', uri: images.secondImg},
  {id: '3', uri: images.thirdImg},
  {id: '4', uri: images.fourthImg},
  {id: '5', uri: images.fifthImg},
  {id: '6', uri: images.sixthImg},
  {id: '7', uri: images.seventhImg},
  {id: '8', uri: images.eigthImg},
  {id: '9', uri: images.ninthImg},
  {id: '10', uri: images.tenthImg},
];
interface Props {}
interface State {
  index: any;
}

export default class CardList extends React.Component<Props, State> {
  position: Animated.ValueXY;
  rotate: Animated.AnimatedInterpolation;
  rotateAndTranslate: {
    transform: (
      | {[key: string]: Animated.Value}
      | {rotate: Animated.AnimatedInterpolation}
    )[];
  };
  nextScale: Animated.AnimatedInterpolation;
  PanResponder: any;
  cardOpacity: Animated.AnimatedInterpolation;
  constructor(props: Props) {
    super(props);
    this.position = new Animated.ValueXY();
    this.state = {
      index: 0,
    };
    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-30deg', '0deg', '10deg'],
      extrapolate: 'clamp',
    });
    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate,
        },
        ...this.position.getTranslateTransform(),
      ],
    };
    this.cardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp',
    });
    this.nextScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp',
    });
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({x: gestureState.dx, y: gestureState.dy});
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: {x: SCREEN_WIDTH + 100, y: gestureState.dy},
          }).start(() => {
            this.setState({index: this.state.index + 1}, () => {
              this.position.setValue({x: 0, y: 0});
            });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: {x: -SCREEN_WIDTH - 100, y: gestureState.dy},
          }).start(() => {
            this.setState({index: this.state.index + 1}, () => {
              this.position.setValue({x: 0, y: 0});
            });
          });
        } else {
          Animated.spring(this.position, {
            toValue: {x: 0, y: 0},
            friction: 4,
          }).start();
        }
      },
    });
  }
  renderData = () => {
    return Data.map((item, i) => {
      if (i < this.state.index) {
        return null;
      } else if (i == this.state.index) {
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id}
            style={[
              this.rotateAndTranslate,
              {
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH,
                position: 'absolute',
              },
            ]}>
            <Image style={styles.imageStyle} source={item.uri} />
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={item.id}
            style={[
              {
                opacity: this.cardOpacity,
                transform: [{scale: this.nextScale}],
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH,
                padding: vw(10),
                position: 'absolute',
              },
            ]}>
            <Image style={styles.imageStyle} source={item.uri} />
          </Animated.View>
        );
      }
    }).reverse();
  };
  render() {
    return (
      <View>
        <SafeAreaView style={styles.header}>
          <Image style={styles.imageLines} source={images.threelines} />
          <Text style={styles.headerText}>{strings.card}</Text>
        </SafeAreaView>
        <View style={{flex: 1}}>{this.renderData()}</View>
      </View>
    );
  }
}
