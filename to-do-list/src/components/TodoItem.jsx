const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {

    return (
        <li className="flex items-center">
            <label htmlFor={`checkbox-${id}`} className="flex items-center">
                <input 
                className="mr-4 transform scale-150" 
                type="checkbox"  
                checked={completed}
                onChange={() => toggleTodo(id)}
                />
                <span className={completed ? "text-green-500" : "text-white"}>
                    {title}
                </span>
            </label>
            <button onClick={() => deleteTodo(id)} 
            className="bg-red-600 m-4 rounded text-base p-1 border-2 border-transparent 
            hover:text-red-500 hover:border-red-500 hover:bg-slate-600">
                Delete
            </button>
        </li>
    )
}

export default TodoItem