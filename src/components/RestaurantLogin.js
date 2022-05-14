import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap"; //using bootstrap
import { useState } from "react";
import { useNavigate } from "react-router-dom"; //For navigation page
import {Link} from 'react-router-dom'; //For Routing
import RestaurantNavbar from "./RestaurantNavbar";


function RestaurantLogin() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const NavigatePage = () => navigate("/list"); //Create Function

  //For Login with Mock API
  function login() {
    let item = { name, password };
    console.log(item);
    fetch("http://localhost:3000/login?q=" + name).then((response) => {
      response.json().then((result) => {
      //  console.log("result", result);
        if (item.name === "") {
          alert("Invalid Username");
        } else if (item.password === "") {
          alert("Invalid Password");
        } else if (result.length > 0) {
//To Add localStorage Go to console->Application->Local Storage then enter username and password data will store in Local Storage Here 'Login' is Name of our Local Storage
//To Clear Local Storage type localStorage.clear() in console  
          localStorage.setItem('login',JSON.stringify(result))       
           NavigatePage(); //Call Function
        } else {
          alert("Invalid Username and Password");
        }
      });
    });
  }
  return (
    <Container>
      <RestaurantNavbar/>
      <Row className="justify-content-center">
        <Col sm={6}>
          <br></br>
          <br></br>
          <h1>Login Page</h1>
          <br></br>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(event) => setname(event.target.value)}
          />
          <br></br>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={(event) => setpassword(event.target.value)}
          />
          <br></br>
          <Button variant="secondary" size="lg" onClick={login}>
            Login
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link  to={"/registration"}>
          <Button variant="secondary" size="lg" color="red">
            Sign Up
          </Button>
      </Link>
          
        </Col>
      </Row>
    </Container>
  );
}

export default RestaurantLogin;
