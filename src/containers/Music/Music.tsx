import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import images from '../../constants/images';
import strings from '../../constants/strings';
import colors from '../../constants/colors';
import axios from 'axios';
console.disableYellowBox = true;
interface Props {}
interface State {
  fetchedData: any;
  showSort: boolean;
  text: any;
}

export default class Music extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      fetchedData: [],
      showSort: false,
      text: '',
    };
    let arrayholder = [];
  }
  componentDidMount() {
    axios
      .get('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem', {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key':
            '1987296f2fmsh63c9dc0ff53031cp11fbfejsnbd23a8dbed16',
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log(response.data);
        this.setState({fetchedData: response.data.data}, () => {
          arrayholder = response.data.data;
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  showSortList = () => {
    this.setState({showSort: !this.state.showSort});
  };

  searchData = (text: any) => {
    const newData = arrayholder.filter((item: any) => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({fetchedData: newData, text: text});
  };

  sortAtoZ = () => {
    const sortData = arrayholder.sort(function(a: any, b: any) {
      var nameA = a.title.toLowerCase();
      var nameB = b.title.toLowerCase();
      if (nameA < nameB) return -1;
      return 0;
    });
    this.setState({fetchedData: sortData, showSort: false});
  };
  sortZtoA = () => {
    const sortData = arrayholder.sort(function(a: any, b: any) {
      var nameA = a.title.toLowerCase();
      var nameB = b.title.toLowerCase();
      if (nameA > nameB) return -1;
      return 0;
    });
    this.setState({fetchedData: sortData, showSort: false});
  };
  durationLtoH = () => {
    const sortData = arrayholder.sort(function(a: any, b: any) {
      return a.duration - b.duration;
    });
    this.setState({fetchedData: sortData, showSort: false});
  };
  durationHtoL = () => {
    const sortData = arrayholder.sort(function(a: any, b: any) {
      return b.duration - a.duration;
    });
    this.setState({fetchedData: sortData, showSort: false});
  };
  RankLtoH = () => {
    const sortData = arrayholder.sort(function(a: any, b: any) {
      return a.rank - b.rank;
    });
    this.setState({fetchedData: sortData, showSort: false});
  };
  RankHtoL = () => {
    const sortData = arrayholder.sort(function(a: any, b: any) {
      return b.rank - a.rank;
    });
    this.setState({fetchedData: sortData, showSort: false});
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <Image style={styles.imageLines} source={images.threelines} />
          <Text style={styles.headerText}>{strings.Audrix}</Text>
          <TouchableOpacity
            onPress={() => this.showSortList()}
            activeOpacity={0.7}>
            <Text style={styles.sortText}>
              {this.state.showSort ? 'Back' : 'Sort'}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
        {this.state.showSort ? (
          <View style={styles.sortView}>
            <Text style={styles.sortTitle}>Sort According To:</Text>
            <View style={styles.list}>
              <TouchableOpacity
                onPress={() => {
                  this.sortAtoZ();
                }}
                activeOpacity={0.7}>
                <Text style={styles.commonText}>Name (A to Z)</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.sortZtoA();
                }}
                activeOpacity={0.7}>
                <Text style={styles.commonText}>Name (Z to A)</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.durationLtoH();
                }}
                activeOpacity={0.7}>
                <Text style={styles.commonText}>Duration (Low to High)</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.durationHtoL();
                }}
                activeOpacity={0.7}>
                <Text style={styles.commonText}>Duration (High to Low)</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.RankLtoH();
                }}
                activeOpacity={0.7}>
                <Text style={styles.commonText}>Rank (Low to High)</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.RankHtoL();
                }}
                activeOpacity={0.7}>
                <Text style={styles.commonText}>Rank (High to Low)</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <>
            <TextInput
              style={styles.searchInput}
              placeholder={strings.search}
              placeholderTextColor={colors.textInput}
              value={this.state.text}
              onChangeText={text => this.searchData(text)}
            />
            <FlatList
              data={this.state.fetchedData}
              showsVerticalScrollIndicator={false}
              bounces={false}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.listView}>
                    <Image
                      style={styles.albumImage}
                      source={{uri: this.state.fetchedData[index].album.cover}}
                    />
                    <View style={{width: '70%'}}>
                      <Text style={styles.titleText}>
                        {this.state.fetchedData[index].title}
                      </Text>
                      <Text style={styles.artistText}>
                        {this.state.fetchedData[index].artist.name}
                      </Text>
                      <View style={styles.rankAndDurationView}>
                        <Text style={styles.rankText}>
                          {this.state.fetchedData[index].rank}
                        </Text>
                        <Text style={styles.durationText}>
                          {this.state.fetchedData[index].duration}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </>
        )}
      </View>
    );
  }
}
