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
    marginLeft: vh(118),
  },
  mainView: {
    flexDirection: 'row',
    backgroundColor: colors.lightorange,
    marginHorizontal: vw(15),
    padding: vw(15),
    borderRadius: vw(10),
    marginTop: vh(20),
    justifyContent: 'space-between',
  },
  upperText: {
    width: vw(270),
    fontSize: vw(14),
  },
  toggleButton: {
    height: vh(14),
    width: vw(14),
  },
  innerView: {
    marginHorizontal: vw(15),
    backgroundColor: colors.white,
    shadowOpacity: 0.1,
    elevation: 5,
    shadowOffset: {
      width: vw(1),
      height: vh(0),
    },
    padding: vw(15),
    borderBottomRightRadius: vw(10),
    borderBottomLeftRadius: vw(10),
  },
  innerText:{
    color:colors.grey
  }
});

export default styles;
