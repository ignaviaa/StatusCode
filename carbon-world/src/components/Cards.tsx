import React from 'react';

function Cards() {
    return (
        <><div className="max-w-sm rounded-[1.5rem] overflow-hidden shadow-lg bg-[#202020]">
            <div className="relative w-full h-0" style={{ paddingBottom: '42%' }}>
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://via.placeholder.com/400x300" // Replace with your image URL
                    alt="Card Image"
                />
            </div>
            <div className="px-5 py-4">
                <div className="font-bold text-xl mb-2 text-white">The Coldest Sunset</div>
                <p className="text-white text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
        </div>


        </>

    );
}

export default Cards;