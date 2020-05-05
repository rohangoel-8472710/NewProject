import React from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import {shape, string, number} from 'prop-types';
import styles from './styles';

const Card = ({card}) => (
  <View style={styles.card}>
    <Image style={styles.imageStyle} source={card.photo} resizeMode="cover" />
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>{`${card.name}, ${card.age}`}</Text>
    </View>
  </View>
);
Card.propTypes = {
  card: shape({
    photo: ImageSourcePropType,
    name: string,
    age: number,
  }).isRequired,
};
export default Card;
