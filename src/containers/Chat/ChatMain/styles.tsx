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
    height: vw(45),
    width: vw(45),
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
  chatFooter: {
    height: vh(20),
    width: '100%',
  },
  inputContainer: {
    borderRadius: vw(5),
    height: vw(45),
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: vh(15),
    paddingLeft: vw(14),
    color: colors.typeMsgGrey,
    fontSize: vw(15),
  },
  timeText: {
    fontSize: vw(12),
  },
  dayStyle: {
    backgroundColor: colors.day,
    paddingHorizontal: vw(13),
    paddingVertical: vh(8),
    borderRadius: vh(5),
  },
  dayText: {
    fontSize: vw(13),
    color: colors.greyishBrown,
  },
  headerName: {
    fontSize: vw(20),
  },
  imageFooter: {
    backgroundColor: colors.chatGreen,
    width: vw(140),
    height: vh(100),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: vw(185),
    borderRadius: vh(15),
    padding: vw(4),
  },
  sendingImg: {
    height: '100%',
    width: '100%',
    borderRadius: vh(15),
  },
  indicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  rightHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: vw(10),
    justifyContent: 'space-around',
  },
  cameraIcon: {
    paddingHorizontal: vw(10),
  },
});

export default styles;
