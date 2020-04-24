import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackish,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: colors.black,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: vw(375),
    height: vh(77),
    borderBottomWidth: vh(1),
    borderBottomColor: colors.grey,
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
    color: colors.textInput,
  },
  sortText: {
    fontSize: vw(17),
    color: colors.textInput,
    marginRight: vw(13),
    marginTop: vw(5),
  },
  searchInput: {
    width: vw(350),
    height: vw(45),
    backgroundColor: colors.black,
    marginTop: vw(20),
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: vw(15),
    borderRadius: vw(10),
    color: colors.white,
  },
  listView: {
    paddingTop: vw(14),
    flexDirection: 'row',
  },
  albumImage: {
    height: vw(80),
    width: vw(80),
    resizeMode: 'cover',
    marginLeft: vw(15),
  },
  titleText: {
    fontSize: vw(18),
    color: colors.white,
    width: vw(200),
    marginLeft: vw(15),
    fontWeight: 'bold',
  },
  artistText: {
    fontSize: vw(12),
    color: colors.grey,
    marginLeft: vw(15),
    marginTop: vw(8),
  },
  sortView: {
    flex: 1,
  },
  sortTitle: {
    fontSize: vw(20),
    color: colors.white,
    textAlign: 'center',
    marginTop: vw(15),
    fontWeight: 'bold',
  },
  list: {
    marginTop: vw(20),
  },
  commonText: {
    fontSize: vw(15),
    color: colors.grey,
    margin: vw(20),
  },
  rankAndDurationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rankText: {
    fontSize: vw(12),
    color: colors.grey,
    marginLeft: vw(15),
  },
  durationText: {
    fontSize: vw(12),
    color: colors.grey,
  },
  playerView: {
    backgroundColor: colors.black,
    position: 'absolute',
    width: '100%',
    height: vw(90),
    top: vw(650),
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerImage: {
    width: vw(60),
    height: vw(60),
    resizeMode: 'cover',
    marginLeft: vw(20),
    // marginTop:vw(5)
  },
  playerTitleText: {
    fontSize: vw(18),
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: vw(20),
    marginBottom: vw(20),
  },
  controlsView: {
    flexDirection: 'row',
    marginLeft: vw(40),
  },
  playerControlsImage: {
    width: vw(40),
    height: vw(40),
    resizeMode: 'cover',
  },
});
export default styles;
