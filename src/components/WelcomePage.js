import React from 'react';
import { Button, Form } from 'react-bootstrap'

const WelcomePage = () => {
    return (
      <div>
        <h1>Welcome</h1><br/>
        <Form>
          <Form.Group>
            <Form.Label>Enter your code</Form.Label>
            <Form.Control size="lg" placeholder="#code"/>
          </Form.Group>
        <Button variant="primary" type="submit">Join</Button>
        </Form>
      </div>
    );
};

export default WelcomePage;
