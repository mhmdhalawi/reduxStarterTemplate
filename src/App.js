import './App.css';
import { adding, subtracting, fetch_data } from './actions/actions';
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
      <h1 className="text-primary">Hello</h1>
      <button className="btn btn-primary" onClick={addition}>
        +
      </button>
      <p className={count < 0 ? 'text-danger' : 'text-primary'}>{count}</p>
      <button className="btn btn-danger" onClick={subtraction}>
        -
      </button>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <button className="btn btn-info" onClick={getData}>
          fetch
        </button>
        <h2 className="text-primary">{data && data[0].name}</h2>
      </div>
    </div>
  );
}

export default App;
