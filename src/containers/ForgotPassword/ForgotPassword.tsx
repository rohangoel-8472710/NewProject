import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import images from '../../constants/images';
import styles from './styles';
import strings from '../../constants/strings';
import colors from '../../constants/colors';
import CustomInput from '../../components/customInput';
import CustomLoginButton from '../../components/customLoginButton';
interface Props {
  navigation?: any;
}
interface State {}

class ForgotPassword extends Component<Props, State> {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image style={styles.backImage} source={images.back} />
          </TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </View>
        <Image style={styles.mainImage} source={images.key} />
        <Text style={styles.mainText}>{strings.forgotPasswordText}</Text>
        <CustomInput
          style={styles.textInput}
          placeholder={strings.emailPlaceholder}
          placeholderTextColor={colors.warmGrey50}
          returnKeyType="done"
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.props.navigation.navigate('Verification')}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ForgotPassword;
