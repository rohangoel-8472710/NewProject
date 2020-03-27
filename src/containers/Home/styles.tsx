import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';
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
    height: vh(24),
    resizeMode: 'contain',
    marginLeft:vw(21)
  },
  textInput: {
    width: vw(350),
    height: vw(47),
    borderRadius: vw(23),
    borderWidth: vw(1),
    borderColor: colors.border,
    backgroundColor: colors.textInput,
    position: 'absolute',
    marginTop: vh(60),
    marginLeft: vw(12),
    alignItems:'center',
    flexDirection: 'row',
  },
});

export default styles;
