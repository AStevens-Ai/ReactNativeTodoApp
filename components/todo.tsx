import { TodoInterface } from '@/app/(tabs)';
import React, {useState} from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";


interface TodosCardProps {
    Todos: TodoInterface[]
 }

function Todo({Todos} : TodosCardProps) {
    const [checkedTodos, setCheckedTodos] = useState<{[key: string]: Boolean}>({})
    const toggleCheckbox = (id: string) => {
        setCheckedTodos((prev) => ({
            ...prev,
            [id]: !prev[id]
        }))
    }
    
    return (
    <FlatList
            data={Todos}
            renderItem={({ item }) => {
            const isChecked = checkedTodos[item.id] || false
            return (
              <View style={[ 
                styles.todoContainer,
                isChecked && styles.checkedTodo
               ]}>
                <View>
                    <Text style={[
                        styles.normalText,
                        isChecked && styles.checkedText
                    ]}>{item.name}</Text>
                    <Text style={[
                        styles.normalText,
                        isChecked && styles.checkedText
                    ]}>Severity: {item.severity}</Text>
                </View>
                <View>
                    <Text style={[styles.completed,
                        isChecked ? styles.show : styles.hidden
                    ]}>Completed!</Text>
                </View>
                <View>
                <BouncyCheckbox
                disableText
                fillColor="green"
                size={35}
                isChecked= {isChecked}
                iconStyle={{borderColor: 'green'}}
                onPress={() =>  toggleCheckbox(item.id) }
                />
                </View>
              </View>
                )
            }}
            keyExtractor={item => item.id}
          />
  )
}

const styles = StyleSheet.create({
    todoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
    },
    completed: {
        color: 'green',
        fontSize: 20,
        width: 150,
    },
    hidden: {
        display: 'none',
    },
    show: {
        display: 'flex'
    },
    checkedTodo: {
        backgroundColor: '#d3d3d3',
    },
    normalText: {
        color: 'black',
        fontSize: 16,
    },
    checkedText: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
});

export default Todo