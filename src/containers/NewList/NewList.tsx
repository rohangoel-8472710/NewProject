import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import images from '../../constants/images';
import strings from '../../constants/strings';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import {vw} from '../../constants/dimensions';
Icon.loadFont();
Icon2.loadFont();
interface Props {}
interface State {
  DATA: any;
  newData: any;
}
export default class NewList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      DATA: [
        {value: 'Dancing'},
        {value: 'Birdwatching'},
        {value: 'Cooking'},
        {value: 'Cycling'},
        {value: 'Drawing'},
        {value: 'Exercising'},
      ],
      newData: [],
    };
  }

  FlatListItemSeparator = () => {
    return <View style={styles.separator} />;
  };

  getItem = (item: any) => {
    let temp = this.state.DATA;
    let index = temp.indexOf(item);
    temp.splice(index, 1);
    this.setState({DATA: temp});
    this.state.newData.push(item);
  };
  returnItem = (item: any) => {
    let arr = this.state.newData;
    let index1 = arr.indexOf(item);
    arr.splice(index1, 1);
    this.setState({newData: arr});
    this.state.DATA.push(item);
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.headerView}>
          <Text style={styles.hobbiesText}>Hobbies</Text>
          <Text style={styles.addNewText}>ADD NEW</Text>
        </SafeAreaView>
        <View style={styles.textInput}>
          <Image source={images.searchIcon} style={styles.searchImage} />
          <TextInput
            style={styles.searchText}
            returnKeyType="search"
            placeholder={strings.search}
            autoCorrect={false}
          />
        </View>
        <FlatList
          horizontal={true}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          data={this.state.newData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.horizontalFlatList}>
                <Text style={styles.horizontalText}>{item.value}</Text>
                <View style={styles.circleView}>
                  <TouchableOpacity
                    onPress={() => this.returnItem(item)}
                    activeOpacity={0.7}>
                    <Icon2
                      name="cross"
                      color={colors.chatGreen}
                      size={vw(15)}
                      style={{alignSelf: 'center'}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
        <FlatList
          data={this.state.DATA}
          bounces={false}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.flatListView}>
                <Text style={styles.listText}>{item.value}</Text>
                <TouchableOpacity
                  onPress={() => this.getItem(item)}
                  activeOpacity={0.7}>
                  <Icon
                    name="pluscircleo"
                    color={colors.chatGreen}
                    size={vw(20)}
                    style={styles.plusIcon}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </>
    );
  }
}
