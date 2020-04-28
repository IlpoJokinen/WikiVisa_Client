import React, { useState } from 'react'
import { Container, Row, Col, Image, ListGroup, Tab, Form } from 'react-bootstrap'
import Stats from './Stats'
import Settings from './Settings'
import Account from './Account'
import Preferences from './Preferences'

const ProfileScreen = () => {

    const [move, setMove] = useState(false)

    return (
        <Container>
            <Row>
                <Col><h1>Gamertag</h1></Col>
            </Row>
            <Row>
                <Row>
                    <Col>
                        <Image src='http://ssl.gstatic.com/accounts/ui/avatar_2x.png' roundedCircle thumbnail/>
                        {!move ?
                            <Form >
                                <Form.File id='custom-file' label='Select a profile picture' custom />
                            </Form>
                            : null
                        }
                    </Col>
                </Row>
                <Tab.Container defaultActiveKey="#account">
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <ListGroup horizontal>
                                        <ListGroup.Item action href='#account' onClick={() => setMove(false)}>Account</ListGroup.Item>
                                        <ListGroup.Item action href='#stats'onClick={() => setMove(true)}>Stats</ListGroup.Item>
                                        <ListGroup.Item action href='#settings'onClick={() => setMove(true)}>Settings</ListGroup.Item>
                                        <ListGroup.Item action href='#preferences'onClick={() => setMove(true)}>Preferences</ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Tab.Content>
                                        <Tab.Pane eventKey='#account'>
                                            <Account />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='#stats'>
                                            <Stats />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='#settings'>
                                            <Settings />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='#preferences'>
                                            <Preferences />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Tab.Container>
            </Row>
        </Container>
    )
}
export default ProfileScreen