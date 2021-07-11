import React, { RefAttributes } from "react";
import { connect } from "react-redux";
import { addToDo } from "../actions";
import { Button, Form, InputGroup } from "react-bootstrap";

let AddToDo = ({ dispatch }) => {
  let input;

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(input.value);
        if (!input.value.trim()) {
          return;
        }
        dispatch(addToDo(input.value));
        input.value = "";
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Enter an item"
            ref={(node) => {
              input = node;
            }}
          />
          <InputGroup.Append>
            <Button type="submit">Add To-Do</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};
export default connect()(AddToDo);
