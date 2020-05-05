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
  SectionList,
} from 'react-native';
import images from '../../constants/images';
import strings from '../../constants/strings';
import axios from 'axios';
import styles from './styles';
import Swipeable from 'react-native-swipeable';
import Share from 'react-native-share';
import CheckBox from 'react-native-check-box';
import {vw} from '../../constants/dimensions';
console.disableYellowBox = true;
interface Props {}
interface State {}
export default function Home() {
  const [articles, setarticles] = useState([]);
  const [showMore, setshowMore] = useState(null);
  const [isFetching, setFetching] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isSelected, setSelection] = useState([]);
  const [showlist, setShowList] = useState(false);
  const [showcheckBox, setshowcheckBox] = useState(false);
  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=noida&apiKey=d410fd5a834048f99d32f44b11f12239',
      )
      .then(response => {
        // console.log(response.data);
        setarticles(response.data.articles);
      });
  });

  const showToggleRead = (index: any) => {
    setshowMore(showMore == index ? -1 : index);
  };
  const handleClick = () => {
    setshowcheckBox(!showcheckBox);
  };
  const toogleCheck = (id: any) => {
    setSelection(articles[id]);
  };
  const changeList = () => {
    setShowList(!showlist);
  };
  // const uncheckedall = () => {
  //   setSelection(!isSelected);
  // };
  const deleteData = (index: any) => {
    let temp = articles;
    temp.splice(parseInt(index), 1);
    setarticles(temp.splice(0));
  };
  // const handleRefresh = () => {
  //   setRefreshing(true);
  //   axios.get(
  //     'https://newsapi.org/v2/everything?q=noida&apiKey=fd53e1e17b314370b8d4e2f3337932d2',
  //   );
  // };

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
  // const DATA = [
  //   {
  //     title: 'A',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'B',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'C',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'D',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'E',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'F',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'G',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'H',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'I',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'J',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'K',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'L',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'M',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'N',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'N',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'O',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'P',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'Q',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'R',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'S',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'T',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'U',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'V',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'W',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'X',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'Y',
  //     data: [articles.filter(index).title],
  //   },
  //   {
  //     title: 'Z',
  //     data: [articles.filter(index).title],
  //   },
  // ];

  // if (articles.filter(index).title != null) {
  //   const Item = ({title}) => (
  //     <View style={styles.item}>
  //                <Text style={styles.title}>{title}</Text>
  //     </View>
  //   );
  // } else {
  //   return null;
  // }

  return (
    <>
      <SafeAreaView style={styles.header}>
        <Image style={styles.imageLines} source={images.threelines} />
        <Text style={styles.headerText}>{strings.Social}</Text>
        {/* <Image style={styles.searchImage} source={images.searchIcon} /> */}
        <TouchableOpacity onPress={() => handleClick()}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
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
      <TouchableOpacity
        style={{alignItems: 'flex-end'}}
        onPress={() => changeList()}
        activeOpacity={0.7}>
        <Text style={styles.divideText}>
          {showlist ? 'Back To Normal' : 'Divide into Section'}
        </Text>
      </TouchableOpacity>
      {showcheckBox ? (
        <>
          <TouchableOpacity style={styles.buttonNext} activeOpacity={0.7}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCancel}
            activeOpacity={0.7}
            onPress={() => uncheckedall()}>
            <Text style={styles.nextText}>Cancel</Text>
          </TouchableOpacity>
        </>
      ) : null}
      {showlist ? (
        <View style={{marginTop: vw(20)}}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => <Item title={item} />}
            renderSectionHeader={({section: {title}}) => (
              <View style={styles.headerListView}>
                <Text style={styles.headerListText}>{title}</Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={articles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={styles.cardView}>
                <Swipeable rightButtons={rightButtons}>
                  <View style={styles.cardBox}>
                    {showcheckBox ? (
                      <CheckBox
                        style={styles.checkBox}
                        isChecked={!index}
                        onClick={() => toogleCheck(index)}
                      />
                    ) : null}
                    <Text style={styles.titleText}>
                      {articles[index].title}
                    </Text>
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
          bounces={false}
          // onRefresh={handleRefresh}
        />
      )}
    </>
  );
}
