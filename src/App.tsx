import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import PropTypes from "prop-types";
import AddToDo from "./containers/AddToDo";
import ToDoListContainer from "./containers/ToDoListContainer";
class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <AddToDo />
            <ToDoListContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
