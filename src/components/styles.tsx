import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {vw, vh} from '../constants/dimensions';

const styles = StyleSheet.create({
  imageStyle: {
    width: vw(9),
    height: vw(18),
    marginLeft: vw(40),
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  line: {
    marginLeft: vw(16),
    marginTop: vw(10),
    color: colors.white,
    width: vw(20),
    height: vh(22),
  },
  socialText: {
    fontSize: vw(14),
    alignSelf: 'center',
    // textAlign: 'center',
    color: colors.white,
  },
  signText: {
    fontSize: vw(14),
    textAlign: 'center',
    color: colors.white,
  },
});

export default styles;
