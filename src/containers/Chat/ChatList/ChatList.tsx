import React, {Component} from 'react';
import {View, Image, Text, SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import images from '../../../constants/images';
import strings from '../../../constants/strings';
import colors from '../../../constants/colors';
import InboxFlatList from './InboxFlatList';
interface Props {}
interface State {}

const DATA = [
  {
    title: 'Anrdew Mcarthy',
    text: 'So we take that as a done deal from..',
  },
  {
      title:'Kelly Clarkson',
      text:'thankyou so much for the help.'
  }
];
export default class ChatList extends Component<Props, State> {
  state = {};

  renderInbox = (rowData: any) => {
    const {key, item} = rowData;
    return <InboxFlatList item={item} />;
  };

  FlatListItemSeparator = () => {
    return <View style={styles.separator} />;
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.header}>
          <Image style={styles.sideMenu} source={images.sideMenu} />
          <Text style={styles.headerText}>{strings.shembe}</Text>
        </SafeAreaView>
        <Text style={styles.chats}>{strings.Chats}</Text>
        <FlatList
          alwaysBounceVertical={false}
          renderItem={this.renderInbox}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          keyExtractor={(item, key) => key.toString()}
          bounces={false}
          data={DATA}
        />
      </>
    );
  }
}
