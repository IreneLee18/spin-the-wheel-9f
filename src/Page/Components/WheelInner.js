import Prize6Inner from "./Prize6Inner";
import Prize20Inner from "./Prize20Inner";
function WheelInner({ prize }) {
  const prizeLength = prize.length;
  return (
    <>
      <ul className="wheel-inner">
        {prize.map((item) => (
          <li
            className="wheel-item"
            key={item.id}
            id={item.id}
            style={{ transform: item.style }}
          >
            {prizeLength === 6 ? (
              <Prize6Inner data={item} />
            ) : (
              <Prize20Inner data={item} />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default WheelInner;
