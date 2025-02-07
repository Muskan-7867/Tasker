import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text, Pressable } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

interface ListitemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void; // Prop for deleting a todo
}

const Listitem: React.FC<ListitemProps> = ({ todo, toggleComplete, deleteTodo }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLongPress = () => {
    setModalVisible(true); // Show the custom modal
  };

  const handleDelete = () => {
    deleteTodo(todo.id); // Delete the task
    setModalVisible(false); // Close the modal
  };

  return (
    <>
      <Pressable
        style={styles.listItem}
        onLongPress={handleLongPress} // Show modal on long press
      >
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
      </Pressable>

      {/* Custom Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Delete Task</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to delete "{todo.task}"?
            </Text>

            <View style={styles.modalActions}>
              <Pressable
                style={[styles.button, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.deleteButton]}
                onPress={handleDelete}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  deleteButton: {
    backgroundColor: '#f00',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Listitem;
