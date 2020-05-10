import React from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'

const Settings = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <ListGroup variant='flush'>
                        <Row style={{alignItems: 'center'}}>
                            <Col>
                                <ListGroup.Item><b>Delete Account</b></ListGroup.Item>
                                <h6>This action will remove your account from the database and cannot be restored!</h6>
                            </Col>
                            <Col>
                                <Button variant='outline-danger'>Delete Account</Button>
                            </Col>
                        </Row>
                        <Row style={{alignItems: 'center'}}>
                            <Col>
                                <ListGroup.Item><b>Change Password</b></ListGroup.Item>
                                <h6>Please enter a strong password (for your own sake)</h6>
                            </Col>
                            <Col>
                                <Button variant='outline-danger'>Change Password</Button>
                            </Col>
                        </Row>
                        <Row style={{alignItems: 'center'}}>
                            <Col>
                                <ListGroup.Item><b>Change Email</b></ListGroup.Item>
                                <h6>We'll never share your email with anyone else</h6>
                            </Col>
                            <Col>
                                <Button variant='outline-danger'>Change Email</Button>
                            </Col>
                        </Row>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}
export default Settings