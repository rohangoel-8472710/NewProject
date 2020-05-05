import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';
const styles = StyleSheet.create({
  label: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: vw(10),
    borderWidth: vw(2),
    borderRadius: vw(10),
  },
  labelText: {
    fontSize: vw(25),
    textAlign: 'center',
  },
});
export default styles;
