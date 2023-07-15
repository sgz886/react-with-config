// import React from 'react';
import LikeButton from './components/LikeButton';

const App = () => {
  const [message, setMessage] = React.useState('my 1st from zero');
  return (
    <div className="py-12 flex flex-col justify-center">
      <div><p className="text-3xl mr-2">{message}</p>
        <input type="text" value={message}
               onChange={e => setMessage(e.target.value)} />
      </div>
      <LikeButton />
    </div>
  );
};
export default App;
