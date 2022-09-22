function Prize6Inner({ data }) {
  return (
    <div className="wheel-item-title">
      <span className={`${data.class} wheel-item-icons`}>{data.title}</span>
      <div className="wheel-item-id">{data.id}</div>
    </div>
  );
}
export default Prize6Inner;
