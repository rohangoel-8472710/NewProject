import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.waterBlue,
    alignItems: 'center',
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
    textAlign: 'center',
    color: colors.textInput,
    marginLeft: vw(140),
  },
  imageStyle: {
    height: vh(400),
    width: vw(300),
    resizeMode: 'cover',
    borderRadius: vw(20),
    alignSelf: 'center',
    marginTop: vw(60),
  },
});

export default styles;
