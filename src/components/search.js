import React from "react";
import { connect } from "react-redux";
import * as ActionsCreator from "../store/actions/index";
import Spinner from "./UI/spinner";
import Card from "./UI/card";
const Search = ({
  updateHistory,
  initSearch,
  searchResult,
  inputField,
  updateInput,
  loading,
}) => {
  const searchHandler = () => {
    initSearch(inputField);
    updateHistory(inputField);
  };
  return (
    <div>
      <h3 style={{ textAlign: "center", color: "blue" }}>Search</h3>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Hacker News Search"
                value={inputField}
                onChange={(e) => updateInput(e.target.value)}
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={searchHandler}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        {loading ? (
          <Spinner />
        ) : (
          searchResult.map((item) => {
            return <Card item={item} />;
          })
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    searchResult: state.search.search,
    inputField: state.search.input,
    loading: state.search.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateHistory: (item) => dispatch(ActionsCreator.updatedHistory(item)),
    initSearch: (search) => dispatch(ActionsCreator.initSearch(search)),
    updateInput: (input) => dispatch(ActionsCreator.updateInput(input)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
