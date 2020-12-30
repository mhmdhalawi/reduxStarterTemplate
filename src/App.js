import './App.css';
import { adding, subtracting, fetch_data } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.counter.count);
  const data = useSelector((state) => state.data.info);
  const dispatch = useDispatch();

  function addition() {
    dispatch(adding());
  }
  function subtraction() {
    dispatch(subtracting());
  }
  function getData() {
    dispatch(fetch_data());
  }
  return (
    <div className="App">
      <h1 className="text-blue-500">Hello</h1>
      <button className="btn-main  bg-blue-500 hover:bg-blue-600" onClick={addition}>
        +
      </button>
      <p className={count < 0 ? 'text-red-600 font-bold' : 'text-blue-600 font-bold'}>{count}</p>
      <button className="btn-main bg-red-500 hover:bg-red-600" onClick={subtraction}>
        -
      </button>
      <div className="flex flex-col justify-center items-center">
        <button className="btn-main bg-indigo-500 hover:bg-indigo-600" onClick={getData}>
          fetch
        </button>
        <h2 className="text-blue-400 font-medium ">{data && data[0].name}</h2>
      </div>

      <button className="btn-main bg-red-500 hover:bg-red-600">test</button>
    </div>
  );
}

export default App;
