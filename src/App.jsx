import React from "react";
import TodoLists from "./TodoLists";
import styled from "styled-components";

const Input = styled.input`
  padding: .5em 1.3em;
  border-radius: 4px;
  outline: none;
  background-color: grey;
  color: white;
  border: 0;
  margin-right: 10px;
`;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TodoLists>
          {({ todos, addTodo, deleteTodo }) => (
            <React.Fragment>
              <ul>
                {todos.map((todo, index) => (
                  <li key={index.toString()}>
                    {todo}
                    <button onClick={() => deleteTodo(index)}>delete</button>
                  </li>
                ))}
              </ul>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  const { todo } = e.target;
                  const value = todo.value;
                  addTodo(value);
                  todo.value = "";
                }}
              >
                <Input type="text" name="todo" placeholder="todo" />
                <input type="submit" value="Add" />
              </form>
            </React.Fragment>
          )}
        </TodoLists>
      </div>
    );
  }
}
