import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import images from '../../../constants/images';

interface Props {
  navigation?: any;
}
interface State {}

export default class InboxFlatList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.mainFlatView}>
        <>
          <Image style={styles.profileImg} source={images.placeHolder} />
        </>
        <TouchableOpacity
          style={styles.txt}
          onPress={() => this.props.navigation.navigate('Chat')}>
          <View style={styles.msgView}>
            <Text style={styles.nameStyle}>Anrdew Mcarthy</Text>
            <Text style={styles.lastMsg} numberOfLines={1}>
              So we take that as a done deal from..
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
