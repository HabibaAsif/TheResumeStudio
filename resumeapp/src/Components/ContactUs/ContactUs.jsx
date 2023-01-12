import React, { useState } from "react";
import './ContactUs.css'
import { useContext } from "react";
import { themeContext } from "../../Context";
import{ db } from './firebaseConfig';
import { addDoc, collection } from "firebase/firestore";


const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [firstName, setfirstName]=useState();
  const [lastName, setlastName]=useState();
  const [email, setEmail]=useState();
  const [PhoneNumber, setPhoneNumber]=useState();
  const [message, setMessage]=useState();

  const userCollectionRef =collection(db, "contactdatabase");

  const handleSubmit=()=>{
    addDoc(userCollectionRef,{
      First_Name: firstName,
      Last_Name: lastName,
      Email: email,
      Phone_Number: PhoneNumber,
      Message: message
    }).then(()=>{
      if(!alert("Form Submitted Successfully!!!")) document.location = '/app.js'
    }).catch((error) => {
      alert(error.message)
    })
  }

  return (
    <>
      <section className="contactus-section">
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
                          type="email"
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