import Todo from '@/components/todo';
import TodosCard from '@/components/todosCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  ScrollView,
  View,
} from 'react-native';

export interface TodoInterface {
  title: string;
  severity: number;
  id: number;
}

export default function HomeScreen() {
  return (
    <View>
      <View>
        <TodosCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 8,
    padding: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    borderRadius: 20,
    borderColor: 'red',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  TodoCard: {
    display: 'flex',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
