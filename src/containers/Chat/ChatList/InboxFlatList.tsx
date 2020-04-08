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
  pad = (num: number) => {
    return ('0' + num).slice(-2);
  };

  getTimeAndDate = (timestamp: number) => {
    var date = new Date(timestamp);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    return this.pad(hours) + ':' + this.pad(minutes);
  };
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
          onPress={() => this.props.openChat(item.roomID, user.name, user.id)}>
          <View style={styles.msgView}>
            <Text style={styles.nameStyle}>{user.name}</Text>
            <Text style={styles.lastMsg} numberOfLines={1}>
              {item.lastMsg}
            </Text>
            <View style={styles.timeView}>
              <Text style={styles.timeTxt}>
                {this.getTimeAndDate(item.createdAt)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
