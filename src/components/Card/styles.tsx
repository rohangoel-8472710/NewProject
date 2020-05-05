import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    height: height - 330,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vw(5),
    shadowColor: colors.black,
    shadowOffset: {
      width: vw(0),
      height: vw(2),
    },
    shadowRadius: vw(6),
    shadowOpacity: vw(0.3),
    elevation: vw(2),
  },
  imageStyle: {
    borderRadius: vw(5),
    flex: 1,
    width: '100%',
  },
  photoDescriptionContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    height: '100%',
    position: 'absolute',
    left: vw(10),
    bottom: vw(10),
  },
  text: {
    textAlign: 'center',
    fontSize: vw(20),
    color: colors.white,
    textShadowColor: colors.black,
    textShadowRadius: vw(10),
  },
});
export default styles;
