import React from "react";

export default class TodoLists extends React.Component {
  state = {todos: []}
  addTodo = (todo) => {
    this.setState(({ todos }) => ({
      todos: todos.concat(todo),
    }));
  }
  deleteTodo = (key) => {
    this.setState(({ todos }) => ({
      todos: todos.filter((todo, index) => {
        return index !== key
      })
    }))
  }
  render() {
    return this.props.children({
      todos: this.state.todos,
      addTodo: this.addTodo,
      deleteTodo: this.deleteTodo
    })
  }
}