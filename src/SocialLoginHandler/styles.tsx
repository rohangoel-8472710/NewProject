import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
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
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default styles;
