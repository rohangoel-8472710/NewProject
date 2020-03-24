import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightBlue,
  },
  animatedView: {
    backgroundColor: colors.lightBlue,
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    color: colors.white,
  },
});

export default styles;
