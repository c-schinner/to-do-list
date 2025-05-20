import { useState } from "react";

const NewTask = ({ onSubmit }) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task === "") return;

        onSubmit(task);

        setTask("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl bg-slate-700 p-6 rounded-xl shadow-md"
        >
            <div className="flex flex-col gap-4">
                <label htmlFor="item" className="text-xl font-semibold">
                    Add New Task
                </label>
                <input
                    type="text"
                    id="item"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="bg-white text-gray-800 text-lg p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="e.g. Finish homework"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition-colors">
                    Add Task
                </button>
            </div>
        </form>
    );
};

export default NewTask;
