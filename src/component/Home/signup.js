import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Signup extends React.Component {
  render() {
    return (
      <Form>
              <FormGroup row>
          <Label for="FirstName" sm={2}>First Name</Label>
          <Col sm={10}>
            <Input type="text" name="FirstName" id="FirstName" placeholder="First Name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="LastName" sm={2}>Last Name</Label>
          <Col sm={10}>
            <Input type="text" name="LastName" id="LastName" placeholder="Last Name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Email" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="Email" id="Email" placeholder="Enter Your Email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Password" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="Password" id="Password" placeholder="Password" />
          </Col>
        </FormGroup>
      
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="primary">Signup</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
export default Signup;