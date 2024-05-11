const ExponentThree = (props) => {
  const total = props.count * props.count * props.count;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{props.count}³</p>
      <p className="exponent-result">
        {props.count} * {props.count} * {props.count} ={" "}
        <span className="total">{total}</span>
      </p>
    </div>
  );
};

export default ExponentThree;
