import {StyleSheet} from 'react-native';
import {vw, vh} from '../../constants/dimensions';
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
});
export default styles;
