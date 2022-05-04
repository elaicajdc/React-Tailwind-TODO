import React from 'react'
import '../input.css'

const Stats = ({todos}) => {
    const countComplete = ({data = todos}) => {
        const done = data.filter((item => item.completed === true));
        var s = done.length;
        if (s < 10) s = "0" + s;
        return s;
    }
    const countPending = ({data = todos}) => {
        const pending = data.filter((item => item.completed === false));
        var s = pending.length;
        if (s < 10) s = "0" + s;
        return s;
    }
    return (
        <div className="absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-28 z-10 bg-white  border-2 rounded-md shadow-md justify-center">
            <div className="p-4">
                <div className="grid grid-rows-2 grid-cols-8 grid-flow-col justify-items-center items-center text-[#36322f]">
                    <div className="col-span-4 text-4xl font-bold">{countComplete(todos)}</div>
                    <div className="row-span-1 col-span-4 text-sm">Completed</div>
                    <div className="col-span-6 text-4xl font-bold">{countPending(todos)}</div>
                    <div className="row-span-1 col-span-6 text-sm">Pending</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;