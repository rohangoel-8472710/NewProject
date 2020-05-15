import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  Platform,
  SafeAreaView,
} from 'react-native';
import images from '../../constants/images';
import strings from '../../constants/strings';
import styles from './styles';

interface Props {
  navigation?: any;
}
interface State {
  pin1: string;
  pin2: string;
  pin3: string;
  pin4: string;
  pin5: string;
  pin6: string;
  PIN1: string;
  PIN2: string;
}

export default class Verifications extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
      pin5: '',
      pin6: '',
      PIN1: '',
      PIN2: '',
    };
  }

  handlePin = () => {
    var pin =
      this.state.pin1 +
      this.state.pin2 +
      this.state.pin3 +
      this.state.pin4 +
      this.state.pin5 +
      this.state.pin6;
    if (this.state.PIN1 === '') {
      this.setState({PIN1: pin}, () => {
        pin = '';
        this.setState(
          {pin1: '', pin2: '', pin3: '', pin4: '', pin5: '', pin6: ''},
          () => {
            //@ts-ignore
            this.refs.pin1.focus();
          },
        );
      });
    } else {
      if (this.state.PIN1 !== pin) {
        //@ts-ignore
        this.refs.pin6.focus();
      } else {
        this.setState({PIN2: pin});
      }
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image style={styles.backImage} source={images.back} />
          </TouchableOpacity>
          <Text style={styles.verificationText}>Verification Code</Text>
        </SafeAreaView>
        <Text style={styles.verificationDesc}>{strings.verificationText}</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textBox}
            value={this.state.pin1}
            keyboardType="number-pad"
            returnKeyType="next"
            ref="pin1"
            secureTextEntry={false}
            maxLength={1}
            autoFocus={true}
            onChangeText={(text: string) => {
              if (Platform.OS === 'android') {
                this.setState(
                  {pin1: text.replace(/\D+/g, '')},
                  function onSetState(this: any) {
                    if (this.state.pin1.length != 0) {
                      this.refs.pin2.focus();
                    }
                  },
                );
              } else {
              }
            }}
            //   if (this.state.pin1.length != 0) {
            //     this.refs.pin2.focus();
            //   } else {
            //   }
            // }}
            onKeyPress={(e: any) => {
              if (e.nativeEvent.key == 'Backspace') {
                this.setState({pin1: ''});
                if (this.state.pin1.length == 0) {
                  // Keyboard.dismiss();
                }
              } else {
                this.setState({pin1: e.nativeEvent.key});
                //@ts-ignore
                this.refs.pin2.focus();
              }
            }}
          />
          <TextInput
            style={styles.textBox}
            ref="pin2"
            value={this.state.pin2}
            keyboardType="number-pad"
            returnKeyType="next"
            secureTextEntry={false}
            maxLength={1}
            autoFocus={true}
            onChangeText={(text: any) => {
              if (Platform.OS === 'android') {
                this.setState(
                  {pin2: text.replace(/\D+/g, '')},
                  function onSetState(this: any) {
                    if (this.state.pin2.length != 0) {
                      this.refs.pin3.focus();
                    }
                  },
                );
              }
              // if (this.state.pin2.length != 0) {
              //   this.refs.pin3.focus();
              // }
            }}
            onKeyPress={(e: any) => {
              if (e.nativeEvent.key == 'Backspace') {
                this.setState({pin2: ''}, function onSetState() {});
                if (this.state.pin2.length == 0) {
                  //@ts-ignore
                  this.refs.pin1.focus();
                }
              } else {
                this.setState({pin2: e.nativeEvent.key});
                //@ts-ignore
                this.refs.pin3.focus();
              }
            }}
          />
          <TextInput
            style={styles.textBox}
            ref="pin3"
            value={this.state.pin3}
            keyboardType="number-pad"
            returnKeyType="next"
            secureTextEntry={false}
            maxLength={1}
            autoFocus={true}
            onChangeText={(text: any) => {
              // if (this.state.pin3.length != 0) {
              //   this.refs.pin4.focus();
              if (Platform.OS === 'android') {
                this.setState(
                  {pin3: text.replace(/\D+/g, '')},
                  function onSetState(this: any) {
                    if (this.state.pin3.length != 0) {
                      this.refs.pin4.focus();
                    }
                  },
                );
              }
            }}
            onKeyPress={(e: any) => {
              if (e.nativeEvent.key == 'Backspace') {
                this.setState({pin3: ''}, function onSetState() {});
                if (this.state.pin3.length == 0) {
                  //@ts-ignore
                  this.refs.pin2.focus();
                }
              } else {
                this.setState({pin2: e.nativeEvent.key});
                //@ts-ignore
                this.refs.pin4.focus();
              }
            }}
          />
          <TextInput
            style={styles.textBox}
            ref="pin4"
            value={this.state.pin4}
            keyboardType="number-pad"
            returnKeyType="next"
            secureTextEntry={false}
            maxLength={1}
            autoFocus={true}
            onChangeText={(text: any) => {
              if (Platform.OS === 'android') {
                this.setState(
                  {pin4: text.replace(/\D+/g, '')},
                  function onSetState(this: any) {
                    if (this.state.pin4.length != 0) {
                      this.refs.pin5.focus();
                    }
                  },
                );
              }
              // if (this.state.pin4.length != 0) {
              //   this.refs.pin5.focus();
              // }
            }}
            onKeyPress={(e: any) => {
              if (e.nativeEvent.key == 'Backspace') {
                this.setState({pin3: ''}, function onSetState() {});
                if (this.state.pin4.length == 0) {
                  //@ts-ignore
                  this.refs.pin3.focus();
                }
              } else {
                this.setState({pin4: e.nativeEvent.key});
                //@ts-ignore
                this.refs.pin5.focus();
              }
            }}
          />
          <TextInput
            style={styles.textBox}
            ref="pin5"
            value={this.state.pin5}
            keyboardType="number-pad"
            returnKeyType="next"
            secureTextEntry={false}
            maxLength={1}
            autoFocus={true}
            onChangeText={(text: any) => {
              if (Platform.OS === 'android') {
                this.setState(
                  {pin5: text.replace(/\D+/g, '')},
                  function onSetState(this: any) {
                    if (this.state.pin5.length != 0) {
                      this.refs.pin6.focus();
                    }
                  },
                );
              }
              // if (this.state.pin5.length != 0) {
              //   this.refs.pin6.focus();
              // }
            }}
            onKeyPress={(e: any) => {
              if (e.nativeEvent.key == 'Backspace') {
                this.setState({pin3: ''}, function onSetState() {});
                if (this.state.pin5.length == 0) {
                  //@ts-ignore
                  this.refs.pin4.focus();
                }
              } else {
                this.setState({pin5: e.nativeEvent.key});
                //@ts-ignore
                this.refs.pin6.focus();
              }
            }}
          />
          <TextInput
            style={styles.textBox}
            ref="pin6"
            value={this.state.pin6}
            keyboardType="number-pad"
            returnKeyType="next"
            secureTextEntry={false}
            maxLength={1}
            autoFocus={true}
            onChangeText={(text: any) => {
              this.setState(
                {pin6: text.replace(/\D+/g, '')},
                function onSetState(this: any) {
                  if (this.state.pin6.length != 0) {
                    Keyboard.dismiss();
                    this.handlePin();
                  }
                },
              );
              // if (this.state.pin6.length != 0) {
              //   Keyboard.dismiss();
              //   this.handlePin();
              // }
            }}
            onKeyPress={(e: any) => {
              if (e.nativeEvent.key == 'Backspace') {
                this.setState({pin6: ''}, function onSetState() {});
                if (this.state.pin6.length == 0) {
                  //@ts-ignore
                  this.refs.pin5.focus();
                }
              } else {
                this.setState({pin6: e.nativeEvent.key});
                Keyboard.dismiss();
              }
            }}
          />
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.textSubmit}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
