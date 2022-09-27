import WheelInner from "./WheelComponents/WheelInner";
import Loading from "./Component/Loading";
import ResultPrizeIcon from "./ResultComponent/ResultPrizeIcon";
import { useState, useEffect, useCallback } from "react";
function Wheel({ prize }) {
  const [isLoading, setIsLading] = useState(true);
  const [prizeData, setPrizeData] = useState(prize);
  const [startDeg, setStartDeg] = useState(0);
  const [deg, setDeg] = useState(startDeg);
  // start picked prize.
  const [start, setStart] = useState(false);
  // if "Start picked prize" is start, can't press start button.
  const [isStart, setIsStart] = useState(false);
  const [freePrize, setFreePrize] = useState("");
  const [freePrizeIcon, setFreePrizeIcon] = useState([]);
  const [showFreePrize, setShowFreePrize] = useState(false);
  const handleClick = () => {
    if (!isStart) {
      setStart(true);
      setIsStart(true);
    }
  };

  const getFree = useCallback(
    (picked) => {
      setShowFreePrize(true);
      prizeData.forEach((item, index) => {
        if (index === picked) {
          setFreePrize(item.id);
          setFreePrizeIcon([item.class, item.title]);
        }
      });
      // 要修改prize數量寫法：首先先取出原本的state，接著原本state用map去修改資料，若陣列=目前取得值，就將prize-1；不是就回傳原本的資料。
      setPrizeData((state) =>
        state.map((item, index) =>
          index === picked ? { ...item, prize: item.prize - 1 } : item
        )
      );
    },
    [prizeData]
  );

  const getDeg = useCallback(() => {
    let picked = Math.floor(Math.random() * prizeData.length);
    const currentDeg =
      Number(startDeg) +
      1800 +
      picked * (360 / prizeData.length) -
      (startDeg % 360);
    setDeg(currentDeg);
    setStartDeg(currentDeg);

    // setTimeout--4s: when transition was done then call getFree function.
    setTimeout(() => {
      getFree(picked);
      setIsStart(false);
    }, [4000]);
  }, [getFree, prizeData.length, startDeg]);

  // render getDeg
  useEffect(() => {
    if (start) {
      getDeg();
      setShowFreePrize(false);
      setStart(false);
    }
  }, [getDeg, start]);

  // init: when「prize.length」was change.
  useEffect(() => {
    setIsLading(true);
    setStartDeg(0);
    setDeg(0);
    setFreePrize("");
    setShowFreePrize(false);
    setPrizeData(prize);
    // 因為需要時間回轉回去0，但為了防止畫面感官不好所以設定setTimeout，等時間到再顯示畫面
    setTimeout(() => {
      setIsLading(false);
    }, [2000]);
  }, [prize, prize.length]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="container">
            <div className="wheel">
              <div className="wheel-outside">
                <WheelInner prize={prizeData} />
                <div
                  className={`wheel-center ${!isStart ? `point` : "no-drop"}`}
                  onClick={handleClick}
                >
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
              <ul className="result-icon">
                {prize.length === 6 ? (
                  <ResultPrizeIcon prizeIcon={freePrizeIcon} />
                ) : (
                  <ResultPrizeIcon prizeIcon={freePrize} />
                )}
              </ul>
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
