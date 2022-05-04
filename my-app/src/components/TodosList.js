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
                <li className={`flex mt-3 p-2 max-h-15 border-2 rounded-md shadow-md ${todo.completed ? "bg-[#e1e3eb]" : "bg-[#fff]"}`}
                key={todo.id}>
                    <input 
                    type="text" 
                    value={todo.title} 
                    className={`w-30 mr-2 pl-2  text-base border-0 ${todo.completed ? "bg-[#e1e3eb] line-through text-[#999999]" : "bg-[#fff] text-[#252525]"}`} 
                    onChange={(event) => event.preventDefault()} 
                    />
                    <div>
                        <button className="border-0 outline-0 cursor-pointer bg-[#FDBB4B] text-2xl w-10 h-10 rounded-md m-0 text-white"
                        onClick={() => handleComplete(todo)}>
                            <i className="fa fa-check"></i>
                        </button>
                        <button className="border-0 outline-0 cursor-pointer bg-[#1780C0] text-2xl w-10 h-10 rounded-md m-2 text-white"
                        onClick={() => handleEdit(todo)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="border-0 outline-0 cursor-pointer bg-[#F61C4D] text-2xl w-10 h-10 rounded-md m-0 text-white"
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
