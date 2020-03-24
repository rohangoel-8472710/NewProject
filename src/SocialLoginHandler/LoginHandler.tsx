import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Button,
} from 'react-native';

import {
  AccessToken,
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import styles from './styles';
import {LinkedInToken} from 'react-native-linkedin';
import LinkedInModal from 'react-native-linkedin';
interface Props {
  navigation?: any;
}
interface State {
  userInfo: any;
  refreshing: boolean;
  localizedFirstName?: string;
  access_token?: string;
}

export default class LoginHandler extends Component<Props, State> {
  state = {
    userInfo: {},
    refreshing: false,
    localizedFirstName: undefined,
    access_token: undefined,
  };

  modal = React.createRef<LinkedInModal>();

  logoutWithFacebook = () => {
    LoginManager.logOut();
    this.setState({userInfo: {}});
  };

  getInfoFromToken = (token: any) => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id,name,first_name,last_name,email',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error: any, user: any) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          this.setState({userInfo: user});
          console.log('result:', user);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  fbLogin = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      login => {
        if (login.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString();
            this.getInfoFromToken(accessToken);
          });
        }
      },
      error => {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  linkedInLogin = async (data: LinkedInToken) => {
    const {access_token, authentication_code} = data;
    if (!authentication_code) {
      this.setState({refreshing: true});

      const response = await fetch('https://api.linkedin.com/v2/me', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + access_token,
        },
      });
      const payload = await response.json();
      this.setState({...payload, refreshing: false});
    } else {
      console.log(`authentication_code = ${authentication_code}`);
    }
  };

  renderItem(label: string, value: string) {
    return value ? (
      <View style={styles.itemView}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{value}</Text>
        </View>
      </View>
    ) : null;
  }

  linkedInSignOut = () => {
    this.setState({refreshing: true});
    this.modal.current
      .logoutAsync()
      .then(() =>
        this.setState({localizedFirstName: undefined, refreshing: false}),
      );
  };
  render() {
    const {refreshing, localizedFirstName} = this.state;
    const isLogin = this.state.userInfo.name;
    const buttonText = isLogin ? 'Logout With Facebook' : 'Login From Facebook';
    const onPressButton = isLogin ? this.logoutWithFacebook : this.fbLogin;
    return (
      <View style={styles.mainView}>
        <View style={styles.fbView}>
          <TouchableOpacity
            onPress={onPressButton}
            style={styles.fbButton}
            activeOpacity={0.7}>
            <Text>{buttonText}</Text>
          </TouchableOpacity>
          {this.state.userInfo.name && (
            <Text style={styles.commonText}>
              Logged in As: {this.state.userInfo.name}
              {'\n\n'}
              First Name: {this.state.userInfo.first_name}
              {'\n\n'}
              Last Name: {this.state.userInfo.last_name}
              {'\n\n'}
              User Id: {this.state.userInfo.id}
              {'\n\n'}
            </Text>
          )}
        </View>
        <View style={styles.container}>
          <LinkedInModal
            ref={this.modal}
            shouldGetAccessToken={true}
            clientID={'7891ejh8w0j2h5'}
            clientSecret={'hEGDSxOjKQPyObo9'}
            redirectUri="https://www.google.co.in/"
            onSuccess={this.linkedInLogin}
            permissions={['r_liteprofile', 'r_emailaddress']}
          />
          {refreshing && <ActivityIndicator size="large" />}
          {localizedFirstName && (
            <>
              <View style={styles.userContainer}>
                {this.renderItem('First name', localizedFirstName)}
              </View>
              <Button title="Log Out" onPress={this.linkedInSignOut} />
            </>
          )}
        </View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => this.props.navigation.popToTop()}>
          <Text style={styles.backButtonText}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
