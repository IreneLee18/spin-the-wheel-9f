import { Routes, Route, Link } from "react-router-dom";
import Wheel from "./Page/Wheel";
import Create from "./Page/Create";
import Edit6 from './Page/Components/Edit6'
import Edit20 from './Page/Components/Edit20'
import prize6 from "./Utils/Prize6.json";
import prize20 from "./Utils/Prize20.json";
function App() {
  const data = ["Prize6", "Prize20", "Create"];
  // const [create, setCreate] = useState(false);
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
        <Route path="/" element={<Wheel prize={prize6} />} />
        <Route path="prize20" element={<Wheel prize={prize20} />} />
        <Route path="create" element={<Create />}>
          <Route index element={<Edit6/>}/>
          <Route path="prize20" element={<Edit20/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
