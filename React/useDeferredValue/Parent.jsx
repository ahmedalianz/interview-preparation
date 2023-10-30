import React, {useDeferredValue, useState} from 'react';

function Parent() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  return (
    <div>
      <input onChange={e => setQuery(e.target.value)} value={deferredQuery} />
    </div>
  );
}

export default Parent;
