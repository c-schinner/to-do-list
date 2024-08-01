import { useState, useEffect } from 'react';
import NewTask from './components/NewTask';
import TodoList from './components/TodoList';

const App = () => {

  const [todos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setToDos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }
      ];
    });
  };

  const toggleTodo = (id) => {
    setToDos(currentTodo =>
        currentTodo.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    );
};

  const deleteTodo = (id) => {
    setToDos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    });
  };

  return (
    <>
      <NewTask onSubmit={addTodo} />
      <div className="bg-slate-700 text-5xl flex flex-col h-full pl-4">
          <h1 className="text-white mb-4">To Do:</h1>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
};

export default App;
