import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export const AddTodo = ({ renderTodoList }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
    
          <Flex>
            <FormControl>
              <Input
                type="text"
                placeholder="Add item"
                value={value}
                onChange={handleInput}
                borderTopRightRadius={0}
                borderBottomRightRadius={0}
              />
            </FormControl>
          </Flex>

        {renderTodoList && renderTodoList()}
        <div>
          <Button
            
            type="submit"
            disabled={!value}
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
          >
            +
         </Button><i class="fa fa-search"></i> 
        </div>
      </form>
    </div>
  );
};
