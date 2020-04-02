import React, {Component} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {GiftedChat, InputToolbar, Bubble} from 'react-native-gifted-chat';
import images from '../../../constants/images';
import {vh, vw} from '../../../constants/dimensions';
import styles from './styles';
interface Props {
  navigation?: any;
}
interface State {}

export default class ChatMain extends Component<Props, State> {
  state = {};

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
          minComposerHeight={vh(45)}
          maxComposerHeight={vh(75)}
          renderSend={this.renderSend}
          renderInputToolbar={this.renderInputToolbar}
          renderBubble={this.renderBubble}
        />
      </>
    );
  }
}
