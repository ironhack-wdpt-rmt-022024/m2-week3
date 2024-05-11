

const Counter = (props) => {


  return (
    <div className="counter-container">
      <p className="counter-value">{props.count}</p>
      <button className="counter-button" onClick={props.decrement}>-</button>
      <button className="counter-button" onClick={props.increment}>+</button>

    </div>
  );
};

export default Counter;
