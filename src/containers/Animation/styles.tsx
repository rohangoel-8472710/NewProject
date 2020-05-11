import {StyleSheet} from 'react-native';
import {vw, vh} from '../../constants/dimensions';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: vw(15),
  },
  heartAnimation: {
    height: vw(400),
    width: vw(400),
  },
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
    // textAlign: 'center',
    color: colors.textInput,
    marginLeft: vw(120),
  },
});
export default styles;
