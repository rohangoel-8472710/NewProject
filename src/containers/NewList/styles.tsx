import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(70),
    alignItems: 'center',
  },
  hobbiesText: {
    fontSize: vw(25),
    color: colors.black,
    fontWeight: 'bold',
    marginLeft: vw(15),
  },
  addNewText: {
    fontSize: vw(15),
    color: colors.chatGreen,
    marginRight: vw(15),
    fontWeight: 'bold',
  },
  textInput: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: vw(350),
    borderRadius: vw(10),
    backgroundColor: colors.grey,
    marginTop: vw(30),
  },
  searchImage: {
    width: vw(21),
    height: vw(24),
    marginLeft: vw(20),
  },
  searchText: {
    fontSize: vw(20),
    paddingLeft: vw(10),
    paddingVertical: vw(10),
  },
  separator: {
    height: vh(1),
    width: '95%',
    backgroundColor: colors.grey,
    alignSelf: 'center',
    marginTop: vw(20),
  },
  listText: {
    fontSize: vw(20),
    color: colors.blackish,
    marginLeft: vw(20),
  },
  flatListView: {
    flexDirection: 'row',
    marginTop: vw(20),
    justifyContent: 'space-between',
  },
  plusIcon: {
    marginRight: vw(20),
  },
  horizontalFlatList: {
    flexDirection: 'row',
    backgroundColor: colors.chatGreen,
    width: vw(120),
    height: vw(40),
    marginLeft: vw(30),
    marginTop: vw(30),
    borderRadius: vw(10),
    alignItems: 'center',
    justifyContent:'center'
  },
  horizontalText: {
    fontSize: vw(15),
    color: colors.white,
  },
  circleView: {
    width: vw(18),
    height: vw(18),
    borderRadius: vw(9),
    backgroundColor: colors.white,
    marginLeft:vw(10),
    alignItems:'center',
    justifyContent:'center'
  },
});
export default styles;
