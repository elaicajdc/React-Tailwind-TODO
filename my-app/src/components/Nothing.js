import React from 'react'
import '../input.css'

const Nothing = ({todos}) => {
    const noResults = ({data = todos}) => {
        let count = data.filter((item => !item.length));
        return (count.length > 0)? true : false;
    }
    return (
        <div className={`${(noResults(todos))? "" : "bg-cat-nothing min-w-full h-72 box-border bg-cover"}`}/>
    );
};

export default Nothing;