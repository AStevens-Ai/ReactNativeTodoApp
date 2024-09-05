import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TodosContext = createContext({
  todos: [],
  fetchTodos: async () => {},
});

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const TODOS_KEY = 'todos_list';

  const fetchTodos = async () => {
    try {
      console.log('fetching todos...');
      const todoString = await AsyncStorage.getItem(TODOS_KEY);
      const todos = todoString ? JSON.parse(todoString) : [];
      setTodos(todos);
      console.log('parsed: ', todos);
    } catch (e) {
      console.log(e);
      setTodos([]);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodosContext.Provider value={{ todos, fetchTodos }}>
      {children}
    </TodosContext.Provider>
  );
};
