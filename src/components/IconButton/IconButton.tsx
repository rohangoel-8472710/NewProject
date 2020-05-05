import React from 'react';
import {TouchableOpacity} from 'react-native';
import {func, string} from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
import colors from '../../constants/colors';
import styles from './styles';

const IconButton = ({onPress, name, backgroundColor, color}) => (
  <TouchableOpacity
    style={[styles.button, {backgroundColor}]}
    onPress={onPress}
    activeOpacity={0.85}>
    <Icon name={name} size={20} color={color} />
  </TouchableOpacity>
);
IconButton.propTypes = {
  onPress: func.isRequired,
  name: string.isRequired,
  color: string,
  backgroundColor: string,
};
IconButton.defaultProps = {
  color: colors.white,
  backgroundColor: colors.chatGreen,
};
export default IconButton;
