import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import images from '../../constants/images';
import strings from '../../constants/strings';
import axios from 'axios';
import styles from './styles';
interface Props {}
interface State {}

export default function Home() {
  const [articles, setarticles] = useState([]);
  const [showMore, setshowMore] = useState(null);
  const [setsearch, setsearchdata] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=noida&apiKey=f194300ab72a42ada0b0454c6de8630b',
      )
      .then(response => {
        console.log(response.data);
        setarticles(response.data.articles);
      });
  });

  const showToggleRead = (index: any) => {
    setshowMore(showMore == index ? -1 : index);
  };

  // const handleapi = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://newsapi.org/v2/everything?q=noida&apiKey=788e4046f3d94b499387882c411ba6a4',
  //     );
  //     const responseJson = await response.json();
  //     setsearchdata(responseJson.articles);
  //     setisLoading(false);
  //   } catch (e) {
  //     setisLoading(false);
  //   }
  // };
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
          // onSubmitEditing={() => {
          //   handleapi();
          // }}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.cardView}>
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
            </View>
          );
        }}
      />
    </>
  );
}
