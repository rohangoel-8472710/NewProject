import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientView: {
    width,
    height,
    alignItems: 'center',
  },
  headingView: {
    flex: 0.4,
    justifyContent: 'center',
    width:vw(350)
  },
  headingText: {
    fontSize: vw(40),
    lineHeight: vw(40),
    fontWeight: '700',
  },
  innerHeadingText: {
    color: colors.white,
    fontSize: vw(20),
    marginTop: vw(10),
    fontFamily: 'Menlo',
  },
  svgView: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  svgContainer: {
    marginBottom: vh(40),
  },
  feedBackView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: vw(60),
    width: width,
    backgroundColor:colors.feebackColor,
    marginBottom:vw(40)
  },
});
export default styles;
