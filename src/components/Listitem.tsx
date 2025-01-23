import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';



const Listitem = ({todo, handleDelete, handleComplete}) => {
  return (
    <View style={styles.Listitem}>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#1514fc',
            fontSize: 14,
            textDecorationLine: todo?.completed ? 'line-through' : 'none',
          }}>
          {todo?.task}
        </Text>
      </View>

      {!todo?.completed && (
        <TouchableOpacity
          style={styles.actionicon}
          onPress={() => handleComplete(todo.id)}>
          <Ionicons  name="done" size={20} color="white" />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={[styles.actionicon, {backgroundColor: 'red'}]}
        onPress={() => handleDelete(todo.id)}>
        <Ionicons  name="delete" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Listitem: {
    padding: 20,

    flexDirection: 'row',

    borderRadius: 7,
    marginVertical: 10,
  },
  actionicon: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginLeft: 5,
    borderRadius: 3,
  },
});

export default Listitem;