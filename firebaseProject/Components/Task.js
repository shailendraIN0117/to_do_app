import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

// const dispatch = useDispatch();

const Task = ({text, idx, onPressDelete, onPressEdit, selectedTask}) => {
  const {taskArray} = useSelector(state => state.item);

  const deleteHandler = () => {
    onPressDelete(idx);
  };
  const editHandler = () => {
    onPressEdit(idx);
  };
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square} />
        <Text
          style={
            idx === selectedTask
              ? [styles.itemText, styles.crossItem]
              : styles.itemText
          }>
          {text}
        </Text>
      </View>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity onPress={editHandler}>
          <Image
            source={require('./assets/new_edit.jpeg')}
            style={{height: 25, width: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteHandler}>
          <Image
            source={require('./assets/delete-xxl.png')}
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: 250,
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  crossItem: {
    maxWidth: '80%',
    textDecorationLine: 'line-through',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  iconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 50,
  },
});

export default Task;

{
  /* <Text style={selectedTask !== text ? styles.itemText : styles.crossItem}>{text}</Text> */
}
