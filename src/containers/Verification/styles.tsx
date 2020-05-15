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
    alignSelf:'center',
  },
  verificationText: {
    fontSize: vw(17),
    textAlign: 'center',
    color: colors.textInput,
    marginLeft: vw(88),
  },
  verificationDesc: {
    fontSize: vw(14),
    textAlign: 'center',
    color: colors.black,
    marginTop: vw(39),
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: vw(65),
  },
  textBox: {
    width: vw(40),
    height: vw(50),
    borderRadius: vw(5),
    borderWidth: vw(1),
    textAlign: 'center',
    backgroundColor: colors.textInput,
    borderColor: colors.textInputBorder,
    marginLeft: vw(10),
  },
  submitButton: {
    width: vw(140),
    height: vw(43),
    borderRadius: vw(21),
    marginTop: vw(40),
    backgroundColor:colors.waterBlue,
    alignItems:'center',
    justifyContent:'center'
  },
  textSubmit: {
    fontSize: vw(14),
    textAlign: 'center',
    color: colors.textInput,
  },
});

export default styles;
