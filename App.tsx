import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Listitem from './src/components/Listitem';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: 'First Task', completed: true },
    { id: 2, task: 'Second Task', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTodo = () => {
    if (newTask.trim()) {
      setTodos([...todos, { id: Date.now(), task: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleDelete = (id: any) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id: any) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <View style={styles.container}>
      {/* Title Section */}
      <View style={styles.titlewrapper}>
        <Text style={styles.title}>Tasker</Text>
        <TouchableOpacity onPress={() => setTodos([])}>
          <Ionicons name="delete" size={25} color="red" />
        </TouchableOpacity>
      </View>

      {/* List Section */}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Listitem
            todo={item}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        )}
      />

      {/* input Section */}
      <View style={styles.footer}>
        <View style={styles.input}>
          <TextInput
            placeholder="Add Todo"
            style={styles.textInput}
            value={newTask}
            onChangeText={(text) => setNewTask(text)}
          />
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.addIconContainer}>
          <Ionicons name="add" size={30} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
  },
  titlewrapper: {
    paddingTop: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'blue',
    fontSize: 24,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  input: {
    backgroundColor: 'white',
    elevation: 5,
    height: 50,
    flex: 1,
    marginVertical: 20,
    marginRight: 10,
    paddingHorizontal: 20,
    marginLeft: 20,
    borderRadius: 30,
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 16,
  },
  addIconContainer: {
    backgroundColor: 'blue',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 40,
  },
});

export default App;