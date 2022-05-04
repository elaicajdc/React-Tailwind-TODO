import React from 'react'
import '../input.css'

const TodosList = ({todos, setTodos, setEditTodo}) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed};
                }
                return item;
            })
        )
    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <div>
            {todos.map((todo) => (
                <li className="flex mt-3 p-2 max-h-15 border-2 rounded-xl" key={todo.id}>
                    <input 
                    type="text" 
                    value={todo.title} 
                    className={`w-30 mr-2 pl-2 bg-[#12343b] text-white text-base border-0 ${todo.completed ? "complete" : ""}`} 
                    onChange={(event) => event.preventDefault()} 
                    />
                    <div>
                        <button className="border-0 outline-0 cursor-pointer bg-[#FDBB4B] text-3xl w-10 rounded-md m-0"
                        onClick={() => handleComplete(todo)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="border-0 outline-0 cursor-pointer bg-[#FDBB4B] text-3xl w-10 rounded-md m-2"
                        onClick={() => handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="border-0 outline-0 cursor-pointer bg-[#FDBB4B] text-3xl w-10 rounded-md m-0"
                        onClick={() => handleDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default TodosList;
