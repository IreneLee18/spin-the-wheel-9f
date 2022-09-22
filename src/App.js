import { Routes, Route, Link } from "react-router-dom";
import Wheel from "./Page/Wheel";
import Edit from "./Page/Edit";
import prize6 from "./Utils/Prize6.json";
import prize20 from "./Utils/Prize20.json";
function App() {
  const data = ["Prize6", "Prize20", "Edit"];

  return (
    <>
      <div className="link-group">
        {data.map((item) => (
          <Link key={item} id={item} to={item === "Prize6" ? "/" : item}>
            {item}
          </Link>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<Wheel prize={prize6} />} />
        <Route path="prize20" element={<Wheel prize={prize20} />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
