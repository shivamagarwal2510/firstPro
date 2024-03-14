import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<Array<{id: number; text: string}>>([]);
  // console.debug(todo);
  const addTodo = () => {
    console.log('Adding todo', todo);
    setTodos([...todos, {id: Date.now(), text: todo}]);
    setTodo('');
  };

  const handleDeleteTodo = (id: number) => {
    console.log('Deleting todo', id);
    const newTodos = todos.filter(todoItem => todoItem.id !== id);
    setTodos(newTodos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Taskez</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter To-do"
            placeholderTextColor={'gray'}
            value={todo}
            onChange={textContent => setTodo(textContent.nativeEvent.text)}
          />
          <TouchableOpacity
            style={styles.inputButton}
            onPress={addTodo}
            activeOpacity={0.5}>
            <Text style={styles.inputButtonText}>Go</Text>
          </TouchableOpacity>
        </View>
        <View>
          {todos.map(todoItem => (
            <View style={styles.todoItem} key={todoItem.id}>
              <Text style={styles.todoText}>{todoItem.text}</Text>
              <TouchableOpacity onPress={() => handleDeleteTodo(todoItem.id)}>
                <Text style={styles.todoDelete}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000fd',
  },
  heading: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'monsterat-bold',
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    // setting placeholder color gray
  },
  inputStyle: {
    width: '82%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    color: 'white',
  },
  inputButton: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  inputButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  todoItem: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoText: {
    color: 'white',
  },
  todoDelete: {
    color: 'red',
  },
});
