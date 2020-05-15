import React, {Component} from 'react';
import {SafeAreaView, Text, Image, FlatList} from 'react-native';
import {faqDataList} from './action';
import {connect} from 'react-redux';
import QAList from './QAList';

import images from '../../constants/images';
import strings from '../../constants/strings';
import styles from './styles';
// const faqData = [
//   {
//     que: 'When does a new challenge start and how can I know?',
//     answer:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. ',
//   },
//   {
//     que:
//       'How will I know I have won the challenge and how will I get the prize money?',
//     answer:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. ',
//   },
//   {
//     que:
//       'How do I upload a picture in any challenge and what are the basic rules of submissions?',
//     answer:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. ',
//   },
//   {
//     que:
//       'Lorem ipsum dolor sit amet, consectetur piscing elit, sed do eiusmod tempor?',
//     answer:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. ',
//   },
//   {
//     que:
//       'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli?',
//     answer:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed adipiscing diam donec. ',
//   },
// ];
interface Props {
  faqData: any;
}
interface State {}
class Faq extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <SafeAreaView style={styles.header}>
          <Image style={styles.backButton} source={images.back} />
          <Text style={styles.headerText}>{strings.faq}</Text>
        </SafeAreaView>
        <FlatList
          data={this.props.faqData}
          bounces={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => <QAList index={index} item={item} />}
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  const {faqData} = state.faqReducer;
  return {
    faqData,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  faqDataList: (payload: any) => dispatch(faqDataList(payload)),
});
export default connect(mapDispatchToProps, mapStateToProps)(Faq);
