import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: vw(375),
    height: vh(667),
    resizeMode:'contain'
  },
  textStyle: {
    fontSize: vw(50),
    color: colors.white,
    textAlign: 'center',
    marginTop: vh(60),
    fontWeight:'bold'
  },
  innerTextStyle: {
    fontSize: vw(16),
    color: colors.white,
    textAlign: 'center',
    marginTop: vh(20),
  },
});

export default styles;
