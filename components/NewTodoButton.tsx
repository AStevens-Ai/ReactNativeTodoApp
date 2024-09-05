import React, { useContext, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import NewTodoModal from './NewTodoModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TodosContext } from '@/app/context/context';

function NewTodoButton() {
  const [shown, setShown] = useState(false);
  const { fetchTodos } = useContext(TodosContext);
  const openModal = () => {
    setShown(true);
  };

  const createTodo = async ({ title, severity }) => {
    if (title && severity) {
      try {
        const TODOS_KEY = 'todos_list';
        const newTodo = {
          title,
          severity,
          id: Date.now(),
        };

        const todoString = await AsyncStorage.getItem(TODOS_KEY);

        const todos = todoString ? JSON.parse(todoString) : [];
        todos.push(newTodo);

        await AsyncStorage.setItem(TODOS_KEY, JSON.stringify(todos));

        setShown(false);

        await fetchTodos(); //context fetch key
      } catch (e) {
        console.log(e);
      }
    } else {
      Alert.alert(
        'Error',
        'Title or Severity is empty.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
        }
      );
    }
  };

  const cancelModal = () => {
    setShown(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={openModal}>
        <Text style={{ color: 'green', fontSize: 16 }}>New Todo</Text>
      </TouchableOpacity>
      <NewTodoModal
        createTodo={createTodo}
        cancelModal={cancelModal}
        shown={shown}
      />
    </View>
  );
}

export default NewTodoButton;
