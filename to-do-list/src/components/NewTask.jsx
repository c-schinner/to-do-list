import { useState } from 'react';

const NewTask = ({ onSubmit }) => {

    const [task, setTask] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task === "") return;

        onSubmit(task);

        setTask("")
    };

    return (
        <form onSubmit={handleSubmit} className="bg-slate-700 p-6">
            <div className="flex flex-col items-center justify-center h-full gap-4">
                <label 
                htmlFor="item"  
                className="text-white text-4xl m-2">
                    New Item
                </label>
                <input 
                type="text"
                id="item"
                value={task} 
                onChange={(e) => setTask(e.target.value)}
                className="bg-slate-300 text-gray-700 text-2xl p-2 max-w-[1800px] rounded-md focus:outline-none hover:bg-white m-2"/>
                <button 
                className="bg-blue-400 max-w-[1200px] text-2xl p-2 m-2 rounded-md border-transparent hover:text-blue-400 hover:bg-slate-600 hover:border-blue-500">
                    Add
                </button>
                </div>
        </form>
 );
};

export default NewTask;