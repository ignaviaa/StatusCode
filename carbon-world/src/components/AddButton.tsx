import React from 'react';

const AddButton = () => {
    return (
        <button
            className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#5CC94D] text-black flex items-center justify-center"
            style={{width: '100%', height: '100%'}}
        >
            <span className="flex items-center justify-center text-3xl text-white border-white border-2 w-10 h-10 rounded">+
        </span>


</button>
    );
};

export default AddButton;
