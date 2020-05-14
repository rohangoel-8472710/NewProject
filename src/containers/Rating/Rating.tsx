import React, {Component} from 'react';
import {TouchableOpacity, Text, View, Dimensions} from 'react-native';
import {interpolate} from 'flubber';
import {tween, easing} from 'popmotion';
import Svg, {Path, G} from 'react-native-svg';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
import colors from '../../constants/colors';
import styles from './styles';
import strings from '../../constants/strings';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('screen');

const types = ['upset', 'sad', 'neutral', 'smile', 'excited'];
const PATHS = {
  upset:
    'M141.5 132.55C140.92 75.87 120.92 48.22 81.5 49.63C42.09 51.03 22.09 78.67 21.5 132.55L141.5 132.55Z',
  sad:
    'M122.32 87.65C121.94 68.08 108.83 58.53 83 59.02C57.17 59.5 44.06 69.04 43.68 87.65L122.32 87.65Z',
  neutral: 'M38.02 58.05L99.77 40.83L102.99 52.35L41.23 69.57L38.02 58.05Z',
  smile:
    'M122.32 64.68C121.94 84.25 108.83 93.79 83 93.31C57.17 92.82 44.06 83.28 43.68 64.68L122.32 64.68Z',
  excited:
    'M142.99 49.74C142.4 106.42 122.4 134.06 82.99 132.66C43.57 131.26 23.57 103.62 22.99 49.74L142.99 49.74Z',
  'left-eye':
    'M30.43 16.78C30.43 24.39 24.29 30.57 16.72 30.57C9.15 30.57 3 24.39 3 16.78C3 9.18 9.15 3 16.72 3C24.29 3 30.43 9.18 30.43 16.78Z',
  'right-eye':
    'M162.99 16.79C162.99 24.4 156.84 30.57 149.27 30.57C141.7 30.57 135.56 24.4 135.56 16.79C135.56 9.18 141.7 3.01 149.27 3.01C156.84 3.01 162.99 9.18 162.99 16.79Z',
};
const fill = '#333';
export default class Rating extends Component {
  state = {
    path: PATHS.neutral,
    type: 'neutral',
    index: -1,
  };

  changePaths = (type: any, index: any) => {
    const interpolator = interpolate(this.state.path, PATHS[type], {
      maxSegmentLength: 2,
    });
    tween({
      duration: 300,
      ease: easing.easeInOut,
      from: {i: 0, background: colors.red},
      to: {i: 1, background: colors.fbBlue},
    })
      .pipe(({i, background}) => ({path: interpolator(i), background}))
      .start(({path, background}) => {
        this.setState({
          path,
          background,
          type,
          index,
        });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.gradientView}>
          <View style={styles.headingView}>
            <Text style={styles.headingText}>{strings.feedbackHeading}</Text>
            <Text style={styles.innerHeadingText}>
              {strings.thoughtsHeading}
            </Text>
            <Text style={styles.innerHeadingText}>
              {strings.mattersHeading}
            </Text>
          </View>
          <View style={styles.svgView}>
            <Svg
              width={width}
              height={height / 3}
              viewBox="0 0 166 136"
              style={styles.svgContainer}>
              <G>
                <Path d={PATHS['left-eye']} fill={fill} />
                <Path d={this.state.path} fill={fill} />
                <Path d={PATHS['right-eye']} fill={fill} />
              </G>
            </Svg>
            <View style={styles.feedBackView}>
              {types.map((type, index) => (
                <TouchableOpacity
                  key={type}
                  onPress={() => this.changePaths(type, index)}
                  activeOpacity={0.5}>
                  <Icon
                    name={this.state.index >= index ? 'star' : 'staro'}
                    size={30}
                    color={colors.white}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
