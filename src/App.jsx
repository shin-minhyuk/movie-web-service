import { useRef, useState } from "react";

function MinutesToHours() {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };

  const reset = () => setAmount(0);
  const onInverted = () => setInverted((prev) => !prev);
  return (
    <>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          disabled={inverted}
          onChange={onChange}
          id="minutes"
          type="number"
          // false인데 이 값이 참이면 이거 아니면 minutes
          value={inverted ? Math.floor(amount * 60) : amount}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          onChange={onChange}
          id="hours"
          type="number"
          value={inverted ? amount : Math.floor(amount / 60)}
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInverted}>Flipped</button>
    </>
  );
}
function KmToMilte() {
  return <h3>KM 2 M</h3>;
}
function App() {
  const [index, setIndex] = useState("xx");
  const useRefValue = useRef(null);
  console.log(useRef(null));

  const onSelect = (event) => setIndex(event.target.value);
  return (
    <div>
      <h1>Super Converter</h1>
      <select onChange={onSelect}>
        <option value="xx">select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "xx" ? "Please select your unites" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMilte /> : null}
    </div>
  );
}

export default App;
