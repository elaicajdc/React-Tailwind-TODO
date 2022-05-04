import React from 'react'
import '../input.css'

const Header = () => {
    return (
        <div className="font-mono text-3xl font-bold text-left text-white mt-24">
            <div className="grid grid-rows-2 grid-cols-8 grid-flow-col gap-0 ">
                <div className="col-span-2 row-span-3 text-6xl text-center font-body">05</div>
                <div className="col-span-3 text-2xl text-left">Wednesday</div>
                <div className="row-span-2 col-span-3 text-base text-left">April, 2022</div>
            </div>
            <div className="text-left text-3xl ml-4">To Do List</div>
        </div>
    );
};

export default Header;