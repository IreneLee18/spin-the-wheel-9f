import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Wheel from "./Page/Wheel";
import Create from "./Page/Create";
import Edit6 from "./Page/CreateComponent/Edit6";
import Edit20 from "./Page/CreateComponent/Edit20";
import prize from "./Utils/PrizeData.json";
function App() {
  const data = ["Prize6", "Prize20", "Create"];
  const [myPrize, setMyPrize] = useState([]);
  return (
    <>
      <header>
        <div className="link-group">
          {data.map((item) => (
            <Link key={item} id={item} to={item === "Prize6" ? "/" : item}>
              {item}
            </Link>
          ))}
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Wheel prize={prize[0].prize6} />} />
        <Route path="prize20" element={<Wheel prize={prize[1].prize20} />} />
        <Route path="create" element={<Create />}>
          <Route index element={<Edit6 setMyPrize={setMyPrize} />} />
          <Route path="prize20" element={<Edit20 setMyPrize={setMyPrize} />} />
          <Route path="newprize" element={<Wheel prize={myPrize} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
