function Prize20Inner({ data, length }) {
  return (
    <>
      <div
        className="wheel-item-title"
        style={
          length === 6
            ? { transform: "rotate(30deg)", paddingRight: "40px" }
            : { transform: `rotate(8deg)` }
        }
      >
        {length === 6 ? (
          <p className={`${data.class} wheel-item-icons`}>{data.title}</p>
        ) : null}
        <p className="wheel-item-id">{data.id}</p>
        {length === 6 ? null : <p className="wheel-item-id">({data.prize})</p>}
      </div>
    </>
  );
}
export default Prize20Inner;
