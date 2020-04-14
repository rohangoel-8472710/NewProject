import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh, DesignHeight} from '../../constants/dimensions';
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.waterBlue,
    justifyContent: 'space-between',
    width: vw(375),
    height: vh(73),
  },
  imageLines: {
    width: vw(18),
    height: vh(16),
    marginLeft: vw(12),
    resizeMode: 'contain',
    marginTop: vw(5),
  },
  headerText: {
    fontSize: vw(21),
    textAlign: 'left',
    color: colors.textInput,
  },
  searchImage: {
    width: vw(19),
    height: vh(19),
    resizeMode: 'contain',
    marginRight: vw(12),
  },
  searchPin: {
    width: vw(21),
    height: vw(24),
    marginLeft: vw(21),
  },
  textInput: {
    width: vw(350),
    borderRadius: vw(23),
    backgroundColor: colors.textInput,
    flexDirection: 'row',
    alignSelf: 'center',
    top: -15,
    alignItems: 'center',
  },
  searchText: {
    fontSize: vw(20),
    paddingLeft: vw(10),
    paddingVertical: vw(15),
  },
  cardView: {
    paddingTop: vw(14),
  },
  cardBox: {
    width: vw(350),
    borderRadius: vw(6),
    backgroundColor: colors.textInput,
    borderWidth: vw(1),
    borderColor: colors.border,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    padding: vw(10),
  },
  titleText: {
    fontSize: vw(15),
    textAlign: 'left',
    color: colors.black,
    justifyContent: 'center',
  },
  descriptionText: {
    fontSize: vw(12),
    textAlign: 'left',
    color: colors.warmGrey,
    marginTop: vw(12),
  },
  shareButton: {
    width: vw(50),
    height: vw(50),
    backgroundColor: colors.waterBlue,
    borderRadius: vw(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vw(20),
  },
  shareImage: {
    width: vw(14),
    height: vw(17),
    resizeMode: 'contain',
  },
  deleteButton: {
    width: vw(50),
    height: vw(50),
    backgroundColor: 'white',
    borderRadius: vw(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vw(20),
  },
  deleteImage: {
    width: vw(13),
    height: vh(20),
    resizeMode: 'contain',
  },
  editText: {
    fontSize: vw(17),
    color: colors.textInput,
    marginRight: vw(13),
    marginTop: vw(5),
  },
  checkBox: {
    height: vw(20),
    width: vw(20),
    alignSelf: 'flex-end',
  },
  buttonNext: {
    width: vw(120),
    height: vw(43),
    borderRadius: vw(21),
    backgroundColor: colors.waterBlue,
    position: 'absolute',
    zIndex: 1,
    left: vw(210),
    top: vw(650),
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextText: {
    fontSize: vw(15),
    color: colors.white,
    textAlign: 'center',
  },
  buttonCancel: {
    width: vw(120),
    height: vw(43),
    borderRadius: vw(21),
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    top: vw(650),
    left:vw(50)
  },
});

export default styles;
