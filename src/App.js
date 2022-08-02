import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Components/Contact";
import ContactsForm from "./Components/ContactsForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: [
        {
          name: "Fellingnton J. Colloney",
          phoneNumber: "+00xxxxxxxxxxx05",
          location: "T-Town",
        },
    
      ],
    };
  }

  addContact = (user) => {
    this.setState({
      contact: [...this.state.contact, user]
    })
  }

  render() {
    return (
      <Container style={{ marginTop: "10rem", marginRight: "125px", position: "relative", left: "200px"}}>
        <Row>
          <Col md="4">
            <ContactsForm newContact={this.addContact}/>
          </Col>
          <Col>
            <Contact addContact={this.state.contact} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
