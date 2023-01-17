import React from "react";

const ViewBudget = (props) => {
  return (
    <>
      <span>
        <strong>INCOME : Rs. {props.budget}</strong>
      </span>
      <button
        type="button"
        className="btn btn-primary align-content-lg-end"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
