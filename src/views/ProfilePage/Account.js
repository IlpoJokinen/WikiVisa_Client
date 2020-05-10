import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { ArrowClockwise, CloudUpload } from 'react-bootstrap-icons'

const Account = () => {

    return (
        <Container style={{backgroundColor: '#fcfcfc'}}>
            <Row>
                <Form>
                    <Col>
                        <Row>
                            <Col>
                                <Form.Group controlId='formGroupFirstName'>
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control type='text' placeholder='First name'></Form.Control>
                                </Form.Group>
                                <Form.Group controlId='formGroupLastName'>
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type='text' placeholder='Last name'></Form.Control>
                                </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Gender</Form.Label>
                                            <Form.Check
                                                type="radio"
                                                label="Male"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Female"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Other"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios3"
                                            />
                                    </Form.Group>
                                <Form.Group controlId='formGroupGamertag'>
                                    <Form.Label>Gamertag</Form.Label>
                                    <Form.Control type='text' placeholder='Gamertag'></Form.Control>
                                    <Form.Text className='text-muted'>By this name you will appear to others</Form.Text>
                                </Form.Group>
                                <Row xs={4} md={8} lg={12}>
                                    <Col>
                                        <Form.Group>
                                            <Button className='btn btn-success' type='submit'><CloudUpload/>Save</Button>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Button className='btn btn-secondary' type='reset'><ArrowClockwise/>Reset</Button>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Form>
            </Row>
        </Container>
    )
}
export default Account