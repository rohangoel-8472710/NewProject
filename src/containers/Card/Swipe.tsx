import React, {Component} from 'react';
import {View, PanResponder, Dimensions, Animated, Platform} from 'react-native';
import styles from './styles';
const WIDTH = Dimensions.get('window').width;
//define a swipe threshold to determine whether the dragged card should be swiped left or right or bounce back to its initial position.
const SWIPE_THRESHOLD = 0.25 * WIDTH;

interface Props {
  data: any;
  onSwipeLeft: any;
  onSwipeRight: any;
  renderNoMoreCards: any;
  keyProp: any;
  renderCard: any;
}
interface State {
  index: number;
  position: any;
}

export default class Swipe extends Component<Props, State> {
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {},
    keyProp: 'id',
  };
  _panResponder: any;
  x: any;
  constructor(props: Props) {
    super(props);
    const position = new Animated.ValueXY();

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gesture) => {
        //dx - accumulated distance of the gesture since the touch started
        //dy - accumulated distance of the gesture since the touch started
        position.setValue({x: gesture.dx, y: gesture.dy});
      },
      onPanResponderRelease: (evt, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        } else {
          this.resetPosition();
        }
      },
    });

    this.state = {position, index: 0};
  }
  swipeComplete(direction: any) {
    const {onSwipeLeft, onSwipeRight, data} = this.props;
    const item = data[this.state.index];

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    this.state.position.setValue({x: 0, y: 0}); //we need to reset our position to x = 0 and y = 0 so that the next card will be in the center ready to be swiped.
    this.setState({index: this.state.index + 1});
  }
  forceSwipe(direction: any) {
    //if the users swipe right, we will animate the card to move out of the screen to the right.
    const x = direction === 'right' ? WIDTH : -WIDTH;
    Animated.timing(this.state.position, {
      toValue: {x, y: 0}, // y=0, card will stay moving horizontally even if users drag the card vertically.
      duration: 250, // duration to specify the length of the animation
    }).start(() => this.swipeComplete(direction));
  }
  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: {x: 0, y: 0},
    }).start();
  }
  cardStyle() {
    const {position} = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-WIDTH * 1.5, 0, WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg'],
    });
    return {
      ...position.getLayout(),
      transform: [{rotate}],
    };
  }
  renderCards = () => {
    if (this.state.index >= this.props.data.length) {
      return this.props.renderNoMoreCards();
    }
    const cards = this.props.data.map((item: any, i: any) => {
      if (i < this.state.index) {
        //For any card that has been swiped, there is no need to render it, so we will return null for each of them.
        return null;
      }
      if (i === this.state.index) {
        //If the current card in the list is equal to index, we will attach the Panhandler to that card.
        return (
          <Animated.View
            key={item[this.props.keyProp]}
            style={[this.cardStyle(), styles.cardStyle]}
            {...this._panResponder.panHandlers}>
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return (
        <Animated.View
          key={item[this.props.keyProp]}
          style={[styles.cardStyle, {top: 10 * (i - this.state.index)}]}>
          {this.props.renderCard(item)}
        </Animated.View>
      );
    });
    return Platform.OS === 'android' ? cards : cards.reverse();
  };
  render() {
    return <View>{this.renderCards()}</View>;
  }
}
