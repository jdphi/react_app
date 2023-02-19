import React from 'react';
import logo from './logo.svg'
import './App.css';
import {Formik} from 'formik'
import { useFormik } from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values => {
      console.log(values); // Logs the input to the console
      if (values.email && values.password) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
          alert('Login Successful');
        } else {
          document.getElementById('emailError').innerText = 'Username should be an email';
        }
      } else {
        document.getElementById('emailError').innerText = values.email ? '' : 'Field required';
        document.getElementById('pswError').innerText = values.password ? '' : 'Field required';
      }
    }
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input type="text" id="emailField" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        <div id="emailError" style={{color:'red'}}></div>
        <div>Password:</div>
        <input type="text" id="pswField" name="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
        <div id="pswError" style={{color:'red'}}></div>
        <button type="submit" id="submitBtn">Submit</button>
      </form>      
    </div>
  );
}

export default App;
