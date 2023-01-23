import React, { useState } from "react";
import Navbar from "@/components/Navbar";

const Routine = () => {
  const [budgetInput, setBudgetInput] = useState("");
  const [skinTypeInput, setSkinTypeInput] = useState("");

  const onBudgetChangedText = (e) => {
    console.log(e.target.value);
    setBudgetInput(e.target.value);
  };

  const onSkinTypeChangedText = (e) => {
    console.log(e.target.value);
    setSkinTypeInput(e.target.value);
  };

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
          value={budgetInput}
          onChange={onBudgetChangedText}
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
          value={skinTypeInput}
          onChange={onSkinTypeChangedText}
        />
        <button
          onClick={null}
          className="bg-stone-500 hover:bg-stone-600 text-white font-bold py-2 px-4 mt-10 rounded justify-center items-center"
        >
          Generate routine
        </button>
      </div>
    </>
  );
};

export default Routine;
