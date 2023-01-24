import React from 'react'
import "./Style.css";
import Navbar from '../Navbar/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext } from "react";
import { themeContext } from "../../Context";
import {
   Link
} from 'react-router-dom';
import EditProfile from './EditProfile';
//import setBodyImage from '../setBodyImage';

export default function Profile() {

  //setBodyImage({bgimg:"linear-gradient(to right,#DDF8FE,#e9c6ff,#fca61f73)"});
  //let url="https://www.w3schools.com/react/react_css_styling.asp";
///////////////////////////////////////HTML FOR RESUME LIST////////////////////

  ////////////////////////////GET RESUME////////////////////////////////////
  /*
  const [file , setFile] = useState([])
  const [resume , setresume] = useState('')

       const getdocbyq=async(id)=>{
  const collref=collection(firestore,'resumes')
  const q=query(collref,where ("user_id","==",id))
  const docrefs=await getDocs(q);
  //console.log(docrefs)
const res=[]
docrefs.forEach(resume=>{
  res.push({
    id:resume.id,...resume.data()
})
})
setFile(res)

}
getdocbyq("04")
   */
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
return (
  <body className='profile'>
        
        <div className="App"
        style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
        }}
        >
        <Navbar/>
          
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

      </div>
      <div className="App"
        style={{
        background: darkMode ? "black" : "",
        }}
        >
          <div  className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-10 mt-3 pt-4">
                <div className="row1 z-depth-3">
                  <div className="col-sm-12 bg-white rounded-right">

                    <h3 className="mt-3 text-center"> Profile<div className="ediprofhover">
                      <Link style={{color:'#FCA61F'}} to="/editprofile">
                      <i className="far fa-edit fa-2x mb-4" style={{color:'#FCA61F'}}> </i>
                      <p>Edit Profile</p></Link>
                    </div></h3>
                    <hr className="sectionsep"/>
                    <div className="row1" >
                      <div className="col-sm-6">
                        <p  className="font-weight-bold">First Name</p>
                        <h6 className=" text-muted">Nick</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="font-weight-bold">Last Name</p>
                        <h6 className=" text-muted">Name</h6>
                      </div>
                      </div>
                    <div className="row1">
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
                    <div className="row1">
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
          </div>
  </body>
        );
      }

