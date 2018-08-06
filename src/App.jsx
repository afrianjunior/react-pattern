import React from "react";
import TodoLists from "./TodoLists";

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
                <input type="text" name="todo" placeholder="todo" />
                <input type="submit" value="Add" />
              </form>
            </React.Fragment>
          )}
        </TodoLists>
      </div>
    );
  }
}
