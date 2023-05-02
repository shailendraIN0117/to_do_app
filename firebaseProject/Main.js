import {StatusBar} from 'expo-status-bar';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Task from './Components/Task';
import {KeyboardAvoidingView} from 'react-native';
import {TextInput} from 'react-native';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, deleteTask, editTask} from './Components/Redux/action';
import React from 'react';
export default function Main() {
  const [task, setTask] = useState();
  const [singleTask, setSingleTask] = useState();
  const [editMode, setEditMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const dispatch = useDispatch();
  const {taskArray} = useSelector(state => state.item);
  console.log(taskArray);

  // Add Handler
  const addTaskHandler = () => {
    if (!editMode) {
      dispatch(addTask(task));
      setTask(null);
    } else {
      dispatch(editTask(singleTask));
      setTask(null);
      setEditMode(false);
    }
  };

  // Delete Handler
  const deleteTaskHandler = index => {
    dispatch(deleteTask(index));
  };

  // Edit Handler
  const editHandler = index => {
    dispatch(deleteTask(index));
    setEditMode(true);
    const taskItem = taskArray.find((item, idx) => idx === index);
    // console.log("SelectedtaskItem=====>", taskItem)
    setSingleTask(taskItem);
  };

  const completeTaskHandler = index => {
    // const getItem = taskArray.find((item, idx) => idx === index);
    setSelectedItem(index);
    console.log('SelectedtaskItem=====>', selectedItem);
  };

  return (
    <View style={styles.container}>
      <View style={styles.todayTaskWrapper}>
        <Text style={styles.todayTask}>Today's tasks</Text>
        <View style={styles.items}>
          {taskArray.map((item, index) => {
            console.log('selectedItem====>', selectedItem);
            return (
              <TouchableOpacity
                key={index}
                onPress={() => completeTaskHandler(index)}>
                <Task
                  text={item}
                  idx={index}
                  onPressDelete={deleteTaskHandler}
                  onPressEdit={editHandler}
                  selectedTask={selectedItem}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Write a Task'}
          value={!editMode ? task : singleTask}
          onChangeText={text => {
            !editMode ? setTask(text) : setSingleTask(text);
          }}
        />
        <TouchableOpacity onPress={addTaskHandler}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  todayTaskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  todayTask: {
    fontWeight: '700',
    fontSize: 24,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    width: '100%',
    bottom: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    fontSize: 40,
    color: '#C0C0C0',
  },
  selectedItem: {
    textDecorationLine: 'line-through',
  },
});
