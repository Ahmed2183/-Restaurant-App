import React, { Component } from "react";
import { Form, Container, Row, Col, Card,Button } from "react-bootstrap"; //using bootstrap
import RestaurantNavbar from "./RestaurantNavbar";


class RestaurantCreate extends Component {
    constructor()
    {
        super();
        this.state =
        {
            name:null,
            address:null,
            rating:null,
            email:null
        }
    }
    create() //Add New Data
    {
        fetch('http://localhost:3000/restaurant', {
        method: "POST",  //-->Define which method used POST is for add data
        headers: {       //-->In headers we define which type of our content so our content is json type
            'Content-Type':'application/json'
        },
        body: JSON.stringify(this.state) //body ko stringify krkay bhjna hota ha ismai state ka data pass krtay hai
        }).then((response)=>{
            response.json().then((result)=>{
                alert("Restaurant Has Been Added")
            })
        })
    }
  render() {
    return (
      <Container>
        <RestaurantNavbar/>
        <Row className="justify-content-center">
          <Col sm={6}>
            <Card>
              <Card.Body>
                <h1 className='text'>Restaurant Create</h1>
                <br></br>
                <Form>
                    <Form.Control type="text" placeholder="Enter Restaurant Name"
                    onChange={(event)=>{this.setState({name:event.target.value})}}/>
                  <br></br>
                    <Form.Control type="text" placeholder="Enter Restaurant Address"
                    onChange={(event)=>{this.setState({address:event.target.value})}}/>
                  <br></br>
                    <Form.Control type="number" placeholder="Enter Rating"
                    onChange={(event)=>{this.setState({rating:event.target.value})}}/>
                  <br></br>
                    <Form.Control type="text" placeholder="Enter Email"
                    onChange={(event)=>{this.setState({email:event.target.value})}}/>
                    <br></br>
                    <Button variant="secondary" size="lg"
                    onClick={()=>{this.create()}}>Create Restaurant</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RestaurantCreate;
