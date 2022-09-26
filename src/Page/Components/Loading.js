import PacmanLoader from "react-spinners/PacmanLoader";
const css = {
  borderColor: `rgb(240, 190, 255)`,
  top: "50px",
  left: "22px",
  borderWidth: "10px",
};
function Loading() {
  return (
    <>
      <div
        style={{ position: "relative", height: "calc(100vh - 80px - 84.5px)" }}
      >
        <PacmanLoader size={20} color={"#FF00BA"} cssOverride={css} />
      </div>
    </>
  );
}
export default Loading;
