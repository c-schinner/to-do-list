import TodoItem from "./TodoItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AnimatePresence } from "framer-motion";

const TodoList = ({ todos, toggleTodo, deleteTodo, setToDos }) => {
    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(todos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setToDos(items);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="todos">
                {(provided) => (
                    <ul
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="space-y-4 mt-8 w-full max-w-xl"
                    >
                        <AnimatePresence>
                            {todos.map((todo, index) => (
                                <Draggable
                                    key={todo.id}
                                    draggableId={todo.id}
                                    index={index}
                                >
                                    {(provided) => (
                                        <div
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                        >
                                            <TodoItem
                                                {...todo}
                                                toggleTodo={toggleTodo}
                                                deleteTodo={deleteTodo}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </AnimatePresence>
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};
export default TodoList;
