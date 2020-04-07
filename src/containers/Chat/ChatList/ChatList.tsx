import React, {Component} from 'react';
import {View, Image, Text, SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import images from '../../../constants/images';
import strings from '../../../constants/strings';
import colors from '../../../constants/colors';
import InboxFlatList from './InboxFlatList';
import Firebaseservices from '../../../utils/FirebaseServices';
interface Props {
  uid: string;
  email: string;
  user: any;
  updateUser: Function;
  navigation?: any;
}
interface State {
  roomID: string;
  uid: string;
  lastMsgData: Array<any>;
  chatEmpty: boolean;
  list: Array<any>;
  email: string;
}

const DATA = [
  {
    title: 'Anrdew Mcarthy',
    text: 'So we take that as a done deal from..',
  },
  {
    title: 'Kelly Clarkson',
    text: 'thankyou so much for the help.',
  },
];
export default class ChatList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      roomID: '',
      uid: this.props.uid,
      lastMsgData: [],
      chatEmpty: false,
      list: [],
      email: this.props.email,
    };
  }

  componentDidMount() {
    this.fetchInbox();
  }
  componentWillUnmount() {
    Firebaseservices.refOff();
  }
  renderInbox = (rowData: any) => {
    const {key, item} = rowData;
    return (
      <InboxFlatList
        item={item}
        openChat={this.existingChatRoom}
        uid={this.props.uid}
      />
    );
  };

  FlatListItemSeparator = () => {
    return <View style={styles.separator} />;
  };

  chatRoom = (user: any) => {
    let chatRoomId: string;
    if (user.key > this.props.uid) {
      chatRoomId = user.key.concat(this.props.uid);
    } else {
      chatRoomId = this.props.uid.concat(user.key);
    }
    this.setState({roomID: chatRoomId});
    this.props.navigation.navigate('ChatMain', {
      roomID: chatRoomId,
      reciverId: user.key,
    });
  };

  existingChatRoom = (id: string, roomID: string) => {
    this.props.navigation.navigate('ChatMain', {
      roomID: roomID,
      reciverId: id,
    });
  };

  fetchInbox = () => {
    Firebaseservices.inboxList(this.state.uid, (data: any) => {
      if (data !== null) {
        var objData = Object.keys(data).map(function(key) {
          return data[key];
        });
        objData.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
        this.setState({lastMsgData: objData, chatEmpty: false}, () =>
          this.fetch(),
        );
      } else {
        this.setState({chatEmpty: true});
      }
    });
  };

  fetch = () => {
    var newData: Array<any> = [];
    Firebaseservices.fetchList((user: any) => {
      if (this.props.uid !== user.key) {
        newData = newData.concat(user);
      } else {
        this.props.updateUser(user);
      }
    });
    setTimeout(() => {
      this.setState({list: newData});
    }, 500);
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
