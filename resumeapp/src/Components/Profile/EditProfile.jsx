import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Style.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
//import App from '../App';
//import setBodyImage from '../setBodyImage';
export default function EditProfile() {
 // setBodyImage({bgimg:"linear-gradient(to right ,#e9c6ff,#DDF8FE)"})

  return (
    
<>     
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
      <form>
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 mt-4 pt-4">
          <div className="row z-depth-3">
           
            <div className="col-sm-12 bg-white rounded-right">
              <h3 className="mt-3 text-center">Edit Profile</h3>
              <hr className="sectionsep"/>
              <div className="row">
                <div className="col-sm-6">
                  <p className="font-weight">First Name</p>
                  
                    <input className="icon-rtlpfn"  className="icon-rtl" type='text'>
                    </input>

                </div>
                <div className="col-sm-6">
                  <p className="font-weight">Last Name</p>
                  <input className="icon-rtlpln" type='text'/>
                </div>
                </div>
                <br>
              </br>
              <div className="row">
                <div className="col-sm-6">
                  <p className="font-weight">Email</p>
                  <input className="icon-rtle" type='text'/>
                </div>
                <div className="col-sm-6">
                  <p className="font-weight">Phone</p>
                  <input className="icon-rtlp" type='tel'/>
                </div>
              </div>
              <br>
              </br>
              <div className="row">
                <div className="col-sm-6">
                  <p className="font-weight">Password</p>
                  <input className="icon-rtlpw" type='password'/>
                </div>
                </div>
                <br>
              </br>
              <div className="row">

              <button  type="submit"  defaultValue="submit">Save</button>
              </div>
              <br>
              </br>
            </div>
            <br>
              </br>
          </div>
        </div>
      </div>
      </form>
        </div>
        </>
  )
}
