import React from 'react';

const LikeButton = () => {
  const [count, setCount] = React.useState(0);

  return (
    <button className="border px-4 py-2 rounded"
            onClick={() => setCount((count) => count + 1)}>Like {count}
    </button>
  );
};
export default LikeButton;
  // return React.createElement(
  //   'button',
  //   {
  //     onClick: () => setCount((count) => count + 1),
  //     className: 'border px-4 py-2 rounded',
  //   },
  //   `Like ${count}`,
  // );
