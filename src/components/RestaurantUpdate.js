import React, { Component } from "react";
import { useState, useEffect } from "react"; //useState is for state and setState and useEffect is for used lifecycle method
import { useParams } from "react-router-dom"; //here we use useParams is for get id
import { Form, Container, Row, Col, Card, Button } from "react-bootstrap"; //using bootstrap
import RestaurantNavbar from "./RestaurantNavbar";

function RestaurantUpdate() {
  const { id } = useParams();
  //console.log(id);
  //Create state and setState for all data
  const [data, setdata] = useState([]); //For all data
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [rating, setrating] = useState("");
  const [email, setemail] = useState("");
  const [sid,setid] = useState(null); //using null bcz id is number
  //console.log(name);

  useEffect(() =>  //using useEffect for get Data
  {
    getData();
  },[])

  function getData() //get data from api that are we show in texboxes
  {
    fetch("http://localhost:3000/restaurant/" + id).then((response) => {
      response.json().then((result) => {
        //console.log(result); //Showing restaurant all data here in result
        //Update all states
        setdata(result)
        setname(result.name)
        setaddress(result.address)
        setrating(result.rating)
        setemail(result.email)
        setid(result.id)
      });
    });
  }

 function update() //Update Data
  {
      let item = {name,address,rating,email,id};  //Take all data in variable and in {} bcz we use for stringify in function component
      fetch('http://localhost:3000/restaurant/'+ id, {
        method: "PUT",  //-->Define which method used PUT is for update data
        headers: {       //-->In headers we define which type of our content so our content is json type and Accept menas which data we accept
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(item) //body ko stringify krkay bhjna hota ha ismai data jo variable item mai store kia wo send krna ha only in function component
        }).then((response)=>{
            response.json().then((result)=>{
                alert("Restaurant Has Been Updated")
            })
        })
      
  }
  
  return (
    <Container>
      <RestaurantNavbar/>
      <Row className="justify-content-center">
        <Col sm={6}>
          <Card>
            <Card.Body>
              <h1 className='text'>Restaurant Update</h1>
              <br></br>
              <Form>
                <Form.Control
                  type="text"
                  placeholder="Enter Restaurant Name"
                 value={name} //Show Name Data in this texbox
                  onChange={(event) =>setname(event.target.value) //onChange in function component is different from class component
                  }/>
                <br></br>
                <Form.Control
                  type="text"
                  placeholder="Enter Restaurant Address"
                  value={address}
                  onChange={(event) => 
                    setaddress(event.target.value)
                  }/>
                <br></br>
                <Form.Control
                  type="number"
                  placeholder="Enter Rating"
                  value={rating}
                  onChange={(event) => 
                    setrating(event.target.value)
                  }/>
                <br></br>
                <Form.Control
                  type="text"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(event) => 
                    setemail(event.target.value)
                  }/>
                <br></br>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={update} //Call Update Function
                >
                  Update Restaurant
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RestaurantUpdate;
