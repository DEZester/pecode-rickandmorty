import { useState, useEffect } from 'react';
import MyEpisodesItem from '../UI/MyEpisodesItem';

const MyEpisodes = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [todo, setTodo] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = e => {
    setTodo(e.target.value);
  };

  const toggleComplete = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };

  const handleDeleteClick = id => {
    const removeItem = todos.filter(todo => todo.id !== id);
    setTodos(removeItem);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (todo !== '') {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
          completed: false,
        },
      ]);
    }
    setTodo('');
  };

  const compareTasks = (first, second) => {
    return first.completed - second.completed;
  };

  return (
    <div className="myEpisodes">
      <form className="myEpisodes__form" onSubmit={handleFormSubmit}>
        <input
          name="todo"
          type="text"
          placeholder="Create a new todo"
          className="myEpisodes__input"
          onChange={handleInputChange}
        />
        <button className="btn" type="submit">
          Create
        </button>
      </form>

      <ul className="myEpisodes__todo-list">
        {todos.sort(compareTasks).map(todo => (
          <MyEpisodesItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            handleDeleteClick={handleDeleteClick}
            isChecked={todo.completed}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default MyEpisodes;
