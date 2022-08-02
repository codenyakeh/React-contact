import React, { Component } from "react";
import { Card, Button, Container, Row, Col} from "react-bootstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.addContact.map((item, index) => {
          return (
            <Container>
              <Row>
                <Col md="4">
                  <Card
                    style={{marginLeft: "121px", height: "30vh", paddingTop: "35px", width: "18rem", marginBottom: "20px", borderColor: "pink",}}
                    key={index}
                  >
                    <Card.Body>
                      <Card.Title>Contact Form</Card.Title>
                      <h6>Name: {item.name}</h6>
                      <h6>Phone Number: {item.phoneNumber}</h6>
                      <h6>Location: {item.location}</h6>
                      <Button style={{ marginRight: "6rem", background: "pink", borderColor: "pink"}}>
                        EDIT
                      </Button>
                      <Button style={{background: "pink", borderColor: "pink"}}>DELETE</Button>{" "}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          );
        })}
      </div>
    );
  }
}

export default Contact;
