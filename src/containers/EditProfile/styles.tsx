import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.waterBlue,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: vw(375),
    height: vh(73),
  },
  backButton: {
    width: vw(17),
    height: vh(17),
    marginLeft: vw(12),
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: vw(21),
    textAlign: 'left',
    color: colors.textInput,
  },
  editButton: {
    marginRight: vw(12),
  },
  editText: {
    fontSize: vw(18),
    color: colors.textInput,
  },
  imageStyle: {
    height: vw(90),
    width: vw(90),
    borderRadius: vw(45),
    alignSelf: 'center',
    marginTop: vw(38),
  },
  edit: {
    position: 'absolute',
    bottom: 0,
    top: vw(100),
    left:vw(205),
    height: vw(30),
    width: vw(30),
  },
  firstInput: {
    width: vw(324),
    height: vw(50),
    borderRadius: vw(25),
    backgroundColor: colors.textInput,
    marginTop: vw(46),
    alignSelf: 'center',
    borderWidth: vw(1),
    borderColor: colors.textInputBorder,
  },
  nameText: {
    fontSize: vw(14),
    color: colors.black,
    textAlign: 'left',
    paddingLeft: vw(23),
    paddingVertical: vw(15),
  },
  secondInput: {
    width: vw(324),
    height: vw(80),
    borderRadius: vw(7),
    backgroundColor: colors.textInput,
    alignSelf: 'center',
    marginTop: vh(10),
    borderWidth: vw(1),
    borderColor: colors.textInputBorder,
  },
  descriptionText: {
    fontSize: vw(14),
    color: colors.black,
    textAlign: 'left',
    paddingLeft: vw(18),
  },
  emailText: {
    fontSize: vw(14),
    textAlign: 'left',
    color: colors.black,
    paddingLeft: vw(23),
    paddingVertical: vw(17),
  },
});

export default styles;
