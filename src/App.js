import prize from "./Utils/Prize6.json";
import WheelInner from "./Components/WheelInner";
import { useState, useEffect, useCallback } from "react";
function App() {
  const [startDeg, setStartDeg] = useState(0);
  const [deg, setDeg] = useState(startDeg);
  const [start, setStart] = useState(false);
  const handleClick = () => {
    setStart(true);
  };
  const getDeg = useCallback(() => {
    const picked = Math.floor(Math.random() * prize.length);
    const currentDeg = Number(startDeg) + 1800 + picked * 60 - (startDeg % 360)
    console.log(picked,currentDeg,startDeg % 360)
    setDeg(currentDeg);
    setStartDeg(currentDeg);
  },[startDeg]);
  useEffect(() => {
    if (start) {
      getDeg();
      setStart(false);
    }
  }, [getDeg, start]);
  return (
    <>
      <div className="container">
        <div className="wheel">
          <div className="wheel-outside">
            {/* 6個的 */}
            <WheelInner prize={prize} />
            <div className="wheel-center" onClick={handleClick}>
              <div
                className="wheel-hand"
                style={{ transform: `rotate(${deg}deg)` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
