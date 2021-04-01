import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default function InputForm(props) {
  return (
    <div>
      <InputGroup className="mb-3">
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Task type"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Regular</Dropdown.Item>
          <Dropdown.Item href="#">Important</Dropdown.Item>
          <Dropdown.Item href="#">Urgent</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Important and Urgent</Dropdown.Item>
        </DropdownButton>
        <FormControl aria-describedby="basic-addon1" />
      </InputGroup>

      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>Descrpition</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl as="textarea" aria-label="With textarea" />
      </InputGroup>
    </div>
  );
}
