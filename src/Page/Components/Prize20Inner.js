function Prize20Inner({ data }) {
  return (
    <>
      <div
        className="wheel-item-title"
        style={{
          transform: `rotate(8deg)`,
        }}
      >
        <p className="wheel-item-id">{data.id}</p>
        <p className="wheel-item-id">({data.prize})</p>
      </div>
    </>
  );
}
export default Prize20Inner;
