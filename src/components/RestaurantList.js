import React, { Component } from "react";
import { Fragment } from "react"; //For Spaces
import { Table } from "react-bootstrap"; //using bootstrap
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'; //For Routing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //For FontAwsomeIcon
import { faMarker,faTrashCan } from '@fortawesome/free-solid-svg-icons'; //fa means FontAwsome and coffee and marker is item name
import RestaurantNavbar from "./RestaurantNavbar";

class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() { //For Call API Data
    this.getlistdata();
  }

  getlistdata() //For Call API Data
  {
    fetch("http://localhost:3000/restaurant").then((response) => {
      response.json().then((result) => {
        this.setState({ list: result });
      });
    });
  }

  delete(id)
  {
    fetch("http://localhost:3000/restaurant/"+id,
    {
      method: "DELETE",  //-->Define which method used DELETE is for delete data
      // headers: {       //-->In headers we define which type of our content so our content is json type and Accept means which data we accept
      //   'Accept':'application/json',
      //   'Content-Type':'application/json'
      // },
      }).then((response)=>{
          response.json().then((result)=>{
              alert("Restaurant Has Been Deleted")
              this.getlistdata(); //Refresh List
          })
      })
  }

  render() {
    const space = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment> //For Spaces
    return (
      <div>
        <RestaurantNavbar/>
        <h1 className='text'>Restaurant List</h1>
        {this.state.list ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr className='text'>
                  <th>Index</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Rating</th>
                  <th>Address</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, index) => (
                    //Comment out code is without using bootstrap
                //   <div className='list' key={index}>
                //       <span className='span'>{index}</span>
                //       <span className='span'>{item.name}</span>
                //       <span className='span'>{item.email}</span>
                //       <span className='span'>{item.rating}</span>
                //       <span className='span'>{item.address}</span>
                //   </div>
                  <tr key={index} className='text'>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.rating}</td>
                    <td>{item.address}</td>
                    <td><Link to={"/update/"+item.id}>{/*-->Get id like this http://localhost:3001/update/1*/}
                    <FontAwesomeIcon icon={faMarker} color="#3d85c6"/></Link>
                    {space}
                     <span onClick={()=>{this.delete(item.id)}}> 
                    <FontAwesomeIcon icon={faTrashCan} color="red" style={{ cursor: "pointer" }}/></span></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Please Wait....</p>
        )}
      </div>
    );
  }
}

export default RestaurantList;
