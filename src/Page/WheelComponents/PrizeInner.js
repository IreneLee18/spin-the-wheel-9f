function Prize20Inner({ data, length }) {
  return (
    <>
      <div
        className={
          length === 6
            ? `wheel-item-title wheel-item-title-6`
            : `wheel-item-title`
        }
        style={
          length === 6
            ? { transform: "rotate(30deg)" }
            : { transform: `rotate(9deg)` }
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
