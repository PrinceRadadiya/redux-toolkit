import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Style.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { removeuser } from "../Redux-Toolkit/Store/Slices/UserSlices";

const Displayuser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });

  const onedataRemove = (index) => {
    dispatch(removeuser(index));
  };

  return (
    <>
      <div>
        {data.map((user, index) => {
          return (
            <div className="mainnnn" key={index}>
              <li className="list">
                {user}
                <RiDeleteBin5Line
                  className="pointer"
                  onClick={() => onedataRemove(index)}
                />
              </li>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Displayuser;
