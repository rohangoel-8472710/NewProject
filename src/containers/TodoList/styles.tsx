import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    fontSize: vw(25),
    color: colors.fbBlue,
    paddingBottom: vw(10),
    marginTop: vw(20),
    fontWeight: 'bold',
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.inputContainer,
    borderWidth: vw(0.5),
    borderColor: colors.inputContainerBorder,
    height: vw(45),
    borderRadius: vw(5),
    margin: vw(10),
    width: vw(340),
  },
  input: {
    paddingTop: vw(15),
    padding: vw(10),
    fontSize: vw(15),
    width: vw(300),
  },
  plusIcon: {
    position: 'absolute',
    top: vw(-10),
    right: vw(10),
  },
  listContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    borderColor: colors.listBorder,
    borderBottomWidth: vw(1.5),
    width: '100%',
    alignItems: 'stretch',
    minHeight: vw(40),
  },
  cutLine: {
    position: 'absolute',
    borderBottomColor: colors.fbBlue,
    borderBottomWidth: vw(4),
    fontWeight: 'bold',
    width: '100%',
    marginTop: vw(15),
    marginLeft: vw(10),
  },
  listText: {
    paddingBottom: vw(20),
    paddingLeft: vw(10),
    marginTop: vw(6),
    borderColor: colors.chatGreen,
    borderBottomWidth: vw(1),
    fontSize: vw(17),
    fontWeight: 'bold',
    color: colors.black,
  },
  checkIcon: {
    marginLeft: vw(15),
    marginTop: vw(3),
  },
  thrashIcon: {
    marginLeft: 'auto',
    marginRight: vw(5),
  },
  deleteAll: {
    backgroundColor: colors.orange,
    height: vw(60),
    width: vw(60),
    borderRadius: vw(30),
    position: 'absolute',
    bottom: vw(85),
    right: vw(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
