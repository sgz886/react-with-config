import { createRoot } from 'react-dom/client';
import css from './index.css'
import App from './App'

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
