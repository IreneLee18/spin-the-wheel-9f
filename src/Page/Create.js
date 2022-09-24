import { Link, Outlet } from "react-router-dom";
function Create() {
  return (
    <>
      <div className="link-group edit-link-group">
        <Link to="/create">6個獎項</Link>
        <Link to="/create/prize20">20個獎項</Link>
      </div>
      <Outlet  />
    </>
  );
}

export default Create;
