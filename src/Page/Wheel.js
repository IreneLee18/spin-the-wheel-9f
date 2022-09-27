import WheelInner from "./WheelComponents/WheelInner";
import Loading from "./Component/Loading";
import ResultPrizeIcon from "./ResultComponent/ResultPrizeIcon";
import { useState, useEffect, useCallback, useRef } from "react";
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

  // prize probability
  const prizeProbability = useRef([]);
  useEffect(() => {
    const probability = [];
    prize.forEach((item, index) => {
      for (let i = 0; i < item.prize; i++) {
        probability.push(index);
      }
    });
    prizeProbability.current = probability;
  }, [prize]);

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
    if (prizeProbability.current.length === 0) return alert("獎項已抽完！");
    // 1.宣告 probability 賦予 prizeProbability.current
    const probability = prizeProbability.current;
    // 2.宣告 索引值 賦予 隨機數字(範圍：跟prizeProbability長度一樣的數字)
    const index = Math.floor(Math.random() * probability.length);
    // 3.宣告 picked 賦予 probability[索引值]
    const picked = probability[index];
    // 4.刪除 probability 中 picked 選到的索引值 ＝ 刪除 probability 的 索引值
    probability.splice(index, 1);
    // 5.將 probability 的最終資料傳給 prizeProbability.current，這樣每次取得 prizeProbability.current 的資料才會是最新的
    prizeProbability.current = probability;
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
  }, [getFree, prizeData.length, prizeProbability, startDeg]);

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
