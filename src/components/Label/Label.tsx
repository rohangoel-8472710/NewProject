import React from 'react';
import {View, Text} from 'react-native';
import {string} from 'prop-types';
import styles from './styles';

const Label = ({label, color}) => (
  <View style={[styles.label, {borderColor: color}]}>
    <Text style={[styles.labelText, {color}]}>{label}</Text>
  </View>
);

Label.propTypes = {
  label: string.isRequired,
  color: string.isRequired,
};

export default Label;
