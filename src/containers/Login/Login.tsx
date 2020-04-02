import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import images from '../../constants/images';
import styles from './styles';
import strings from '../../constants/strings';
import colors from '../../constants/colors';
import CustomInput from '../../components/customInput';
import CustomLoginButton from '../../components/customLoginButton';
import Firebaseservices from '../../utils/FirebaseServices';
interface Props {
  navigation?: any;
  updateEmail: Function;
  updateUid: Function;
  email: string;
  uid: string;
}
interface State {
  bgBorder: number;
  animate: boolean;
  email: string;
  password: string;
}

class Login extends Component<Props, State> {
  firstInput: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      bgBorder: 0,
      animate: false,
      email: '',
      password: '',
    };
  }
  componentDidMount() {
    Firebaseservices.initializeFireBase();
  }

  componentWillUnmount() {
    Firebaseservices.refOff();
  }

  login = (email: string, password: string) => {
    this.setState({
      animate: true,
    });
    let user = {email: email, password: password};
    Firebaseservices.login(user, this.loginSuccess, this.loginFail);
  };

  loginSuccess = (data: any) => {
    // this.props.updateEmail(this.state.email);
    // this.props.updateUid(data.user.uid);
    this.setState({animate: false});
    this.props.navigation.navigate('Home');
  };

  loginFail = (error: any) => {
    this.setState({
      animate: false,
    });
    Alert.alert(
      'Alert!',
      `${error}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  };
  render() {
    return (
      <ImageBackground
        style={styles.imageStyle}
        source={images.emailloginimage}>
        <View style={styles.container}>
          <Text style={styles.heading}>{strings.newProject}</Text>
          <Text style={styles.subHeading}>{strings.splashText}</Text>
          {/* <CustomInput
            style={[
              styles.textInputEmail,
              {
                borderColor:
                  this.state.bgBorder === 1
                    ? colors.waterBlue
                    : colors.textInputBorder,
              },
            ]}
            placeholder={strings.emailPlaceholder}
            placeholderTextColor={colors.warmGrey50}
            returnKeyType="next"
            secureTextEntry={''}
            onSubmitEditing={() => this.firstInput.focus()}
            onChangeText={(text: string) => this.setState({email: text})}
            ref={''}
            onBlur={''}
            onFocus={''}
          />
          <CustomInput
            style={[
              styles.textInputPassword,
              {
                borderColor:
                  this.state.bgBorder === 2
                    ? colors.waterBlue
                    : colors.textInputBorder,
              },
            ]}
            placeholder={strings.password}
            placeholderTextColor={colors.warmGrey50}
            returnKeyType="done"
            secureTextEntry={true}
            onSubmitEditing={() =>
              this.login(this.state.email, this.state.password)
            }
            onChangeText={(text: string) => this.setState({password: text})}
            ref={(ref: any) => {
              this.firstInput = ref;
            }}
            onBlur={''}
            onFocus={''}
          /> */}
          <TextInput
            style={styles.textInputEmail}
            placeholder={strings.emailPlaceholder}
            placeholderTextColor={colors.warmGrey50}
            returnKeyType="next"
            onChangeText={(text: string) => this.setState({email: text})}
            autoCorrect={false}
            keyboardType="email-address"
            onSubmitEditing={() => {
              this.firstInput.focus();
            }}
            autoCapitalize='none'
          />
          <TextInput
            style={styles.textInputPassword}
            placeholder={strings.password}
            placeholderTextColor={colors.warmGrey50}
            secureTextEntry={true}
            onChangeText={(text: string) => this.setState({password: text})}
            returnKeyType="done"
            keyboardType="default"
            onSubmitEditing={() =>
              this.login(this.state.email, this.state.password)
            }
            ref={ref => {
              this.firstInput = ref;
            }}
          />
          {/* <CustomLoginButton
            styleButton={styles.signINButton}
            title={strings.signIn}
            // onPress={this.login(this.state.email, this.state.password)}
          /> */}
          <TouchableOpacity
            style={styles.signINButton}
            onPress={() => this.login(this.state.email, this.state.password)}>
            <Text style={styles.signInText}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Forgot')}>
            <Text style={styles.forgetPasswordText}>
              {strings.forgotPassword}
            </Text>
          </TouchableOpacity>
          <Text style={styles.orSignInText}>{strings.orSign}</Text>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.fbButton}>
              <Image style={styles.fbImage} source={images.fb} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkedInButton}>
              <Image style={styles.linkedInImage} source={images.linkedin} />
            </TouchableOpacity>
          </View>
          <Text style={styles.dontHaveText}>
            Don't have an account?
            <Text
              style={styles.SignUpText}
              onPress={() => {
                this.props.navigation.navigate('SignUp');
              }}>
              {' '}
              SIGN UP
            </Text>
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

export default Login;
