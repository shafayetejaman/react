import React, { useState, useEffect } from 'react';
import { FaHome, FaCarrot, FaList, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () =>
{
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [theme, setTheme] = useState('dark');

    useEffect(() =>
    {
        const handleScroll = () =>
        {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () =>
        {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () =>
    {
        setIsOpen(!isOpen);
    };

    const toggleTheme = () =>
    {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const navItems = [
        { name: 'Home', icon: <FaHome />, dropdownItems: ['Featured', 'New Arrivals'] },
        { name: 'Ingredients', icon: <FaCarrot />, dropdownItems: ['Vegetables', 'Fruits', 'Herbs'] },
        { name: 'Category', icon: <FaList />, dropdownItems: ['Organic', 'Gluten-free', 'Vegan'] },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-all duration-300 ease-in-out`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" className="flex-shrink-0 text-2xl font-bold">FoodShop</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <div key={item.name} className="relative group">
                                    <a
                                        href="#"
                                        className="px-3 py-2 rounded-md text-sm font-medium hover:bg-opacity-75 hover:text-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-black flex items-center transition-all duration-200 ease-in-out"
                                    >
                                        {item.icon}
                                        <span className="ml-2">{item.name}</span>
                                    </a>
                                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-slate-600 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            {item.dropdownItems.map((dropdownItem) => (
                                                <a
                                                    key={dropdownItem}
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    {dropdownItem}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-white focus:ring-white focus:text-white sm:text-sm transition-all duration-200 ease-in-out"
                                    placeholder="Search"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-200 ease-in-out"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <FaTimes className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <FaBars className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href="#"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-all duration-200 ease-in-out"
                        >
                            {item.icon}
                            <span className="ml-2">{item.name}</span>
                        </a>
                    ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm transition-all duration-200 ease-in-out"
                                placeholder="Search"
                            />
                        </div>
                        <button
                            onClick={toggleTheme}
                            className="ml-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-200 ease-in-out"
                        >
                            {theme === 'dark' ? '🌞' : '🌙'}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;