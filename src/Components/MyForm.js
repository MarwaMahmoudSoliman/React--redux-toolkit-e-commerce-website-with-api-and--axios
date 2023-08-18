import React, { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './MyForm.css'
export default function MyForm() {
  const initalFormData = {
    email: "",
    password: "",
    age: "",
  };

  const ageRef = useRef(null);
  const passRef = useRef(null);

  const [formData, setFormData] = useState({ ...initalFormData });

  const [err, setErr] = useState({
    email: null,
    password: null,
    age: null,
  });

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const changeHandler = (e) => {
    if (e.target.name === "email" && !emailRegex.test(e.target.value)) {
      setErr({
        ...err,
        email: `email should have format like name@email.com`,
       
      });
    } else if (e.target.name === "age" && e.target.value < 18) {
      setErr({
        ...err,
        [e.target.name]: `${e.target.name} must be +18, Adults only.`,
      });
    } else if (e.target.name === "password" && e.target.value.length <= 8) {
      setErr({
        ...err,

        [e.target.name]: `${e.target.name} must be more than 8 characters.`,
      });
    } else {
      setErr({
        ...err,
        [e.target.name]: null,
      });
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    
    if (
      !err.email &&
      !err.age &&
      !err.password &&
      emailRegex.test(formData.email) &&
      formData.password.length > 8 &&
      formData.age >= 18
    ) {
      setFormData({
        ...initalFormData,
      });
      alert("Successful !");
    } else {
      alert("You can not submit before typing your data correctly!");
    }
  };
  return (
    <Form
      style={{textAlign:"center" ,padding:"40px",width:"40em",marginLeft:"300px" ,Color:"gray" ,backgroundColor:"gray" ,borderRadius:"20%"}}
      onSubmit={submitHandler}
     
    >
      <Form.Group  style ={{color:"green"}}className="col-lg-6 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          style ={{color:"gray" ,width:"33em"}}
          placeholder="Enter email"
          name="email"
          
         className="border border-danger col-lg-6"
          onChange={changeHandler}
          value={formData.email}
         
        />
        <Form.Text
          className={err.email ? "bg-danger text-light fs-5" : "text-muted"}
        >
          {err.email
            ? err.email
            : " We'll never share your email with anyone else."}
        </Form.Text>
      </Form.Group>

      <Form.Group
        ref={passRef}
        className="col-lg-8 mb-3"
        controlId="formBasicPassword"
      >
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={formData.password}
          placeholder="Password"
          name="password"
          onChange={changeHandler}
          style ={{color:"green", border:"1px red solid"}}
        />
        <Form.Text
          className={err.password ? "bg-primary text-dark fs-5" : "text-muted"}
        >
          {err.password
            ? err.password
            : " Password has to be more than 8 characters."}
        </Form.Text>
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group
        className="col-lg-8 mb-3"
        controlId="formBasicAge"
        ref={ageRef}
      >
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Your Age"
          value={formData.age}
          name="age"
          onChange={changeHandler}
          style ={{color:"green", border:"1px red solid"}}
        />
        <Form.Text
          className={err.age ? "bg-primary text-light fs-5" : "text-muted"}
        >
          {err.age ? err.age : "  Your Age must be more than +18."}
        </Form.Text>
      </Form.Group>

      <Button
        variant="dark"
        className="col-lg-4 btn-outline-primary  mt-1 p-1"
        type="submit"
        style ={{color:"gray" ,width:"10em" ,marginLeft:"-20px"}}
      >
        Submit
      </Button>
    </Form>
  );
}
