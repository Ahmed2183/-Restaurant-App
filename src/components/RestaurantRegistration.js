import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap"; //using bootstrap
import RestaurantNavbar from "./RestaurantNavbar";

class RestaurantRegistration extends Component {

   constructor()
   {
       super()
       this.state =
       {
           name:null,
           password:null
       }
   }

   
    registration() //Add New Data
    {
        fetch('http://localhost:3000/login', {
        method: "POST",  //-->Define which method used POST is for add data
        headers: {       //-->In headers we define which type of our content so our content is json type
            'Content-Type':'application/json'
        },
        body: JSON.stringify(this.state) //body ko stringify krkay bhjna hota ha ismai state ka data pass krtay hai
        }).then((response)=>{
            response.json().then((result)=>{
                alert("User Has Been Added")
            })
        })
    }


    render() {
        return (
            <Container>
                <RestaurantNavbar/>
            <Row className="justify-content-center">
              <Col sm={6}>
                <br></br>
                <br></br>
                <h1>SignUp Page</h1>
                <br></br>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  onChange={(event) => {this.setState({name:event.target.value})}}
                />
                <br></br>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  onChange={(event) => {this.setState({password:event.target.value})}}
                />
                <br></br>
                <Button variant="secondary" size="lg" onClick={()=>{this.registration()}}>
                  Register
                </Button>
              </Col>
            </Row>
          </Container>
        );
    }
}

export default RestaurantRegistration;