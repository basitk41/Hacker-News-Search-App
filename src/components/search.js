import React, { useState } from "react";
import { connect } from "react-redux";
import * as ActionsCreator from "../store/actions/index";
import axios from "axios";
import Spinner from "./UI/spinner";
import Card from "./UI/card";
const Search = ({
  updateHistory,
  updateSearch,
  searchResult,
  inputField,
  updateInput,
}) => {
  const [loading, setLoading] = useState(false);
  const searchHandler = () => {
    setLoading(true);
    axios
      .get(
        `https://hn.algolia.com/api/v1/search?query=${inputField}&tags=story`
      )
      .then((response) => {
        updateSearch(response.data.hits);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Something went wrong!");
        console.log(error);
      });
    updateHistory(inputField);
  };
  return (
    <div>
      <h3 style={{ textAlign: "center", color: "blue" }}>Search</h3>
      <div className="container">
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateHistory: (item) => dispatch(ActionsCreator.updatedHistory(item)),
    updateSearch: (search) => dispatch(ActionsCreator.updatedSearch(search)),
    updateInput: (input) => dispatch(ActionsCreator.updateInput(input)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
