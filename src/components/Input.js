import React from "react";

const Input = ({ children }) => {
  console.log(
    children.name,
    children.state,
    children.valid,
    children.focus,
    children.msg,
    children.type
  );
  return (
    <>
      <div className="form-floating mb-3">
        <input
          type={children.type}
          className={
            !children.state
              ? "form-control"
              : children.valid
              ? "is-valid form-control"
              : "is-invalid form-control"
          }
          id={`floating${children.name}`}
          name={children.name}
          placeholder={children.name}
          onFocus={() => children.setFocus(true)}
          onBlur={() => children.setFocus(false)}
          onChange={(e) => {
            let value =
            children.name === "phone" 
            ? e.target.value 
            : e.target.value.replace(/^0/, "+33")
            children.setState(value)
             
          }}
        />
        <label htmlFor={`floating${children.name}`}>{children.name}</label>
      </div>
      {!children.valid && children.focus && (
        <div className="alert alert-warning" role="alert">
          {children.msg}
        </div>
      )}
    </>
  );
};

export default Input;