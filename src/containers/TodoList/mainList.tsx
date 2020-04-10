import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
import Icon2 from 'react-native-vector-icons/MaterialIcons';
Icon2.loadFont();
import styles from './styles';
import strings from '../../constants/strings';
import colors from '../../constants/colors';
import {vw, vh} from '../../constants/dimensions';
import TodoList from './TodoList';
interface Props {}
interface State {}

export default function MainList() {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (value.length > 0) {
      setTasks([...tasks, {text: value, key: Date.now(), checked: false}]);
      setValue('');
    }
  };

  const checkTask = (id: any) => {
    setTasks(
      tasks.map(tasks => {
        if (tasks.key === id) tasks.checked = !tasks.checked;
        return tasks;
      }),
    );
  };

  const deleteTask = (id: any) => {
    setTasks(
      tasks.filter(tasks => {
        if (tasks.key !== id) return true;
      }),
    );
  };

  const deleteAll = () => {
    setTasks(tasks.splice(tasks.length));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{strings.List}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          placeholder={strings.addTask}
          multiline={true}
          placeholderTextColor={colors.warmGrey50}
          value={value}
          onChangeText={value => setValue(value)}
        />
        <TouchableOpacity onPress={() => addTask()} activeOpacity={0.7}>
          <Icon
            name="plus"
            size={vw(25)}
            color={colors.chatGreen}
            style={styles.plusIcon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{width: '100%'}}>
        {tasks.map(item => (
          <TodoList
            text={item.text}
            key={item.key}
            checked={item.checked}
            setChecked={() => checkTask(item.key)}
            deleteTodo={() => deleteTask(item.key)}
          />
        ))}
      </ScrollView>
      <View style={styles.deleteAll}>
        <Icon2
          name="delete-forever"
          size={vw(25)}
          color={colors.white}
          onPress={() => deleteAll()}
        />
      </View>
    </SafeAreaView>
  );
}
