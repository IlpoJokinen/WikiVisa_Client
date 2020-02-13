import React from 'react';
import { Button, Form } from 'react-bootstrap'

const WelcomePage = () => {
    return (
      <div>
        <h1>Welcome</h1><br/>
        <Form>
          <Form.Group>
            <Form.Label>Enter room code <sup>*</sup></Form.Label>
            <Form.Control size="lg" placeholder="Enter room code"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter your gamertag</Form.Label>
            <Form.Control size="lg" placeholder="Enter your gamertag"/>
          </Form.Group>
        <Button variant="primary" type="submit" href="/start">Join</Button>
        </Form>
      </div>
    );
};

export default WelcomePage;
