import React from 'react';
import { View, StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

interface ListitemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
}

const Listitem: React.FC<ListitemProps> = ({ todo, toggleComplete }) => {
  return (
    <View style={styles.listItem}>
      <BouncyCheckbox
        isChecked={todo.completed}
        size={25}
        fillColor="black"

        text={todo.task}
        textStyle={[
          styles.taskText,
          todo.completed && styles.completedTask,
        ]}
        iconStyle={{ borderColor: 'black' }}
        onPress={() => toggleComplete(todo.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 8,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default Listitem;
