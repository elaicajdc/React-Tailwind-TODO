import React from 'react'
import '../input.css'

const Stats = () => {
    return (
        <div className="absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-28 z-10 bg-white  border-2 rounded-md shadow-md justify-center">
            <div className="p-4">
                <div className="grid grid-rows-2 grid-cols-8 grid-flow-col justify-items-center items-center text-[#36322f]">
                    <div className="col-span-4 text-4xl font-bold">08</div>
                    <div className="row-span-1 col-span-4 text-sm">Completed</div>
                    <div className="col-span-6 text-4xl font-bold">03</div>
                    <div className="row-span-1 col-span-6 text-sm">Pending</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;