import React from "react";
import Button from "react-bootstrap/Button";

export default function ButtonVar(props) {
    return <Button variant={props.variant}>{props.buttonText}</Button>;
}
