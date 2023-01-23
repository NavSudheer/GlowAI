import React from "react";
import Navbar from "@/components/Navbar";

const routine = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <label
          for="budget-text"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter your budget
        </label>
        <input
          type="text"
          id="budget-text"
          aria-describedby="budget-text-explanation"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="$100"
        />
        <label
          for="skintype-text"
          class=" mt-10 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter your skin type
        </label>
        <input
          type="text"
          id="skintype-text"
          aria-describedby="skintype-text-explanation"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="oily, dry, combination, etc"
        />
      </div>
    </>
  );
};

export default routine;
