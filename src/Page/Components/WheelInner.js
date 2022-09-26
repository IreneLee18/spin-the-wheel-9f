import PrizeInner from "./PrizeInner";
function WheelInner({ prize }) {
  const prizeLength = prize.length;
  return (
    <>
      <ul
        className="wheel-inner"
        style={
          prizeLength === 6
            ? { transform: "rotate(-30deg)" }
            : { transform: "rotate(-9deg)" }
        }
      >
        {prize.map((item, index) => (
          <li
            className={`wheel-item ${
              prizeLength === 6
                ? `wheel-item-6-${index + 1}`
                : `wheel-item-20-${index + 1}`
            } `}
            key={item.id}
            id={item.id}
          >
            <PrizeInner data={item} length={prize.length} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default WheelInner;
