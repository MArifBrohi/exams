import React from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap'
const Contact = () => {
    return (
        <>
            <h1 className='text-center align-items-center color-blue'>Request CallBack</h1>

            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>



                    </Col>
                </Row>


                <Row>

                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mobile No</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Col>

                    <Col>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Looking to invest</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Col>
                </Row>




                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I authorize est asd iojhasdn  aishdasd ihasd" />
                </Form.Group>
                <Button className='text-center' variant="danger" type="submit" >
                    Request CallBack
                </Button>
            </Form>


        </>
    );
}

export default Contact;
