import React from "react";

//This component uses props as its argument. The onChange handles input changes. The children prop allows addition elements to be passed and rendered within the component
const InputField = (props) => (
  <div className="form-group">
    {props.label && <label htmlFor="input-field">{props.label}</label>}
    <input
      type={props.type}
      value={props.value}
      name={props.name}
      className={"input-" + props.theme}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
    {props.children}
  </div>
);

export default InputField;