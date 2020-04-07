import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import images from '../../../constants/images';

interface Props {
  navigation?: any;
  openChat: Function;
  uid: string;
  item: any;
}
interface State {}

export default class InboxFlatList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    const {item} = this.props;
    const {user} = this.props.item;
    return (
      <View style={styles.mainFlatView}>
        <>
          <Image style={styles.profileImg} source={images.placeHolder} />
        </>
        <TouchableOpacity
          style={styles.txt}
          onPress={() => this.props.openChat(item.roomID)}>
          <View style={styles.msgView}>
            <Text style={styles.nameStyle}>Rohan</Text>
            <Text style={styles.lastMsg} numberOfLines={1}>
              {item.lastMsg}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
