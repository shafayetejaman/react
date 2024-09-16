import React from 'react';
import { FaUtensils, FaWeight, FaTags, FaReact } from 'react-icons/fa';
import { IoEarth } from "react-icons/io5";

const Card = ({ foodDetails }) =>
{

    return (
        <div className="overflow-hidden rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            style={{
                background: 'linear-gradient(to bottom right, #1a202c, #2d3748)'
            }}>
            <img
                className="w-full h-48 object-cover"
                src={foodDetails.image}
                alt={foodDetails.name}
            />
            <div className="px-6 py-4">
                <h2 className="mb-2 text-2xl font-bold text-white">{foodDetails.name}</h2>
                <div className="flex justify-between items-center mt-3">
                    <div>
                        <p className="mb-2 text-sm text-gray-300 flex items-center">
                            <FaUtensils className="mr-2" />
                            {foodDetails.category}
                        </p>
                        <p className="mb-2 text-sm text-gray-300 flex items-center">
                            <IoEarth className="mr-2" />
                            {foodDetails.country}
                        </p>
                    </div>
                    <button className="btn btn-sm btn-white text-lg">Detail</button>

                </div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <div className="flex items-center mb-3">
                    <FaTags className="mr-2 text-gray-300" />
                    <span className="text-sm text-gray-300">Tags:</span>
                </div>
                {foodDetails.tags?.map((tag, idx) => (
                    <span
                        key={idx}
                        className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Card;