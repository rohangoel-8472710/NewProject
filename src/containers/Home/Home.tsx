import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import images from '../../constants/images';
import strings from '../../constants/strings';
import axios from 'axios';
import styles from './styles';
import Swipeable from 'react-native-swipeable';
import Share from 'react-native-share';
interface Props {}
interface State {}

export default function Home() {
  const [articles, setarticles] = useState([]);
  const [showMore, setshowMore] = useState(null);
  const [isFetching, setFetching] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=noida&apiKey=a8560b57171e4f62bc246ab838f98e4e',
      )
      .then(response => {
        console.log(response.data);
        setarticles(response.data.articles);
      });
  });

  const showToggleRead = (index: any) => {
    setshowMore(showMore == index ? -1 : index);
  };

  const deleteData = (index: any) => {
    let temp = articles;
    temp.splice(parseInt(index), 1);
    setarticles(temp.splice(0));
  };
  const handleRefresh = () => {
    setRefreshing(true);
    axios.get(
      'https://newsapi.org/v2/everything?q=noida&apiKey=fd53e1e17b314370b8d4e2f3337932d2',
    );
  };

  const ShareApp = async () => {
    const shareOptions = {
      title: 'Share Via',
      message: 'some message',
      url: 'some share url',
      // social: Share.Social,
      // social: Share.Social.WHATSAPP
    };
    // Share.open(shareOptions);
  };
  const rightButtons = [
    <TouchableOpacity
      style={styles.shareButton}
      onPress={() => ShareApp()}
      activeOpacity={0.6}>
      <Image style={styles.shareImage} source={images.share} />
    </TouchableOpacity>,
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => {
        Alert.alert(
          'Alert',
          'Are you sure you want to delete ?',
          [
            {
              text: 'No',
              onPress: () => console.log('Canceled Delete'),
              style: 'cancel',
            },
            {
              text: 'Yes',
              onPress: () => {
                deleteData(articles);
              },
            },
          ],
          {cancelable: true},
        );
      }}
      activeOpacity={0.6}>
      <Image style={styles.deleteImage} source={images.delete} />
    </TouchableOpacity>,
  ];
  return (
    <>
      <SafeAreaView style={styles.header}>
        <Image style={styles.imageLines} source={images.threelines} />
        <Text style={styles.headerText}>{strings.Social}</Text>
        <Image style={styles.searchImage} source={images.searchIcon} />
      </SafeAreaView>
      <View style={styles.textInput}>
        <Image style={styles.searchPin} source={images.searchPin} />
        <TextInput
          autoCorrect={false}
          autoCapitalize="words"
          returnKeyType="search"
          style={styles.searchText}
          placeholder={strings.splashText}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.cardView}>
              <Swipeable rightButtons={rightButtons}>
                <View style={styles.cardBox}>
                  <Text style={styles.titleText}>{articles[index].title}</Text>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => showToggleRead(index)}>
                    <Text
                      style={styles.descriptionText}
                      numberOfLines={showMore == index ? 0 : 2}>
                      {articles[index].description}
                    </Text>
                  </TouchableOpacity>
                </View>
              </Swipeable>
            </View>
          );
        }}
        pagingEnabled={true}
        disableIntervalMomentum={true}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </>
  );
}
