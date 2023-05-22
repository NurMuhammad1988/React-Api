// import React from 'react'
import { FormGroup, Form, Label, Input, Button, Col, Row,  } from 'reactstrap'
import React, { useState } from 'react';
import axios from 'axios'

export default function Create() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = () => {
        axios.post(`https://646bb15b7d3c1cae4ce4298b.mockapi.io/react-crud/users`, {firstName, lastName, checkbox})
}


    return (
        <Row className='flex-wrap'>
            <Form>
                <Row className="row-cols-lg-auto g-3 align-items-center p-5">
                    <Col className='col-xxl-12  col-xl-12 col-lg-12 col-md-12 col-12 '>
                        <Label
                            className=""
                            for="exampleEmail"
                        >
                            Email
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="something@idk.cool"
                            type="email"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Col>
                    <Col className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 '>
                        <Label
                            className=""
                            for="examplePassword"
                        >
                            Password
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="don't tell!"
                            type="password"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Col>
                    <Col className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12  '>
                        <FormGroup check>
                            <Input
                                id="exampleCheckbox"
                                name="checkbox"
                                type="checkbox"
                                onChange={(e) => setCheckbox(!checkbox)}
                            />
                            <Label
                                check
                                for="exampleCheckbox"
                            >
                                Remember Me
                            </Label>
                        </FormGroup>
                    </Col>

                  

                    <Col className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12  '>

                    <Button className='btn btn-danger  w-100' onClick={postData}>Submit</Button>

                        
                    </Col>
                </Row>
            </Form>
        </Row>
    )
}
