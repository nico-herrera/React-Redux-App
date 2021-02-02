import React from "react";
import { connect } from "react-redux";

import { getFact } from "../actions";

const CatFacts = ({ fact, isFetching, error, ...props }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    props.getFact();
  };
  if (isFetching) {
    return <h3>Contacting Cat Fact Headquarters...</h3>;
  }
  console.log(fact);
  return (
    <React.Fragment>
      <h2>
        Your amazing Cat Fact:
        {fact.map((item) => {
          return <p>{item.text}</p>;
        })}
      </h2>
      {error && (
        <div>
          <h2 style={{ color: "red" }}>We got an error: {error}</h2>
        </div>
      )}
      <button onClick={clickHandler}>New Cat Fact</button>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { fact: state.fact, isFetching: state.isFetching, error: state.error };
};

export default connect(mapStateToProps, { getFact })(CatFacts);
