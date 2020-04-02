import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';
const styles = StyleSheet.create({
  imageStyle: {
    width: vw(375),
    height: vh(667),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: vw(60),
    textAlign: 'center',
    color: colors.waterBlue,
    marginTop: vw(63),
  },
  subHeading: {
    fontSize: vw(16),
    textAlign: 'center',
    color: colors.black,
    marginTop: vw(24),
  },
  textInputEmail: {
    width: vw(314),
    height: vw(50),
    borderWidth: vw(1),
    borderRadius: vw(25),
    marginTop: vw(60),
    textAlign: 'center',
    backgroundColor: colors.textInput,
    borderColor: colors.textInputBorder,
  },
  textInputPassword: {
    width: vw(314),
    height: vw(50),
    borderRadius: vw(25),
    alignSelf: 'center',
    marginTop: vw(13),
    textAlign: 'center',
    backgroundColor: colors.textInput,
    borderWidth: vw(1),
    borderColor: colors.textInputBorder,
  },
  signUpButton: {
    width: vw(140),
    height: vw(43),
    borderRadius: vw(21),
    backgroundColor: colors.waterBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: vw(22),
  },
  textSingUp: {
    fontSize: vw(14),
    textAlign: 'center',
    color: colors.textInput,
  },
  indicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: vw(5),
  },
});

export default styles;
