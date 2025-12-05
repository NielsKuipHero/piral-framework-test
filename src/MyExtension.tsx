import * as React from 'react';

export default () => {
  // you can use anything from React, there are no limits
  const [count, setCount] = React.useState(0);

  const increment = () => setCount((c) => c + 1);

  return (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  );
};
