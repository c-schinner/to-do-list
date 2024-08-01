import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="text-white text-2xl flex flex-col gap-6 mt-6 pl-4">
    <ul>
        {todos.length === 0 && "No ToDos"}
        {todos.map(todo => (
            <TodoItem 
            {...todo} 
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}/>
            ))}
    </ul>
</div>
  );
};

export default TodoList