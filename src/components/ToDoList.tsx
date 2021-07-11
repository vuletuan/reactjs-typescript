import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import Jumbotron from "react-bootstrap/Jumbotron";
import ToDo from "./ToDo";
import { loadToDoList } from "../actions/index";
import { useDispatch } from "react-redux";

const ToDoList = function ({ toDoList = [] }) {
  const dispatch = useDispatch();
  dispatch(loadToDoList());

  return (
    <Jumbotron>
      <ListGroup>
        {toDoList.map((toDo, index) => (
          <ToDo key={index} {...toDo} />
        ))}
      </ListGroup>
    </Jumbotron>
  );
};

ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default ToDoList;