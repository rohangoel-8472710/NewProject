import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import images from '../../constants/images';
import strings from '../../constants/strings';
import colors from '../../constants/colors';
import styles from './styles';
import Firebaseservices from '../../utils/FirebaseServices';
import {vw} from '../../constants/dimensions';
interface Props {
  navigation?: any;
  email: string;
  uid: string;
  updateUid: Function;
  updateEmail: Function;
}
interface State {
  email: string;
  password: string;
  animate: boolean;
  valueChange: boolean;
}

export default class SignUp extends Component<Props, State> {
  firstInput: any;
  secondInput: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      animate: false,
      valueChange: false,
    };
  }
  signUp = () => {
    this.setState({
      animate: true,
    });
    let user = {email: this.state.email, password: this.state.password};
    Firebaseservices.signUp(user, this.loginSuccess, this.loginFail);
  };

  loginSuccess = (data: any) => {
    let user = {
      email: this.state.email,
      password: this.state.password,
      uid: data.user.uid,
    };
    Firebaseservices.addingUser(user);
    this.setState(
      {
        animate: false,
      },
      () => {
        this.props.updateUid(data.user.uid);
        this.props.updateEmail(this.state.email);
        this.props.navigation.navigate('Home');
      },
    );
  };

  loginFail = (data: any) => {
    Alert.alert(
      'Alert!',
      `${data}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  };

  // validateEmail = (email: any) => {
  //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  // };
  // changeInput = (text: number) => {
  //   return (
  //     <View>
  //       <TextInput
  //         style={styles.textInputEmail}
  //         placeholder={strings.Mobile}
  //         placeholderTextColor={colors.warmGrey50}
  //         keyboardType="number-pad"
  //         onSubmitEditing={() => {
  //           this.secondInput.focus();
  //         }}
  //         ref={ref => {
  //           this.firstInput = ref;
  //         }}
  //       />
  //     </View>
  //   );
  // };
  render() {
    return (
      <ImageBackground
        style={styles.imageStyle}
        source={images.emailloginimage}>
        <View style={styles.container}>
          <Text style={styles.heading}>{strings.newProject}</Text>
          <Text style={styles.subHeading}>{strings.splashText}</Text>
          <TextInput
            style={styles.textInputEmail}
            placeholder={strings.emailPlaceholder}
            placeholderTextColor={colors.warmGrey50}
            returnKeyType="next"
            // onChangeText={(text: string) => this.setState({email: text})}
            onChangeText={(value: any) => {
              let num = value;
              if (isNaN(num)) {
                {
                  this.state.valueChange ? null : (
                    <View>
                      <TextInput
                        style={{
                          backgroundColor: 'red',
                          height: vw(50),
                          borderWidth: vw(1),
                          borderRadius: vw(25),
                        }}
                        placeholder={strings.Mobile}
                        placeholderTextColor={colors.warmGrey50}
                        keyboardType="number-pad"
                      />
                    </View>
                  );
                }
              }else{
                
              }
            }}
            autoCorrect={false}
            keyboardType="email-address"
            ref={ref => {
              this.firstInput = ref;
            }}
            onSubmitEditing={() => {
              this.secondInput.focus();
            }}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.textInputPassword}
            placeholder={strings.password}
            placeholderTextColor={colors.warmGrey50}
            secureTextEntry={true}
            onChangeText={(text: string) => this.setState({password: text})}
            returnKeyType="done"
            keyboardType="default"
            ref={ref => {
              this.secondInput = ref;
            }}
            onSubmitEditing={() => this.signUp()}
          />
          <TouchableOpacity
            style={styles.signUpButton}
            activeOpacity={0.7}
            onPress={() => this.signUp()}>
            <Text style={styles.textSingUp}>SIGN UP</Text>
          </TouchableOpacity>
          <ActivityIndicator
            animating={this.state.animate}
            size={'large'}
            style={styles.indicator}
            color={colors.tealBlue}
          />
        </View>
      </ImageBackground>
    );
  }
}
