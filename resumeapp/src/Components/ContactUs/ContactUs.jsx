import React, { useState } from "react";
import './ContactUs.css'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "../../Context";
import{ db } from '../../firebase';
import { addDoc, collection } from "firebase/firestore";


// import {contactFormSchema} from "../../schemas/schema.jsx"

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const [firstName, setfirstName]=useState();
  const [lastName, setlastName]=useState();
  const [email, setEmail]=useState();
  const [PhoneNumber, setPhoneNumber]=useState();
  const [message, setMessage]=useState();

  const userCollectionRef =collection(db, "contactdata");

  const handleSubmit=()=>{

    if (!firstName || !lastName || !email ||!PhoneNumber|| !message) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

  

    addDoc(userCollectionRef,{
      First_Name: firstName,
      Last_Name: lastName,
      Email: email,
      Phone_Number: PhoneNumber,
      Message: message
    })
  }

  return (
    <>
      <section className="contactus-section" id='ContactUs'>
        <div className="contactus-text">
                <div className="contactus-heading">
                  <span style={{color: darkMode? 'white': ''}}>
                    Give Your <br/> 
                  </span>
                  <span style={{color: darkMode? 'var(--orange)': ''}}>Valuable Feedback</span>
                  <div className="blur s-blurl" style={{ background: "#ABF1FF94"}}></div>
                </div>
        </div>

            <div className="contact-form">

                {/* right side contact form  */}
                <div className="contact-rightside">
                  <form >

                    <div className="row1">
                      <div className="contact-input-feild">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          onChange={(event)=>{
                              setfirstName(event.target.value);
                          }}
                        />

                      </div>
                      <div  className="contact-input-feild">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          onChange={(event)=> {
                            setlastName(event.target.value);
                          }}
                        />

                      </div>
                    </div>
                    <div className="row1">
                      <div className="contact-input-feild">
                        <input
                          type="integer"
                          className="form-control"
                          placeholder="Phone Number "
                          onChange={(event)=>{
                            setPhoneNumber(event.target.value);
                          }}
                        />
                      </div>
                      <div className="contact-input-feild">
                        <input
                          type="string"
                          className="form-control"
                          placeholder="Email ID"
                          onChange={(event)=>{
                            setEmail(event.target.value);
                          }}
                        />

                      </div>
                    </div>

                    <div className="row1 message-box">
                      <div>
                        <textarea 
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Message"
                          onChange={(event)=>{
                            setMessage(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label style={{color: darkMode? 'white': ''}}
                        class="form-check-label"
                        className="main-hero-para">
                        I agree that the 'The Resume Studio' may contact me at the
                        email address or phone number above
                      </label>
                    </div>

                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="button"
                      //onClick={submitData}}
                      >
                      Submit
                    </button>

                    <span className="static-msg"></span>
                    
                  <div className="blur c-blurl"
                     style={{ background: "var(--purple)"}}></div>

                  </form>
                </div>
              </div>
      </section>
    </>
  );
};

export default Contact;