import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-indigo-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Coming Soon be patient...
      </h2>
      <p className="mt-2 text-gray-600">
        The page you're looking for is coming soon and we are working on it
      </p>
      <Link
        to="/"
        className="px-4 py-2 mt-6 text-white bg-indigo-600 rounded-lg"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ComingSoon;
