const Exponent = ({ num, exponent }) => {
  const total = num ** exponent;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{num}<sup>{exponent}</sup></p>
      <p className="exponent-result">
      {Array(exponent).fill(num).join(" * ")}  = <span className="total">{total}</span>
      </p>
    </div>
  );
};

export default Exponent;
