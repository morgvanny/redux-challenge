import React from "react";
import { connect } from "react-redux";

function Name({ name, setName }) {
  return (
    <div>
      <p>{name}</p>
      <input name="name" onChange={setName} value={name} />
    </div>
  );
}

const setName = (e) => {
  return { type: "SET_NAME", payload: e.target.value };
};

export default connect(
  (state) => {
    return { name: state.name };
  },
  { setName }
)(Name);
