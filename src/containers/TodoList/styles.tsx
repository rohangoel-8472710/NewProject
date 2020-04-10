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
    fontSize: vw(20),
    color: colors.fbBlue,
    paddingBottom: vw(10),
    marginTop: vw(20),
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: '#fff',
    borderWidth: vw(0.5),
    borderColor: '#000',
    height: vw(45),
    borderRadius: vw(5),
    margin: vw(10),
    width:vw(340)
  },
  input: {
    paddingTop:vw(15),
    padding:vw(10),
    fontSize:vw(15),
    width:vw(300)
  },
  plusIcon:{
      position:'absolute',
      top:vw(-10),
      right:vw(10)
  }
});

export default styles;
