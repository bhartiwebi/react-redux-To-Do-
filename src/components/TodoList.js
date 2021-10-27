import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selector";
import { Todo } from "./Todo";
import "./TodoList.css";
export const TodoList = () => {
  const { todos, visibilityFilter } = useSelector((state) => state);
  const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);

  return (
    <Box className="TodoList" my="4">
      {filterTodos.length ? (
        filterTodos
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .map((todo) => <Todo key={`todo-${todo.id}`} todo={todo} />)
      ) : (
        <Box textAlign="center" my="4"></Box>
      )}
    </Box>
  );
};
