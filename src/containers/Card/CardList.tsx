import React, {useRef} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import photoCards from '../../constants/photoCards';
import {Card, IconButton, Label} from '../../components';
import images from '../../constants/images';
import strings from '../../constants/strings';
import styles from './styles';

const CardList = () => {
  const useSwiper = useRef(null).current

  const handleOnSwipeLeft = () => useSwiper.swipeLeft();
  const handleOnSwipeTop = () => useSwiper.swipeTop();
  const handleOnSwipeRight = () => useSwiper.swipeRight();

  return (
    <>
      <SafeAreaView style={styles.header}>
        <Image style={styles.imageLines} source={images.threelines} />
        <Text style={styles.headerText}>{strings.card}</Text>
      </SafeAreaView>
      <View styles={styles.container}>
        <View style={styles.swipeContainer}>
          <Swiper
            ref={useSwiper}
            cards={photoCards}
            containerStyle={styles.container}
            renderCard={(card: any) => <Card card={card} />}
            cardIndex={0}
            backgroundColor="white"
            stackSize={2}
            animateCardOpacity={true}
            infinite={true}
            animateOverlayLabelsOpacity={true}
            overlayLabels={{
              left: {
                title: 'NOPE',
                element: <Label label="NOPE" color="#E5566D" />,
                style: {
                  wrapper: styles.labelWrapper,
                },
              },
              right: {
                title: 'LIKE',
                element: <Label label="LIKE" color="#4CCC93" />,
                style: {
                  wrapper: {
                    ...styles.labelWrapper,
                    alignItems: 'flex-start',
                    marginLeft: 30,
                  },
                },
              },
            }}
          />
        </View>
        {/* <View style={styles.buttonContainer}>
          <IconButton
            name="close"
            onPress={handleOnSwipeLeft}
            color="white"
            backgroundColor="#E5566D"
          />
          <IconButton
            name="star"
            onPress={handleOnSwipeTop}
            color="white"
            backgroundColor="#3CA3FF"
          />
          <IconButton
            name="heart"
            onPress={handleOnSwipeRight}
            color="white"
            backgroundColor="#4CCC93"
          />
        </View> */}
      </View>
    </>
  );
};

export default CardList;
