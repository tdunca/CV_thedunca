import React from "react";

const Button = props => {
	return <button className={"btn-" + props.theme} onClick={props.onClick}>{props.children}</button>;
};

export default Button;
