import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-5xl mb-5">Counter: {count}</h1>
      <button className="bg-blue-300 p-3  rounded-xl" onClick={increment}>
        Increment
      </button>
      <button className="bg-amber-700 p-3  rounded-xl" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
