import React from 'react'
import Dialog from "react-native-dialog";
import { View, StyleSheet } from 'react-native';

function NewTodoModal({shown, createTodo, cancelModal}) {
  return (
    <View style={styles.container}>
        <Dialog.Container visible={shown}>
            <Dialog.Title>Create New Todo</Dialog.Title>
            <Dialog.Description>Please Enter Todo Information</Dialog.Description>
            <Dialog.Input placeholder='Enter Todo Title' />
            <Dialog.Input placeholder='Enter Todo Severity "1-10"'/>
            <Dialog.Button label="Cancel" onPress={cancelModal}/>
            <Dialog.Button label="Create" onPress={createTodo}/>
        </Dialog.Container>
    </View>
  )
}
const  styles = StyleSheet.create({
    container: {
        borderRadius: 20
    }
})

export default NewTodoModal