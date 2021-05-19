import React from "react";
const Spinner = () => {
  return (
    <div class="text-center">
      <div
        class="spinner-grow text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
