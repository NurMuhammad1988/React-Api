// import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';


// export default class UserList extends Component {

//     state = { users: [] }

//     // componentDidMount() {
//     //     this.getUserFormList()
//     // }


//     getUserFormList = (num = 1) => {

//         const url = `https://reqres.in/api/users?page=${num}`

//         fetch(url)
//             .then(Response => Response.json())
//             .then(data => this.setState({ users: data.data }))
//             // .then(data => console.log(data))
//             .catch(err => console.log(err))
//     }

//     render() {


//         const { users } = this.state;

//         return (
//             <div>

//                 <h1>UserList</h1>
//                 <button onClick={this.getUserFormList} className='btn btn-primary'>Get UsersList</button>

//                 <ul className='bg-warning text-decoration-none list-unstyled d-flex justify-content-around flex-wrap '>

//                     {
//                         users.map(item => {
//                             return (
//                                 <li className='container col-xl-4 m-2 flex-wrap' key={item.id}>

//                                     <img src={item.avatar} alt={item.first_name} />

//                                     - {`${item.first_name} ${item.last_name}`}

//                                 </li>
//                             )
//                         })
//                     }

//                 </ul>

//                 <button className='btn btn-warning col-xxl-1 m-2' onClick={() => this.getUserFormList(1)}>Page1</button>
//                 <button className='btn btn-danger col-xxl-1 m-2' onClick={() => this.getUserFormList(2)}>Page2</button>


//             </div >
//         )
//     }
// }
