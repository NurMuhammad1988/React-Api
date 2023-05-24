import { FormGroup, Form, Label, Input, Button, Col, Row, } from 'reactstrap'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

function Update() {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [id, setID] = useState(null);


  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('First Name'))
    setLastName(localStorage.getItem('Last Name'))
    setCheckbox(localStorage.getItem('Checkbox value'))

  }, []);

  const updateAPIData = () => {
    axios.put(`https://646cc3977b42c06c3b2bf95f.mockapi.io/users/${id}`, {

      firstName,
      lastName,
      checkbox

    })
  }

  return (
    <div>

      <Row className='flex-wrap'>
        <Form>
          <Row className="row-cols-lg-auto g-3 align-items-center p-5">
            <Col className='col-xxl-12  col-xl-12 col-lg-12 col-md-12 col-12 '>
              <Label
                className=""
                for="exampleEmail"
              >
                First Name
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="FirstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Label>

            </Col>

            <Col className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 '>
              <Label>
                Last Name
                <Input
                  id='lastName'
                  name='lastName'
                  placeholder="Last Name"
                  type='text'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Label>


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
                <Link to="/read"> <button type='submit' onClick={updateAPIData}>Submit </button></Link>
                  Remember Me
                </Label>
              </FormGroup>
            </Col>



            <Col className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12  '>

              <Button className='btn btn-danger  w-50' type='submit'>Update</Button>


            </Col>
          </Row>
        </Form>
      </Row>

    </div>
  )
}

export default Update;