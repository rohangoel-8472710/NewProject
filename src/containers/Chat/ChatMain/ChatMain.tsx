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
interface Props {
  navigation?: any;
}
interface State {
  messages: any;
}

export default class ChatMain extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      messages: [],
    };
  }
  renderSend = () => {
    return (
      <>
        <TouchableOpacity style={styles.sendBtn}>
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
        />
      </>
    );
  }
}
