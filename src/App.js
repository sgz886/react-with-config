// const App = () => React.createElement(
//   'div',
//   { className: 'py-12 flex justify-center' },
//   React.createElement(
//     'p',
//     { className: 'text-3xl' },
//     'hello world!',
//   ),
//   React.createElement(LikeButton),
// );
import LikeButton from './components/LikeButton';
const App = () => {
  return (
    <div className='py-12 flex justify-center'>
      <p className='text-3xl mr-2'>hello world!</p>
      <LikeButton />
    </div>
  )
};
export default App;
