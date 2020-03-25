import React, {Component} from 'react';
import strings from '../../constants/strings';
import {
  ImageBackground,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import images from '../../constants/images';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './styles';
import CustomButton from '../../components/customButton';
interface Props {}
interface State {
  App: boolean;
}

const slides = [
  {
    heading: strings.newProject,
    subHeading: strings.splashText,
    image: images.tutorial1,
    swipetext: strings.swipeText,
    arrow: images.swipe,
  },
  {
    heading: strings.newProject,
    subHeading: strings.splashText,
    image: images.tutorial2,
    title: strings.explore,
    text: strings.tutorial2Text,
  },
  {
    heading: strings.newProject,
    subHeading: strings.splashText,
    image: images.tutorial3,
    title: strings.connect,
    text: strings.tutorial3Text,
  },
];

class Tutorial extends Component<Props, State> {
  state = {
    App: false,
  };

  renderSlides = ({item}: any) => {
    return (
      <ImageBackground style={styles.imageStyle} source={item.image}>
        <Text style={styles.heading}>{item.heading}</Text>
        <Text style={styles.subheading}>{item.subHeading}</Text>
        <Text style={styles.swipeTextStyle}>
          {item.swipetext}
          <Image style={styles.arrow} source={item.arrow} />
        </Text>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.descriptionText}>{item.text}</Text>
        <CustomButton
          styleButton={styles.fbButton}
          image={images.fb}
          title={strings.fbLogin}
        />
        <CustomButton
          styleButton={styles.linkedinButton}
          image={images.linkedin}
          title={strings.linkedin}
        />
        <View style={styles.signInUPView}>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInText}>{strings.signIn}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signInText}>{strings.signUp}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };

  Done = () => {
    this.setState({App: true});
  };

  render() {
    if (this.state.App) {
      return <Tutorial />;
    } else {
      return (
        <AppIntroSlider
          renderItem={(item: any) => this.renderSlides(item)}
          slides={slides}
          onDone={this.Done}
          showNextButton={false}
          dotStyle={styles.inActiveDot}
          activeDotStyle={styles.activeDot}
          showDoneButton={false}
        />
      );
    }
  }
}
export default Tutorial;
