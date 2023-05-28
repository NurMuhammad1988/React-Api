import { FormGroup, Form, Label, Input, Button, Col, Row, } from 'reactstrap'
import React, { useState } from 'react';
import axios from 'axios'
// import  { useHistory } from 'react-router';

export default function Create() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    // let history = useHistory();

    const postData = () => {
        axios.post(`https://646cc3977b42c06c3b2bf95f.mockapi.io/users`, { firstName, lastName, checkbox })
            .then(() => {
                // history.push('/read')
            })
    }



    return (
        <Row className='flex-wrap'>
            <Form data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
                <Row  className="row-cols-lg-auto g-3 align-items-center p-5">
                    <Col     className='col-xxl-12  col-xl-12 col-lg-12 col-md-12 col-12 '>
                        <Label 
                        >
                            Name
                        </Label>
                        <Input
                            id="FirstName"
                            name="Firstname"
                            placeholder="First Name"
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Col>
                    <Col className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 '>
                        <Label
                        >
                            Last Name
                        </Label>
                        <Input
                             id="LastName"
                            name="Lastname"
                            placeholder="Last Name"
                            type="text"
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



                    <Col  className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12  '>

                        <Button className='btn btn-danger  w-100' onClick={postData}>Submit</Button>


                    </Col>
                </Row>
            </Form>
        </Row>
    )
}
