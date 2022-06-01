import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="flex justify-center">
      {/* Homepage */}
      <div className="block max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h5
          to="/"
          class="text-2xl font-light tracking-widest capitalize btn btn-ghost"
        >
          SPARK ⚡️
        </h5>
        <p class="text-gray-400 text-xl leading-tight font-semibold mb-2">
          Your Dreams and our help, a bright future
        </p>
        <p class="text-gray-600 text-base mb-4">
          Our Loans don't require collateral or a credit history, Because We
          Know you can achieve your dreams!
        </p>
        <button>
          <Link
            className="px-3 py-2 bg-gray-700 rounded-lg text-neutral-300 hover:bg-gray-400 hover:text-neutral-800"
            to="/user-input"
          >
            Get Started
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
