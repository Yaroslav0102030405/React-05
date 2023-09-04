// Модули
import React, { Component } from 'react';
import shortid from 'shortid';
import { BsFill1CircleFill } from "react-icons/bs";
import { BsFillAirplaneFill } from "react-icons/bs";
// Компоненты
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import PaintingList from './components/PaintingList/PaintingList';
// import Panel from './components/Panel/Panel';
// import ColorPicker from './components/ColorPicker';
// import Container from './components/Container/Container';
// import AppBar from './components/AppBar/AppBar';
import TodoList from './components/TodoList';
// import initialTodos from './components/TodoList/todos.json';

// import Form from './components/Form';
import TodoEditor from './components/TodoEditor';
// import Filter from './components/Filter';
// Стили
// import paintings from './paintings.json';
// import './components/PaintingList/PaintingList.css';
// import Notification from './components/Notification/Notification';
import Modal from './components/Modal';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  // храним заняения
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };
  // прояитать с локалсторидж
  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  // записываем в локалсторидж
  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    // операция по добавлению
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);
  };

  render() {
    const { todos, filter, showModal } = this.state;

    // const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleTodos = this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );

    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          <BsFill1CircleFill size={60} fill='red' aria-label='цифра один'  />
          Открыть модалку
          <BsFillAirplaneFill size="60" color='red' aria-label='самолет' />
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Привет это контент модалки</h1>
            <p>fdflkljfkdliobvmvcjkfdklldfsdds</p>
            <button type="button" onClick={this.toggleModal}>
              Закрыть
            </button>
          </Modal>
        )}

        <TodoEditor onSubmit={this.addTodo} />
        <h1>Головна</h1>
        <label>
          Фильтр по имени
          <input type="text" value={filter} onChange={this.changeFilter} />
        </label>
        {/* ;<Filter value={filter} onChange={this.changeFilter} /> */}

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
      </>
    );
  }
}

export default App;
