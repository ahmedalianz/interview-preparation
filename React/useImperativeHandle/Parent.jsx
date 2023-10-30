import React, {useRef} from 'react';
import Counter from './Counter';

function Parent() {
  const ref = useRef(null);
  const reset = () => ref.current.reset();
  return (
    <div>
      <button onClick={reset}>reset</button>
      <Counter ref={ref} />
    </div>
  );
}

export default Parent;
