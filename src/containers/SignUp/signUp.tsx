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
import {Dropdown} from 'react-native-material-dropdown';
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
  visible: boolean;
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
      visible: false,
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
  render() {
    let data = [
      {
        value: '+92',
      },
      {
        value: '+93',
      },
      {
        value: '+94',
      },
    ];
    return (
      <ImageBackground
        style={styles.imageStyle}
        source={images.emailloginimage}>
        <View style={styles.container}>
          <Text style={styles.heading}>{strings.newProject}</Text>
          <Text style={styles.subHeading}>{strings.splashText}</Text>
          <View style={styles.inputView}>
            {this.state.visible ? (
              <Dropdown data={data} containerStyle={styles.dropBox} />
            ) : null}
            <TextInput
              style={styles.textInputEmail}
              placeholder={strings.emailPlaceholder}
              placeholderTextColor={colors.warmGrey50}
              returnKeyType="next"
              // onChangeText={(text: string) => this.setState({email: text})}
              onChangeText={value => {
                if (value.match('^[0-9]+$')) {
                  {
                    this.setState({visible: true});
                  }
                } else {
                  this.setState({visible: false});
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
          </View>
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
