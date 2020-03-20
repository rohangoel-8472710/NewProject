import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggedInContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    display: 'flex',
  },
  loggedInText: {
    fontSize: 17,
    fontWeight: '400',
    color: '#000',
  },
  loginButton: {
    marginTop: 20,
    paddingTop: 20,
  },
  counterTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 50,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
  counterText: {
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
});

export default styles;
