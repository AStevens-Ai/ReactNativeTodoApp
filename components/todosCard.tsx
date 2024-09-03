import React from 'react'
import {View } from 'react-native'
import Todo from './todo';

const Todos = [{
    name: 'cut grass',
    severity: 8,
    id: 1,
    },
    {
      name: 'eat ice cream',
      severity: 9,
      id: 2,
    }]

function TodosCard() {
    return (
        <View style={{ display: 'flex', padding: 20}}>
          <Todo Todos={Todos}/>
        </View>
      );
}

export default TodosCard