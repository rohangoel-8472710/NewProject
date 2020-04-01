import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import images from '../../constants/images';
import strings from '../../constants/strings';
import styles from './styles';
import {ImagePickerFn} from '../../components';
import {vw} from '../../constants/dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {result} from '../../modules/SignUp/Action';
interface Props {}
interface State {
  show: boolean;
  source: string;
  isEditable: boolean;
  buttonLabel: any;
  username: string;
  description: string;
  useremail: string;
  usernumber: any;
}

export default class Edit extends Component<Props, State> {
  state = {
    show: true,
    source: '',
    isEditable: false,
    buttonLabel: 'Edit',
    username: '',
    description: '',
    useremail: '',
    usernumber: '',
  };

  imagePicker = () => {
    ImagePickerFn.getSinglePic((response: any) => {
      this.setState({
        source: response.path,
      });
    });
  };

  _clickhandler = () => {
    this.setState({isEditable: !this.state.isEditable});
    this.setState({
      buttonLabel: this.state.isEditable ? 'Edit' : 'Save',
    });
  };

  render() {
    return (
      <View>
        <SafeAreaView style={styles.header}>
          <Image style={styles.backButton} source={images.back} />
          <Text style={styles.headerText}>{strings.Edit}</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => this._clickhandler()}>
            <Text style={styles.editText}>{this.state.buttonLabel}</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <TouchableOpacity onPress={() => this.imagePicker()} activeOpacity={1}>
          {this.state.source === '' ? (
            <Image
              source={images.placeHolder}
              resizeMode="cover"
              style={styles.imageStyle}
            />
          ) : (
            <Image
              source={{uri: this.state.source}}
              resizeMode="cover"
              style={styles.imageStyle}
            />
          )}
          <Image source={images.edit} style={styles.edit} />
        </TouchableOpacity>
        <View style={styles.firstInput}>
          <TextInput
            placeholder="Name"
            style={styles.nameText}
            returnKeyType="next"
            editable={this.state.isEditable}
          />
        </View>
        <View style={styles.secondInput}>
          <TextInput
            placeholder="Description"
            style={styles.descriptionText}
            multiline={true}
            returnKeyType="next"
            editable={this.state.isEditable}
          />
        </View>
        <View style={[styles.firstInput, {marginTop: vw(10)}]}>
          <TextInput
            placeholder="Email Address"
            style={styles.emailText}
            keyboardType="email-address"
            editable={this.state.isEditable}
          />
        </View>
        <View style={[styles.firstInput, {marginTop: vw(10)}]}>
          <TextInput
            placeholder="Mobile No"
            style={styles.emailText}
            keyboardType="number-pad"
            editable={this.state.isEditable}
          />
        </View>
      </View>
    );
  }
}
