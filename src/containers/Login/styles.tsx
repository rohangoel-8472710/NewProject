import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: vw(375),
    height: vh(667),
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
    textAlign:'center',
    backgroundColor: colors.textInput,
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
  },
  signINButton: {
    width: vw(140),
    height: vw(43),
    borderRadius: vw(21),
    backgroundColor: colors.waterBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: vw(22),
  },
  forgetPasswordText: {
    textAlign: 'left',
    fontSize: vw(14),
    color: colors.warmGrey,
  },
  orSignInText: {
    textAlign: 'left',
    fontSize: vw(14),
    color: colors.darkBlack,
    marginVertical: vw(89),
  },
  buttonView: {
    flexDirection: 'row',
  },
  fbButton: {
    width: vw(42),
    height: vw(42),
    backgroundColor: colors.fbBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw(20),
  },
  fbImage: {
    width: vw(11),
    height: vw(21),
  },
  linkedInButton: {
    width: vw(42),
    height: vw(42),
    backgroundColor: colors.pink,
    marginLeft: vw(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw(20),
  },
  linkedInImage: {
    width: vw(21),
    height: vw(21),
  },
  dontHaveText: {
    fontSize: vw(14),
    textAlign: 'left',
    color: colors.black,
    marginVertical:vw(36)
  },
  SignUpText: {
    fontSize: vw(14),
    textAlign: 'left',
    color: colors.waterBlue,
    marginVertical:vw(36)
  },
});

export default styles;
