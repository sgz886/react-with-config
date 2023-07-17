import { useState } from 'react';
import LikeButton from './components/LikeButton';

function App() {
  const [message, setMessage] = useState('my 1st from zero');
  return (
    <div className="py-12 flex flex-col justify-center">
      <div>
        <p className="text-3xl mr-2 text-green-600">{message}</p>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <LikeButton />
    </div>
  );
}
export default App;
