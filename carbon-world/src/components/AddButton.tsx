import React from 'react';

const AddButton = () => {
    return (
        <button
            className="max-w-sm rounded-[1.5rem] overflow-hidden shadow-lg bg-[#5CC94D] text-white flex items-center justify-center"
            style={{width: '100%', height: '100%'}}
        >
            <span className="flex items-center justify-center text-4xl text-[#2A2A2A] border-[#2A2A2A] border-2 w-10 h-10 p-2">+
        </span>


</button>
    );
};

export default AddButton;
