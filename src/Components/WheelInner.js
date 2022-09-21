function WheelInner({ prize }) {
  const data = prize;
  
  return (
    <>
      <ul className="wheel-inner">
        {data.map((item) => (
          <li
            className="wheel-item"
            key={item.id}
            id={item.id}
            style={{ transform: item.style }}
          >
            <div className="wheel-item-title">
              <span className={`${item.class} wheel-item-icons`}>
                {item.title}
              </span>
              <div className="wheel-item-id">{item.id}</div>
              {/* <div className="wheel-item-id">({item.prize})</div> */}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default WheelInner;
