import React from "react";
import "./Style.css";
import { fackuserdata } from "../Api/Api";
import { useDispatch } from "react-redux";
import { adduser ,removeuser,clearall} from "../Redux-Toolkit/Store/Slices/UserSlices";
import Displayuser from "./Displayuser";

const Home = () => {
  const dispatch = useDispatch();

  const adddata = (ppp) => {
    dispatch(adduser(ppp));
    console.log(ppp);
  };
  const onedata = (ppp) =>{
    dispatch(removeuser(ppp))
  }
  
  const alldataremove = () =>{
    dispatch(clearall())
  }
  return (
    <div className="Header">
      <div className="box">
        <div className="pti">
          <p>List for Add user remove user and delete user</p>
        </div>

        <div className="bottom">
          <button className="last" onClick={() => adddata(fackuserdata())}>
            Add data
          </button>
          <button className="last" onClick={() => removeuser(onedata())}>
            Delete
          </button>
          <button className="last" onClick={alldataremove}>Remove all</button>
        </div>
        <div className="newd">
          <Displayuser />
        </div>
      </div>
    </div>
  );
};

export default Home;
