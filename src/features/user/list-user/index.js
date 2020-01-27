import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListUsers } from "./ressources/actions";
export default () => {
  const dispatch = useDispatch();
  const { isLoading, list } = useSelector(state => state.users);
  useEffect(() => {
    dispatch(getListUsers());
  }, []);

  return (
    <>
      list users
      <br />
      {isLoading
        ? "isLoading"
        : list.map((item, index) => (
            <div key={index}>
              {item.email}:{item.last_name}
            </div>
          ))}
    </>
  );
};
