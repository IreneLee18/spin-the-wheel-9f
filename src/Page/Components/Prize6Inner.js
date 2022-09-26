function Prize6Inner({ data }) {
  return (
    <div
      className="wheel-item-title"
      style={{ transform: "rotate(30deg)", paddingRight: "40px" }}
    >
      <p className={`${data.class} wheel-item-icons`}>{data.title}</p>
      <p className="wheel-item-id">{data.id}</p>
    </div>
  );
}
export default Prize6Inner;
