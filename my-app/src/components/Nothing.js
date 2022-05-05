import React from 'react'
import '../input.css'

const Nothing = ({todos}) => {
    const noResults = ({data = todos}) => {
        let count = data.filter((item => item.completed === false));
        return (count.length > 0)? true : false;
    }
    return (
        <div className={`${(noResults(todos))? "" : "bg-cat-nothing min-w-full h-72 p-4 box-border mb-16 bg-cover"}`}/>
    );
};

export default Nothing;