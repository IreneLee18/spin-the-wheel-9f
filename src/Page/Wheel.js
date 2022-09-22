import WheelInner from "./Components/WheelInner";
import Loading from "./Components/Loading";
import { useState, useEffect, useCallback } from "react";
function Wheel({ prize }) {
  const [isLoading, setIsLading] = useState(true);
  const [startDeg, setStartDeg] = useState(0);
  const [deg, setDeg] = useState(startDeg);
  const [start, setStart] = useState(false);
  const [freePrize, setFreePrize] = useState("");
  const [showFreePrize, setShowFreePrize] = useState(false);
  const handleClick = () => {
    setStart(true);
  };

  const getFree = useCallback(
    (picked) => {
      setShowFreePrize(true);
      prize.forEach((item, index) => {
        if (index === picked) return setFreePrize(item.id);
      });
    },
    [prize]
  );

  const getDeg = useCallback(() => {
    const picked = Math.floor(Math.random() * prize.length);
    const currentDeg =
      Number(startDeg) +
      1800 +
      picked * (360 / prize.length) -
      (startDeg % 360);
    setDeg(currentDeg);
    setStartDeg(currentDeg);

    // setTimeout--4s: when transition was done then call getFree function.
    setTimeout(() => {
      getFree(picked);
    }, [4000]);
  }, [getFree, prize.length, startDeg]);

  // render getDeg
  useEffect(() => {
    if (start) {
      getDeg();
      setStart(false);
      setShowFreePrize(false);
    }
  }, [getDeg, start]);

  // init: when「prize.length」was change.
  useEffect(() => {
    setIsLading(true);
    setStartDeg(0);
    setDeg(0);
    setFreePrize('')
    setShowFreePrize(false)
    // 因為需要時間回轉回去0，但為了防止畫面感官不好所以設定setTimeout，等時間到再顯示畫面
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
          {showFreePrize ? (
            <div className="result-banner">
              <p className="wheel-done">
                WELL
                <br />
                DONE!
              </p>
              <p className="you-get-a-free">YOU GET A FREE...</p>
              <p className="result-title">{freePrize}!</p>
            </div>
          ) : null}
        </>
      )}
    </>
  );
}

export default Wheel;
