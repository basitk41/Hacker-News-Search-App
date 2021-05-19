import React from "react";
import parse from "html-react-parser";
const Card = ({ item }) => {
  return (
    <div className="card" style={{ marginBottom: "8px" }}>
      <h5 className="card-header">
        {parse(item._highlightResult.title.value)}
      </h5>
      <div className="card-body">
        <p className="card-text">
          Author: <em>{item.author}</em>
        </p>
        <p className="card-text">Tags: {item._tags.map((tag) => `${tag}, `)}</p>
        <a
          href={item.url}
          rel="noreferrer"
          target="_blank"
          className="btn btn-primary"
        >
          Go to official website
        </a>
      </div>
    </div>
  );
};

export default Card;
