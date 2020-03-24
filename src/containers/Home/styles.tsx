import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    justifyContent:'space-evenly',
    alignItems: 'center',
    backgroundColor:colors.greenish
  },
  commonButton: {
    backgroundColor: colors.orange,
    borderRadius: 15,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
