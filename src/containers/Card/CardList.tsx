import React, {Component} from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import {Card, Button} from 'react-native-elements';
import Swipe from './Swipe';
import jobs from '../../constants/data';
import styles from './styles';
import images from '../../constants/images';
import strings from '../../constants/strings';
interface State {}

export default class CardList extends Component {
  state = {
    likedJobs: 0,
    rejectedJobs: 0,
  };

  LikedJob = () => {
    this.setState(({likedJobs}) => ({
      likedJobs: likedJobs + 1,
    }));
  };

  RejectedJob = () => {
    this.setState(({rejectedJobs}) => ({
      rejectedJobs: rejectedJobs + 1,
    }));
  };

  renderCards(job: any) {
    return (
      <View>
        <Card title={job.jobtitle} titleStyle={styles.titleTextStyle}>
          <View style={styles.imageView}>
            <Image source={images.cardImage} style={styles.cardImage} />
          </View>
          <View style={styles.detailsView}>
            <Text>{job.company}</Text>
            <Text>{job.formattedRelativeTime}</Text>
          </View>
          <Text numberOfLines={3}>{job.snippet}</Text>
        </Card>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.cardContainer}>
        <SafeAreaView style={styles.header}>
          <Image style={styles.imageLines} source={images.threelines} />
          <Text style={styles.headerText}>{strings.card}</Text>
        </SafeAreaView>
        <View style={styles.statusView}>
          <Text style={styles.rejectedText}>
            Rejected: {this.state.rejectedJobs}
          </Text>
          <Text style={styles.likedText}>Liked: {this.state.likedJobs}</Text>
        </View>
        <Swipe
          onSwipeRight={this.LikedJob}
          onSwipeLeft={this.RejectedJob}
          keyProp="jobId"
          data={jobs}
          renderCard={this.renderCards}
        />
      </View>
    );
  }
}
