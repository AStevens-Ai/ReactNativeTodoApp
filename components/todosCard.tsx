import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import Todo from './todo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TodosContext } from '@/app/context/context';

function TodosCard() {
  const { todos, fetchTodos } = useContext(TodosContext);

  const TODOS_KEY = 'todos_list';

  const deleteTodo = async (id: string) => {
    try {
      const todosString = await AsyncStorage.getItem(TODOS_KEY);
      const todos = todosString ? JSON.parse(todosString) : [];

      const updatedTodos = todos.filter((todo) => todo.id !== id);

      await AsyncStorage.setItem(TODOS_KEY, JSON.stringify(updatedTodos));

      fetchTodos();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={{ display: 'flex', padding: 20 }}>
      <Todo Todos={todos} deleteTodo={deleteTodo} />
    </View>
  );
}

export default TodosCard;
