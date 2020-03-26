import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    width: vw(375),
    height: vh(65),
    backgroundColor: colors.waterBlue,
    alignItems: 'center',
  },
  backImage: {
    width: vw(17),
    height: vw(17),
    marginLeft: vw(12),
    marginTop: vw(36),
  },
  forgotPasswordText: {
    fontSize: vw(17),
    textAlign: 'left',
    color: colors.textInput,
    marginTop: vw(36),
    marginLeft: vw(88),
  },
  mainImage: {
    width: vw(102),
    height: vh(85),
    resizeMode: 'contain',
    marginTop: vw(66),
  },
  mainText: {
    fontSize: vw(14),
    textAlign: 'center',
    color: colors.black,
    marginTop: vw(55),
  },
  textInput: {
    width: vw(314),
    height: vw(50),
    borderWidth: vw(1),
    borderRadius: vw(25),
    textAlign: 'center',
    marginTop: vw(35),
    backgroundColor: colors.textInput,
    borderColor: colors.textInputBorder,
  },
  submitButton: {
    width: vw(140),
    height: vw(43),
    borderRadius: vw(21),
    backgroundColor: colors.waterBlue,
    marginTop: vw(23),
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    fontSize: vw(14),
    textAlign: 'center',
    color: colors.textInput,
  },
});

export default styles;
