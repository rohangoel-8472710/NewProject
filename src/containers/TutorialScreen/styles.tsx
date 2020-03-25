import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';

const styles = StyleSheet.create({
  imageStyle: {
    width: vw(375),
    height: vh(667),
    resizeMode: 'contain',
  },
  heading: {
    fontSize: vw(60),
    textAlign: 'center',
    color: colors.white,
    marginTop: vw(60),
  },
  subheading: {
    fontSize: vw(16),
    textAlign: 'center',
    color: colors.white,
    marginVertical: vw(24),
  },
  titleText: {
    fontSize: vw(25),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: vw(120),
    color: colors.white,
  },
  descriptionText: {
    fontSize: vw(15),
    textAlign: 'center',
    marginTop: vw(17),
    color: colors.white,
    lineHeight: vw(23),
  },
  inActiveDot: {
    width: vw(7),
    height: vw(7),
    backgroundColor: colors.grey,
  },
  activeDot: {
    width: vw(7),
    height: vw(7),
    backgroundColor: colors.white,
  },
  swipeTextStyle: {
    fontSize: vw(18),
    color: colors.white,
    marginTop: vw(89),
    marginLeft: vw(146),
  },
  arrow: {
    width: vw(17),
    height: vw(16),
    color: colors.white,
    resizeMode: 'contain',
    marginLeft: vw(10),
  },
  button: {
    width: vw(299),
    height: vw(43),
    borderRadius: vw(21),
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
  signInUPView: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent:'center',
    marginTop:vw(20),
  },
  signInButton: {
    width: vw(140),
    height: vw(43),
    borderRadius: vw(21),
    backgroundColor: colors.waterBlue,
    alignItems:'center',
    justifyContent:'center'
  },
  signUpButton:{
    width: vw(140),
    height: vw(43),
    borderRadius: vw(21),
    backgroundColor: colors.waterBlue,
    marginLeft:vw(19),
    alignItems:'center',
    justifyContent:'center'
  },
  signInText: {
    fontSize: vw(14),
    textAlign: 'center',
    color: colors.white,
  },
  fbButton: {
    flexDirection: 'row',
    width: vw(299),
    height: vw(43),
    borderRadius: vw(21),
    backgroundColor: colors.fbBlue,
    marginTop: vw(8),
    alignSelf: 'center',
    alignItems: 'center',
  },
  linkedinButton:{
    flexDirection: 'row',
    width: vw(299),
    height: vw(43),
    borderRadius: vw(21),
    backgroundColor:colors.pink,
    marginTop:vw(20),
    alignSelf: 'center',
    alignItems: 'center',
  }
});

export default styles;
