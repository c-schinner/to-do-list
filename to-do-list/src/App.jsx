import { useState, useEffect } from "react";
import NewTask from "./components/NewTask";
import TodoList from "./components/TodoList";
import { FaSun, FaMoon } from "react-icons/fa";
import Calendar from "./components/Calendar";

const App = () => {
    const [todos, setToDos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        if (localValue == null) return [];
        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (title) => {
        setToDos((currentTodos) => {
            return [
                ...currentTodos,
                { id: crypto.randomUUID(), title, completed: false },
            ];
        });
    };

    const toggleTodo = (id) => {
        setToDos((currentTodo) =>
            currentTodo.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setToDos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== id);
        });
    };

    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 text-black dark:text-white flex flex-col items-center px-4 py-10 transition-colors duration-300">
                {/* Dark mode toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="absolute top-4 right-4 text-2xl bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded shadow"
                    aria-label="Toggle Dark Mode"
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>

                {/* Grid container: stacks on small, splits on medium+ */}
                <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 items-start">
                    {/* Calendar: on top in mobile, on right in desktop */}
                    <div className="order-1 md:order-2">
                        <Calendar />
                    </div>

                    {/* Left content: header, input, todo list */}
                    <div className="order-2 md:order-1">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            📝 My To-Do List
                        </h1>

                        <div className="mb-6">
                            <NewTask onSubmit={addTodo} />
                        </div>

                        <TodoList
                            todos={todos}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                            setToDo={setToDos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
