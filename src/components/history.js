import React from "react";
import { connect } from "react-redux";
import * as ActionsCreator from "../store/actions/index";
import List from "./UI/list";
const History = ({ history, deleteHistory, clearHistory }) => {
  return (
    <div>
      <h3 style={{ textAlign: "center", color: "blue" }}>Search history</h3>
      <div className="container">
        <ul className="list-group">
          {history.length > 0 ? (
            <p style={{ textAlign: "right" }}>
              <button
                className="btn btn-info"
                style={{ width: "120px" }}
                onClick={clearHistory}
              >
                Clear history
              </button>
            </p>
          ) : (
            <p style={{ textAlign: "center" }}>No history yet.</p>
          )}
          {history.map((item, i) => {
            return <List item={item} deleteHistory={(i) => deleteHistory(i)} />;
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    history: state.history.history,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteHistory: (index) => dispatch(ActionsCreator.deleteHistory(index)),
    clearHistory: () => dispatch(ActionsCreator.clearHistory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
