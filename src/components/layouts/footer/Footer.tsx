import React from 'react'


const Footer = () => {
    return (
        <>
            <footer className="bg-gray-300 flex justify-evenly text-white py-8 gap-8">
                <div>
                    <h2 className="text-xl font-bold mb-4">Site Info</h2>
                    <img src="/path-to-logo.png" alt="Logo" className="mb-4" />
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                        <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul>
                        <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Book Appointment</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Doctors</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Legal</h2>
                    <ul>
                        <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Subscribe</h2>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Subscribe
                    </button>
                </div>
            </footer>
        </>
    )
}

export default Footer