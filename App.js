import React from 'react';
import './App.css';
import Header from './header.js';
import TodoInput from './todoInput.js';
import TodoItem from './todoItem.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
      
    this.state = {
      todos: [
        {id: 0, text: "Study for Quiz"},
        {id: 1, text: "Learn Semantic UI"},
      ],
      nextId: 3
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    var todos = this.state.todos.slice();
      
    todos.push({id: this.state.nextId, text: todoText});
      
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
      });
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}