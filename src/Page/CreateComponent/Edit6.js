import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EditData from "../../Utils/EditData.json";
function Edit6({setMyPrize}) {
  let navigate = useNavigate()
  const [data, setData] = useState(EditData[0].edit6);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((state) =>
      state.map((data, i) => (i === Number(id) ? { ...data, id: value } : data))
    );
  };
  const handleClick = () => {
    console.log('click')
    setMyPrize(data)
    navigate('/create/newprize')
  }
  useEffect(() => {}, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Prize Name</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <input
                  type="text"
                  placeholder="請新增獎項"
                  disabled={!item.edit}
                  value={item.id}
                  id={index}
                  onChange={handleChange}
                />
              </td>
              <td className="btn-group">
                {item.edit ? (
                  <button
                    onClick={() =>
                      setData((state) =>
                        state.map((data, i) =>
                          i === index ? { ...data, edit: false } : data
                        )
                      )
                    }
                  >
                    <span className="material-symbols-outlined done">done</span>
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      setData((state) =>
                        state.map((data, i) =>
                          i === index ? { ...data, edit: true } : data
                        )
                      )
                    }
                  >
                    <span className="material-symbols-outlined edit">edit</span>
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="edit-save-btn">
        <button onClick={handleClick}>SAVE</button>
      </div>
    </>
  );
}
export default Edit6;
