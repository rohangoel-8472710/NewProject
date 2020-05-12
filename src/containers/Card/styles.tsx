import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';
const {height} = Dimensions.get('window');
const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.waterBlue,
    alignItems: 'center',
    width: vw(375),
    height: vh(73),
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
    textAlign: 'center',
    color: colors.textInput,
    marginLeft: vw(140),
  },
  // imageStyle: {
  //   height: vh(400),
  //   width: vw(300),
  //   resizeMode: 'cover',
  //   borderRadius: vw(20),
  //   alignSelf: 'center',
  //   marginTop: vw(60),
  // },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  swipeContainer: {
    height: height - 240,
  },
  labelWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: vw(30),
    marginLeft: vw(-30),
  },
  buttonContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '15%',
    backgroundColor: colors.white,
  },
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
  },
  titleTextStyle: {
    fontSize: vw(14),
  },
  imageView: {
    height: vw(200),
  },
  cardImage: {
    height: vw(200),
    width: '100%',
  },
  detailsView: {
    marginTop: vw(10),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: vw(10),
  },
  statusView: {
    padding: vw(15),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: vw(10),
  },
  rejectedText: {
    color: colors.red,
    fontSize: vw(15),
  },
  likedText: {
    color: colors.fbBlue,
    fontSize: vw(15),
  },
  cardContainer: {
    flex: 1,
  },
});

export default styles;
