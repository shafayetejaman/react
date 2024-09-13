import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Footer = () =>
{
    const [email, setEmail] = useState('');

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Submitted email:', email);
        setEmail('');
    };

    return (
        <footer className="fluid-containerc bg-gray-900 text-indigo-400 py-12">
            <div className="px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
                        <p className="mb-6">Subscribe to our newsletter for updates and exclusive offers.</p>
                        <form onSubmit={handleSubmit} className="flex justify-center sm:flex-row">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                aria-label="Email address"
                                required
                                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0 w-full sm:w-auto"
                            />
                            <button
                                type="submit"
                                aria-label="Subscribe"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-md transition duration-300 ease-in-out flex items-center justify-center w-full sm:w-auto"
                            >
                                <FaPaperPlane className="mr-2" />
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div className="w-full md:w-1/2 md:text-right">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Services</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;