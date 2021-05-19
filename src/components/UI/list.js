import React from "react";
const List = ({ item, deleteHistory }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {item}
      <span
        className="badge bg-danger rounded-pill"
        style={{ cursor: "pointer" }}
        onClick={deleteHistory}
      >
        X
      </span>
    </li>
  );
};

export default List;
