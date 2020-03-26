import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import images from '../../constants/images';
import styles from './styles';
import strings from '../../constants/strings';
import colors from '../../constants/colors';
import CustomInput from '../../components/customInput';
import CustomLoginButton from '../../components/customLoginButton';
interface Props {
  navigation?: any;
}
interface State {
  bgBorder: number;
}

class Login extends Component<Props, State> {
  state = {
    bgBorder: 0,
  };

  render() {
    return (
      <ImageBackground
        style={styles.imageStyle}
        source={images.emailloginimage}>
        <View style={styles.container}>
          <Text style={styles.heading}>{strings.newProject}</Text>
          <Text style={styles.subHeading}>{strings.splashText}</Text>
          <CustomInput
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
            onFocus={() => this.setState({bgBorder: 1})}
            onBlur={() => this.setState({bgBorder: 0})}
            returnKeyType="next"
            secureTextEntry={''}
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
            onFocus={() => this.setState({bgBorder: 2})}
            onBlur={() => this.setState({bgBorder: 0})}
            returnKeyType="done"
            secureTextEntry={true}
          />
          <CustomLoginButton
            styleButton={styles.signINButton}
            title={strings.signIn}
          />
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
            <Text style={styles.SignUpText}> SIGN UP</Text>
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

export default Login;
