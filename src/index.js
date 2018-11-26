import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';

 class App extends Component {
  render() {
    return (
      <div>
        <TodoList/>
      </div>
    )
  }
}

ReactDOM.render(
    <App />
    , document.getElementById('root')
);

