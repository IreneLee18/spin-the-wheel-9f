import WheelInner from "./Components/WheelInner";
import Loading from "./Components/Loading";
import { useState, useEffect, useCallback } from "react";
function Wheel({ prize }) {
  const [isLoading, setIsLading] = useState(true);
  const [startDeg, setStartDeg] = useState(0);
  const [deg, setDeg] = useState(startDeg);
  const [start, setStart] = useState(false);
  const handleClick = () => {
    setStart(true);
  };
  const getDeg = useCallback(() => {
    const picked = Math.floor(Math.random() * prize.length);
    const currentDeg =
      Number(startDeg) +
      1800 +
      picked * (360 / prize.length) -
      (startDeg % 360);
    setDeg(currentDeg);
    setStartDeg(currentDeg);
  }, [prize.length, startDeg]);

  useEffect(() => {
    if (start) {
      getDeg();
      setStart(false);
    }
  }, [getDeg, start]);

  // init
  useEffect(() => {
    setIsLading(true);
    setStartDeg(0);
    setDeg(0);
    setTimeout(() => {
      setIsLading(false);
    }, [2000]);
  }, [prize.length]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="container">
            <div className="wheel">
              <div className="wheel-outside">
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
          <div className="result-banner">
            <p className="wheel-done">
              WELL
              <br />
              DONE!
            </p>
            <p className="you-get-a-free">YOU GET A FREE...</p>
            <p className="result-title">Child!</p>
          </div>
        </>
      )}
    </>
  );
}

export default Wheel;
