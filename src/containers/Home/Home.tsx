import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList
} from 'react-native';
import images from '../../constants/images';
import strings from '../../constants/strings';
import CustomInput from '../../components/customInput';
import axios from 'axios';
import styles from './styles';
import colors from '../../constants/colors';
interface Props {
  navigation?: any;
}
interface State {
  articles: any;
  showMore: any;
}

export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      articles: [],
      showMore: null,
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=noida&apiKey=8e1c1bde2e2f479ba5589586812bd075',
      )
      .then(response => {
        console.log(response.data);
        this.setState({articles: response.data.articles});
      })
      .catch(function(error) {});
  }

  showToggleRead = (index: any) => {
    this.setState({
      showMore: this.state.showMore == index ? -1 : index,
    });
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.header}>
          <Image style={styles.imageLines} source={images.threelines} />
          <Text style={styles.headerText}>{strings.Social}</Text>
          <Image style={styles.searchImage} source={images.searchIcon} />
        </SafeAreaView>
        <View style={styles.textInput}>
          <Image style={styles.searchPin} source={images.searchPin} />
          <CustomInput
            style={''}
            placeholder={strings.splashText}
            placeholderTextColor={colors.placeHolder}
            secureTextEntry={''}
            returnKeyType="done"
            onBlur={''}
            onFocus={''}
          />
        </View>
        <FlatList data={this.state.articles} renderItem={({item,index}) =>{return()}}/>
      </>
    );
  }
}
