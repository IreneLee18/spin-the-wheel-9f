function Prize20Inner({ data }) {
  return (
    <>
      <div className="wheel-item-title wheel-item-title-prize20">
        <div className="wheel-item-id">{data.id}</div>
        <div className="wheel-item-id">({data.prize})</div>
      </div>
    </>
  );
}
export default Prize20Inner;
