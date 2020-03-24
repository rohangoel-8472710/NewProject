import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fbView: {
    flex: 1,
    margin: 80,
  },
  fbButton: {
    backgroundColor: 'yellow',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  commonText: {
    fontSize: 16,
    marginVertical: 16,
  },
  itemView: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 5,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  labelContainer: {
    alignItems: 'flex-end',
  },
  label: {
    marginRight: 10,
  },
  valueContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  value: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  // linkedInContainer: {
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  // },
  userContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: colors.lightBlue,
    height: 50,
    width: 200,
    margin: 60,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop:70
  },
  backButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
