import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
    return (
        <motion.li
            layout
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-600 p-4 rounded-md flex justify-between items-center shadow-sm"
        >
            <label className="flex items-center gap-4 cursor-pointer">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => toggleTodo(id)}
                    className="accent-blue-500 w-5 h-5"
                />
                <span
                    className={`text-lg ${
                        completed ? "line-through text-green-400" : ""
                    }`}
                >
                    {title}
                </span>
            </label>
            <button
                onClick={() => deleteTodo(id)}
                className="text-red-400 hover:text-red-600 transition"
            >
                <Trash2 size={18} />
            </button>
        </motion.li>
    );
};

export default TodoItem;
