import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-16 py-6 text-white bg-gray-600 navbar bg-base-100 align-items-center">
        <div>
            <Link to="/" className="text-2xl font-light tracking-widest capitalize btn btn-ghost">SPARK ⚡️</Link>
        </div>
        <div className="px-4 py-4 space-x-3">
            <Link className="px-3 py-2 bg-gray-700 rounded-lg text-neutral-300 hover:bg-gray-400 hover:text-neutral-800" to="/user-input">
                USER INPUT
            </Link>
            <Link className="px-3 py-2 bg-gray-700 rounded-lg text-neutral-300 hover:bg-gray-400 hover:text-neutral-800" to="/user-search">
                USER SEARCH
            </Link>
        </div>
    </div>
  )
}

export default Navbar
