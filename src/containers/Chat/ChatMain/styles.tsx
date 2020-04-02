import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {vw, vh} from '../../../constants/dimensions';
const styles = StyleSheet.create({
  chatHeader: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: vh(30),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: vw(20),
    justifyContent: 'center',
  },
  headerBack: {
    height: vh(20),
    width: vh(20),
  },
  headerImg: {
    height: vw(40),
    width: vw(40),
    borderRadius: vw(20),
  },
  sendBtn: {
    backgroundColor: colors.tealBlue,
    height: vh(45),
    width: vh(45),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh(5),
    marginHorizontal: vh(7.5),
  },
  footerStyle: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: vh(25),
    maxHeight: vh(80),
    paddingVertical: vh(1),
  },
  primaryStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bubbleLeft: {
    backgroundColor: 'white',
    marginBottom: vw(5),
  },
  bubbleRight: {
    backgroundColor: colors.chatGreen,
    marginBottom: vw(5),
  },
});

export default styles;
