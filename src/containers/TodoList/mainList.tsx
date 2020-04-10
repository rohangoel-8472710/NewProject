import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
import styles from './styles';
import strings from '../../constants/strings';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';
interface Props {}
interface State {}

export default function MainList() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{strings.List}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          placeholder={strings.addTask}
          multiline={true}
          placeholderTextColor={colors.warmGrey50}
        />
        <TouchableOpacity>
          <Icon
            name="plus"
            size={vw(25)}
            color={colors.chatGreen}
            style={styles.plusIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
