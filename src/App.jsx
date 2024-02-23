import "./App.css";
import DataBox from "./DataBox";
import PromoBox from "./PromoBox";

function App() {
  return (
    <>
      <div className="main">
        <div className="info">
          <h2>Learn to code by watching others</h2>
          <p>See how experienced developers solve problems in real-time.</p>
          <p>Watching scripted tutorials is great, but understanding how</p>
          <p> developers think is invaluable.</p>
        </div>
        <div className="data">
          <PromoBox></PromoBox>
          <DataBox></DataBox>
        </div>
      </div>
    </>
  );
}

export default App;
