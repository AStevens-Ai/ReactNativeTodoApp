import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import NewTodoModal from './NewTodoModal'

function NewTodoButton() {
    const [shown, setShown] = useState(false)
    const openModal = () => {
        setShown(true)
    }

    const createTodo = () => {
        console.log('create')
    }

    const cancelModal = () => {
        setShown(false)
    }

  return (
    <View>
        <TouchableOpacity onPress={openModal}><Text style={{color: 'green', fontSize: 16}}>New Todo</Text></TouchableOpacity>
        <NewTodoModal createTodo={createTodo} cancelModal={cancelModal} shown={shown}/>
    </View>
  )
}

export default NewTodoButton