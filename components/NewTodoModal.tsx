import React, { useState } from 'react';
import Dialog from 'react-native-dialog';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

function NewTodoModal({ shown, cancelModal, createTodo }) {
  const [title, setTitle] = useState('');
  const [severity, setSeverity] = useState('');

  const handleCreateTodo = () => {
    if (title && severity) {
      createTodo({ title, severity });
      setTitle('');
      setSeverity('');
    }
  };

  return (
    <View style={styles.container}>
      <Dialog.Container visible={shown}>
        <Dialog.Title>Create New Todo</Dialog.Title>
        <Dialog.Description>Please Enter Todo Information</Dialog.Description>
        <Dialog.Input
          value={title}
          onChangeText={setTitle}
          placeholder="Enter Todo Title"
        />
        <Dialog.Input
          value={severity}
          onChangeText={setSeverity}
          placeholder='Enter Todo Severity "1-10"'
        />
        <Dialog.Button label="Cancel" onPress={cancelModal} />
        <Dialog.Button label="Create" onPress={handleCreateTodo} />
      </Dialog.Container>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
  },
});

export default NewTodoModal;
