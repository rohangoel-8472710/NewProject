import React, {Component} from 'react';
import {SafeAreaView, Text, Image, FlatList} from 'react-native';
import {faqDataList} from './action';
import {connect} from 'react-redux';
import QAList from './QAList';

import images from '../../constants/images';
import strings from '../../constants/strings';
import styles from './styles';
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
export default connect(mapStateToProps, mapDispatchToProps)(Faq);
