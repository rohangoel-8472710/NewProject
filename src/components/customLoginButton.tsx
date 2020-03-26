import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
  styleButton: any;
  title: string;
  onPress: any;
}

const CustomLoginButton = (props: Props) => {
  return (
    <View>
      <TouchableOpacity style={props.styleButton} onPress={() => props.onPress}>
        <Text style={styles.signText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CustomLoginButton;
