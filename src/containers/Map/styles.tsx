import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.waterBlue,
    justifyContent: 'space-between',
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
    textAlign: 'left',
    color: colors.textInput,
  },
  searchImage: {
    width: vw(19),
    height: vh(19),
    resizeMode: 'contain',
    marginRight: vw(12),
  },
  textInput: {
    width: vw(350),
    borderRadius: vw(23),
    backgroundColor: colors.textInput,
    flexDirection: 'row',
    alignSelf: 'center',
    top: 80,
    alignItems: 'center',
    position: 'absolute',
  },
  searchPin: {
    width: vw(21),
    height: vw(24),
    marginLeft: vw(21),
  },
  searchText: {
    fontSize: vw(20),
    paddingLeft: vw(10),
    paddingVertical: vw(15),
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    // // height: vh(594),
    // // width: vw(375),
    top: vw(128),
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    width: vw(46),
    height: vw(46),
    backgroundColor: colors.waterBlue,
  },
  searchList: {
    position: 'absolute',
    top: vh(120),
    left: vw(10),
    right: vw(10),
    backgroundColor: 'white',
    borderRadius: vw(5),
    zIndex: 99,
  },
  itemList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: vw(0.7),
    backgroundColor: 'lightgrey',
    marginHorizontal: vw(30),
  },
  flatView: {
    padding: vw(10),
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: vw(5),
  },
  searchedText: {
    fontSize: vw(18),
  },
});

export default styles;
