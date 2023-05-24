
import { Table,  } from 'semantic-ui-react'
import React, { useEffect, useState, onDelete } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Read() {

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://646cc3977b42c06c3b2bf95f.mockapi.io/users`)
            .then((response) => {
                setAPIData(response.data);
            });

    }, []);


    const getData = () => {
        axios.get(`https://646cc3977b42c06c3b2bf95f.mockapi.io/users`)
            .then((getData) => {
                setAPIData(getData.data);
            });


    };


   const onDelete= (id) => {
        axios.delete(`https://646cc3977b42c06c3b2bf95f.mockapi.io/users/${id}`)
            .then(() => {
                getData();
            })
    }

    const setData = (data) => {
        const setData = (data) => {
            let { id, firstName, lastName, checkbox } = data;
            localStorage.setItem('ID', id);
            localStorage.setItem('First Name', firstName);
            localStorage.setItem('Last Name', lastName);
            localStorage.setItem('Checkbox Value', checkbox)
    }
     }

    return (

        <div className='main'>

            <h3 >Read Component</h3>

            <div className='table'>
                <Table singleLine>

                    <Table.Body>
                        {APIData.map((data) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{data.firstName}</Table.Cell>
                                    <Table.Cell>{data.lastName}</Table.Cell>
                                    <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                   
                                    <Link to='/update'>
                                    <Table.Cell> 
                                    <button style={{ background: 'green', color: 'white', margin: '5px'  }}  onClick={() => setData (data)}>Update</button>
                                   
                                     </Table.Cell>
                                  </Link>


                                  
                                    <button style={{ background: 'red', color: 'white', margin: '5px' }} onClick={() => onDelete(data.id)} >Delete</button>


                                </Table.Row>
                            )
                        })}
                    </Table.Body>


                    {/*<Table.Body>
                        <Table.Row>
                            <Table.Cell >First Name</Table.Cell>
                            <Table.Cell>Last Name</Table.Cell>
                            <Table.Cell>Chacked</Table.Cell>
                        </Table.Row>
                    </Table.Body>*/}

                    <Table.Body style={{ color: 'red' }}>
                        <Table.Row >
                            <Table.Cell >Nishant</Table.Cell>
                            <Table.Cell>Kumar</Table.Cell>
                            <Table.Cell>Chacked</Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table>
            </div>


        </div>


    )
}

