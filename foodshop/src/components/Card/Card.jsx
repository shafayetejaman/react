import React from 'react';
import { FaUtensils, FaWeight, FaTags } from 'react-icons/fa';

const FoodCard = () =>
{
    const foodDetails = {
        name: 'Grilled Salmon with Lemon Butter',
        category: 'Seafood',
        portion: '1 fillet (6 oz)',
        tags: ['Healthy', 'Protein-rich', 'Omega-3'],
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    };

    return (
        <div className="max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
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
                <p className="mb-2 text-sm text-gray-300 flex items-center">
                    <FaUtensils className="mr-2" />
                    {foodDetails.category}
                </p>
                <p className="mb-2 text-sm text-gray-300 flex items-center">
                    <FaWeight className="mr-2" />
                    {foodDetails.portion}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <div className="flex items-center mb-2">
                    <FaTags className="mr-2 text-gray-300" />
                    <span className="text-sm text-gray-300">Tags:</span>
                </div>
                {foodDetails.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default FoodCard;