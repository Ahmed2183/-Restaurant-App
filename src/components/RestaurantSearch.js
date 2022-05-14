import React, { Component } from "react";
import { Fragment } from "react"; //For Spaces
import { Table,Container,Form } from "react-bootstrap"; //using bootstrap
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'; //For Routing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //For FontAwsomeIcon
import { faMarker,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import RestaurantNavbar from "./RestaurantNavbar";

class RestaurantSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      noData:false,
      lastSearch:"" //iska andr state ka saara data paara raaha ga
    };
  }

  search(key) //For Search Data use ?q= in fetch url
  {
      this.setState({lastSearch:key}) //update lastSearch state
    fetch("http://localhost:3000/restaurant?q=" + key).then((response) => {
      response.json().then((result) => {
          if(result.length>0)
          {
            this.setState({ searchData: result, noData:false }); //when if condition true then only data show not show Data not found
          }
          else
          {
            this.setState({ noData:true,searchData:null}); //when if condition false then only show Data not found mot show data
          }
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
              this.search(this.state.lastSearch); //Refresh Search Page List
          })
      })
  }

  render() {
    const space = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment> //For Spaces
    return (
      <Container>
        <RestaurantNavbar/>
        <h1 className="text">Restaurant Search</h1>
        <br></br>
        <Form.Control type="text" placeholder="Search.." 
        onChange={(event) => this.search(event.target.value)}/>
        <div>
          {this.state.searchData ? (   // ? means print
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
              {
              this.state.searchData.map((item,index) => ( 
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
          ) :  ""
          }
          {
              this.state.noData ? 
              <h3>No Data Found</h3>
              : null
          }
        </div>
      </Container>
    );
  }
}

export default RestaurantSearch;
