import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <h1 className="text-7xl font-bold text-gray-800">404</h1>

      <p className="mt-3 text-xl text-gray-600">
        Page not found
      </p>

      <p className="mt-2 text-gray-500 text-center">
        Sorry, the page you are looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;