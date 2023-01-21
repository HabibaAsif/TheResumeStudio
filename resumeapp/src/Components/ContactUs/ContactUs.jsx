import React, { useState } from "react";
import './ContactUs.css'
import { useContext } from "react";
import { themeContext } from "../../Context";
import{ db } from '../../firebase';
import { addDoc, collection } from "firebase/firestore";


const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [firstName, setfirstName]=useState("");
  const [lastName, setlastName]=useState("");
  const [email, setEmail]= useState("");
  const [PhoneNumber, setPhoneNumber]=useState();
  const [message, setMessage]=useState("");

  const userCollectionRef =collection(db, "contactdatabase");

  const onChangeHandler = (fieldName, value)=>{
    if(fieldName === "name"){
      //setName(value);
    }
    else if(fieldName==="email"){
      setEmail(value);
    }
  }

  const handleSubmit=()=>{
    addDoc(userCollectionRef,{
      First_Name: firstName,
      Last_Name: lastName,
      Email: email,
      Phone_Number: PhoneNumber,
      Message: message
    }).then(()=>{
      if(!alert("Form Submitted Successfully!!!")) document.location = '/'
    }).catch((error) => {
      alert(error.message)
    })
  }

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    if(email.trim() ==""){
      alert("required both field");
    }
    else{
      setEmail("");
    }
    
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
                  <form onSubmit={(e)=>{onSubmitHandler(e)}}>

                    <div className="row1">
                      <div className="contact-input-field">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          required={true} minLength='3' maxlength="20" pattern='^[A-Za-z]+$' title='*This field requires alphabets only'
                          onChange={(event)=>{
                              setfirstName(event.target.value);
                          }}
                        />

                      </div>
                      <div  className="contact-input-field">
                        <input 
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          required={true} minLength='3' maxlength="20" pattern='^[A-Za-z]+$' title='*This field requires alphabets only'
                          onChange={(event)=> {
                            setlastName(event.target.value);
                          }}
                        />

                      </div>
                    </div>
                    <div className="row1">
                      <div className="contact-input-field">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Phone Number "
                          pattern="[0-9]{4}[0-9]{7}" title='*Please fill out this field in 03345789678 format' required={true} maxlength="11"
                          onChange={(event)=>{
                            setPhoneNumber(event.target.value);
                          }}
                        />
                      </div>
                      <div className="contact-input-field">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email ID"
                          value={email} maxlength='30' required={true} pattern='[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
                   title='*Please fill out this field in abc@gmail.com format ' onChange={(e)=>{ onChangeHandler("email",e.target.value)}}/>

                      </div>
                    </div>

                    <div className="row1 message-box">
                      <div>
                        <textarea 
                        required={true}
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
