import React from "react";
import clsx from "clsx";

const Button = (props) => {
    return <button {...props} className={clsx("button", props.className)} />;
};

export default Button;
