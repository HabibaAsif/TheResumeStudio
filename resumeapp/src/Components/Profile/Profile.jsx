import React from 'react'
import "./Style.css";
import Navbar from '../Navbar/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import EditProfile from './EditProfile';
//import setBodyImage from '../setBodyImage';

export default function Profile() {
  //setBodyImage({bgimg:"linear-gradient(to right,#DDF8FE,#e9c6ff,#fca61f73)"});

  //let url="https://www.w3schools.com/react/react_css_styling.asp";
  return (
    <>
    <title>Profile</title>
    <link rel="stylesheet" href="Style.css"/>

    {/* Font Awesome */}
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
    {/* Google Fonts */}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    {/* Bootstrap core CSS */}
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" />
    {/* Material Design Bootstrap */}
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet" />
<Navbar></Navbar>
    <div  className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 mt-5 pt-5">
          <div className="row z-depth-3">
            <div id="lefheader_profile" className="col-sm-3  rounded-left">
              <div className="card-block text-center text-white">
                <i className="fas fa-user-tie fa-7x mt-5" />
                <h2 className="font-weight-bold mt-4">Nickson</h2>
               
                <div className="ediprofhover">
                <Link to="/editprofile">
                <i className="far fa-edit fa-2x mb-4" style={{color:'#ac2bfc'}}> </i>
                <p>Edit Profile</p></Link>
   
               </div>
              </div>
            </div>
            <div className="col-sm-9 bg-white rounded-right">
              <h3 className="mt-3 text-center">Profile</h3>
              <hr className="sectionsep"/>
              <div className="row" >
                <div className="col-sm-6">
                  <p className="font-weight-bold">First Name</p>
                  <h6 className=" text-muted">Nick</h6>
                </div>
                <div className="col-sm-6">
                  <p className="font-weight-bold">Last Name</p>
                  <h6 className=" text-muted">Name</h6>
                </div>
                </div>
              <div className="row">
                <div className="col-sm-6">
                  <p className="font-weight-bold">Email</p>
                  <h6 className=" text-muted">nick32@gmail.com</h6>
                </div>
                <div className="col-sm-6">
                  <p className="font-weight-bold">Phone</p>
                  <h6 className="text-muted">+921234567890</h6>
                </div>
              </div>
              
              <h3 className="mt-3 text-center">Saved Resumes</h3>
              <hr className="sectionsep" />
              <div className="row">
                <div className="col-sm-6">
                  <ListGroup>
                <ListGroup.Item  action variant="light" href="#link1" elementType="button"  > 
                <div className="ms-2 me-auto">
               <div className="fw-bold">Resume.pdf</div>
                7/11/22
              </div>
              </ListGroup.Item>
              <ListGroup.Item href="#link1" action variant="light"> <div className="ms-2 me-auto">
               <div className="fw-bold">Resume1.pdf</div>
               7/12/22
              </div></ListGroup.Item>
              <ListGroup.Item href="#link1" action variant="light"> <div className="ms-2 me-auto">
               <div className="fw-bold">Resume1.pdf</div>
               7/12/22
              </div></ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
              <br>
              </br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
        );
      }

