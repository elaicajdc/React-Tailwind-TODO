import React, {useEffect} from 'react';
import {v4 as uuidv4} from "uuid";
import '../input.css';

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
    useEffect(() => {
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput("")
        }
    }, [setInput, editTodo]);

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? {title, id, completed} : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
        
    }
    return (
        <form onSubmit={onFormSubmit}>
            <input 
            type="text" 
            placeholder="Enter a TODO ..." 
            className="w-[16.5rem] p-2 pl-4 mr-3 text-base color-[#ccc] bg-white rounded-md border-2  border-[#c89666] text-[#252525]"
            value={input}
            required
            onChange={onInputChange}/>
            <button className="w-20 px-5 py-2 text-lg text-white bg-[#FDBB4B] rounded-md cursor-pointer" type="submit">
                {editTodo ? "OK" : "Add"}
            </button>
        </form>
    );
};

export default Form;
