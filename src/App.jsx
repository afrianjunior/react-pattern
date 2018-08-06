import React from "react";
import TodoLists from "./TodoLists";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TodoLists>
          {({ todos, addTodo }) => (
            <React.Fragment>
              <div>{todos.map(todo => todo)}</div>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  const value = e.target.todo.value;
                  addTodo(value);
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
