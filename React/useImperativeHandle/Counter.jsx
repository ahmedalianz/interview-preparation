import React, {forwardRef, useImperativeHandle, useState} from 'react';

const Counter = ref => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);
  useImperativeHandle(ref, () => ({reset}));
  return (
    <div>
      count is : {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default forwardRef(Counter);
