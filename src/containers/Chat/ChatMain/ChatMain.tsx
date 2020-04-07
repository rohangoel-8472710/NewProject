import React, {Component} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {
  GiftedChat,
  InputToolbar,
  Bubble,
  Composer,
} from 'react-native-gifted-chat';
import images from '../../../constants/images';
import {vh, vw} from '../../../constants/dimensions';
import styles from './styles';
import strings from '../../../constants/strings';
import Firebaseservices from '../../../utils/FirebaseServices';

var counter: number = 1;
interface Props {
  navigation?: any;
  user: any;
  route: any;
}
interface State {
  messages: any;
  lastMsg: string;
  loadState: boolean;
}

export default class ChatMain extends Component<Props, State> {
  giftedChatRef: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      messages: [],
      lastMsg: '',
      loadState: false,
    };
  }

  componentDidMount() {
    counter = 1;
    this.refOn();
  }

  componentWillUnmount() {
    Firebaseservices.refOff();
  }
  renderSend = () => {
    const msg = this.giftedChatRef.state.text || '';
    return (
      <>
        <TouchableOpacity
          style={styles.sendBtn}
          onPress={() => {
            if (msg.trim().length > 0) {
              this.giftedChatRef.onSend({text: msg.trim()}, true);
            } else {
              return;
            }
          }}>
          <Image source={images.send} />
        </TouchableOpacity>
      </>
    );
  };

  renderInputToolbar = (props: any) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={styles.footerStyle}
        primaryStyle={styles.primaryStyle}
      />
    );
  };

  renderBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        //@ts-ignore

        wrapperStyle={{
          left: styles.bubbleLeft,
          right: styles.bubbleRight,
        }}
      />
    );
  };

  renderChatFooter = () => {
    return <View style={styles.chatFooter} />;
  };

  renderComposer = (props: any) => {
    return (
      <Composer
        {...props}
        textInputStyle={styles.inputContainer}
        placeholder={strings.typeMsg}
      />
    );
  };

  refOn = () => {
    Firebaseservices.refOn(
      counter,
      this.props.route.params.roomID,
      (message: any) => {
        if (message.length !== 20 * counter) {
          this.setState({loadState: false});
        } else {
          this.setState({loadState: true});
        }
        this.setState({messages: message, lastMsg: message});
      },
    );
  };

  get user() {
    return {
      _id: this.props.user.key,
      id: this.props.route.params.userid,
      email: this.props.user.email,
      roomID: this.props.route.params.roomID,
    };
  }
  render() {
    return (
      <>
        <View style={styles.chatHeader}>
          <View style={styles.leftHeaderView}>
            <TouchableOpacity
              style={styles.headerView}
              onPress={this.props.navigation.goBack()}>
              <Image source={images.chatBack} style={styles.headerBack} />
            </TouchableOpacity>
            <Image style={styles.headerImg} source={images.placeHolder} />
          </View>
        </View>
        <GiftedChat
          minComposerHeight={vw(45)}
          renderSend={this.renderSend}
          messages={this.state.messages}
          renderInputToolbar={this.renderInputToolbar}
          renderBubble={this.renderBubble}
          renderChatFooter={this.renderChatFooter}
          renderComposer={this.renderComposer}
          showAvatarForEveryMessage={false}
          renderAvatarOnTop={true}
          showUserAvatar={true}
          onSend={messages => Firebaseservices.send(messages)}
          // user={this.user}
          loadEarlier={this.state.loadState}
          ref={ref => {
            this.giftedChatRef = ref;
          }}
        />
      </>
    );
  }
}
