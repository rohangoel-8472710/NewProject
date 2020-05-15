import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
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
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image style={styles.backImage} source={images.back} />
          </TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </SafeAreaView>
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
          onPress={() => this.props.navigation.navigate('Verification')}
          activeOpacity={0.7}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ForgotPassword;
