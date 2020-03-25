import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  onPress: any;
  styleButton: any;
  title: string;
  image:any
}

const CustomButton = (props: Props) => {
  return (
    <View>
      <TouchableOpacity style={props.styleButton} onPress={() => props.onPress}>
        <Image source={props.image} style={styles.imageStyle}/>
        <Text style={styles.line} >|</Text>
        <Text style={styles.socialText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
