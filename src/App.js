import { Container, Heading } from '@chakra-ui/react';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import './App.css';
import { VisibilityFilter } from './components/VisibilityFilter';

function App() {
  return (
    <Container maxW="container.sm" style={{backgroundColor: "#e6e6df"}}>
      <Heading my="6" style={{textAlign: "center"}}>Things To Do</Heading>
      <AddTodo renderTodoList={() => <TodoList />} />
      {/* <VisibilityFilter /> */}
    </Container>
  );
}

export default App;
