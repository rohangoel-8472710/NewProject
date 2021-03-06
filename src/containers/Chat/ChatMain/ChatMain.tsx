import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {
  GiftedChat,
  InputToolbar,
  Bubble,
  Composer,
  Time,
  Day,
} from 'react-native-gifted-chat';
import images from '../../../constants/images';
import colors from '../../../constants/colors';
import {vw} from '../../../constants/dimensions';
import styles from './styles';
import strings from '../../../constants/strings';
import Firebaseservices from '../../../utils/FirebaseServices';
import {ImagePickerFn} from '../../../components/';
import Icon from 'react-native-vector-icons/FontAwesome';
var counter: number = 1;
interface Props {
  navigation?: any;
  user: any;
  route: any;
  showFooter: boolean;
  showingFooter: Function;
  hideFooter: Function;
  addImagesToBuffer: Function;
  uploadAndSend: Function;
  sendingURL: string;
  addVideo: Function;
  videoURL: any;
  uploadAndSendVideo: Function;
  currentVideo: string;
  sendingVideoURL: string;
  images: Array<any>;
  currentImg: string;
}
interface State {
  messages: any;
  lastMsg: string;
  loadState: boolean;
  isTyping: boolean;
  showFooter: boolean;
}

export default class ChatMain extends Component<Props, State> {
  giftedChatRef: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      messages: [],
      lastMsg: '',
      loadState: false,
      isTyping: false,
      showFooter: false,
    };
  }

  componentDidMount() {
    counter = 1;
    this.refOn();
    Firebaseservices.getTyping(
      this.props.route.params.roomID,
      this.props.route.params.reciverId,
      this.setTyping,
    );
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
            } else if (this.props.sendingURL !== '') {
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

  setTyping = (data: any) => {
    if (data !== null) {
      this.setState({isTyping: data.isTyping});
    }
  };

  typingIndicator = (text: string) => {
    if (text !== '') {
      Firebaseservices.trueTypingIndicator(
        this.props.route.params.roomID,
        this.props.user.key,
      );
    }
  };

  renderTime = (props: any) => {
    return (
      <Time
        {...props}
        timeTextStyle={{
          left: styles.timeText,
          right: styles.timeText,
        }}
      />
    );
  };

  renderDay = (props: any) => {
    return (
      <Day
        {...props}
        wrapperStyle={styles.dayStyle}
        textStyle={styles.dayText}
      />
    );
  };

  renderFooter = () => {
    let array = this.props.images.filter(
      (item: any) =>
        item.roomID === this.props.route.params.roomID &&
        item.userID === this.props.user.key,
    );
    if (array.length !== 0) {
      return this.props.showFooter && this.state.showFooter ? (
        <View style={styles.imageFooter}>
          <Image
            source={{uri: this.props.currentImg}}
            style={styles.sendingImg}
          />
          <ActivityIndicator
            animating={true}
            size="large"
            color={colors.chatGreen}
            style={styles.indicator}
          />
        </View>
      ) : (
        <></>
      );
    }
  };

  ImagePicker = () => {
    ImagePickerFn.getMultiplePic((response: Array<any>) => {
      response.map(res => {
        var obj = {
          img: res,
          roomID: this.props.route.params.roomID,
          userID: this.props.user.key,
        };
        this.props.addImagesToBuffer(obj);
      });
      this.props.showingFooter();
      this.setState({showFooter: true});
      this.refOn();
      this.props.uploadAndSend(
        this.props.route.params.roomID,
        this.props.user.key,
        this.giftedChatRef,
        () => {
          this.props.hideFooter();
          this.setState({showFooter: false});
          this.refOn();
        },
      );
    });
  };

  get user() {
    return {
      _id: this.props.user.key,
      id: this.props.route.params.reciverId,
      email: this.props.user.email,
      roomID: this.props.route.params.roomID,
      name: this.props.route.params.receiverName,
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
            <Text style={styles.headerName}>
              {this.props.route.params.receiverName}
            </Text>
            {this.state.isTyping ? (
              <Text style={styles.headerName}> ({strings.typing})</Text>
            ) : null}
          </View>
          <View style={styles.rightHeaderView}>
            <Icon
              name="camera"
              size={vw(30)}
              style={styles.cameraIcon}
              color={colors.greyishBrown}
              onPress={() => {
                Alert.alert(
                  'Pick Image From',
                  '',
                  [
                    {text: 'Gallery', onPress: () => this.ImagePicker()},
                    {text: 'Cancel', onPress: () => console.log('Cancelled')},
                  ],
                  {cancelable: true},
                );
              }}
            />
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
          onSend={messages =>
            Firebaseservices.send(messages, this.props.sendingURL)
          }
          user={this.user}
          loadEarlier={this.state.loadState}
          ref={ref => {
            this.giftedChatRef = ref;
          }}
          onInputTextChanged={(text: string) => this.typingIndicator(text)}
          renderDay={this.renderDay}
          renderTime={this.renderTime}
          renderFooter={this.renderFooter}
        />
      </>
    );
  }
}
