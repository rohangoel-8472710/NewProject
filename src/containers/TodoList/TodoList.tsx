import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
Icon.loadFont();
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';
interface Props {
  checked: any;
  setChecked: any;
  text: string;
  deleteTodo: any;
}

export default function TodoList(props: Props) {
  return (
    <View style={styles.listContainer}>
      <Icon
        name={props.checked ? 'check' : 'square'}
        size={vw(25)}
        color={colors.black}
        onPress={props.setChecked}
        style={styles.checkIcon}
      />
      <View>
        {props.checked && <View style={styles.cutLine} />}
        <Text style={styles.listText}>{props.text}</Text>
      </View>
      <Icon
        name="trash"
        size={vw(25)}
        color={colors.waterBlue}
        onPress={props.deleteTodo}
        style={styles.thrashIcon}
      />
    </View>
  );
}
