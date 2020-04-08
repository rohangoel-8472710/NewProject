import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {vw, vh} from '../../../constants/dimensions';
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sideMenu: {
    width: vw(21),
    height: vw(17),
    marginLeft: vw(15),
    borderRadius: vw(1),
  },
  headerText: {
    fontSize: vw(22),
    textAlign: 'left',
    color: colors.tealBlue,
    marginLeft: vw(126),
    fontWeight: 'bold',
  },
  chats: {
    textAlign: 'left',
    fontSize: vw(25),
    color: colors.black,
    fontWeight: 'bold',
    marginTop: vw(27),
    marginLeft: vw(14),
  },
  mainFlatView: {
    flex: 1,
    borderColor: colors.greyish,
    padding: vw(15),
    flexDirection: 'row',
  },
  profileImg: {
    height: vw(60),
    width: vw(60),
    borderRadius: vw(30),
  },
  txt: {
    flexDirection: 'row',
    padding: vh(10),
    alignItems: 'center',
  },
  msgView: {
    height: '100%',
    width: '75%',
    justifyContent: 'space-between',
  },
  nameStyle: {
    fontSize: vw(13.5),
    fontWeight: 'bold',
    color: colors.blackish,
  },
  lastMsg: {
    fontSize: vw(12),
    color: colors.blackish,
  },
  separator: {
    height: vh(1),
    width: '100%',
    backgroundColor: colors.greyish,
  },
  timeView: {
    height: '100%',
    width: '25%',
    justifyContent: 'space-between',
  },
  timeTxt: {
    fontSize: vw(14),
    color: colors.tealBlue,
  },
});

export default styles;
