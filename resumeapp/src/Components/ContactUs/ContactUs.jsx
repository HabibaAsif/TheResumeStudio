import React, { useState } from "react";
import './ContactUs.css'
import { useContext } from "react";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, message } = userData;

    if (firstName && lastName && phone && email && message) {
      const res = fetch(
        "https://reactfirebasewebsite-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
        setDone(true)
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  const [done, setDone] = useState(false)

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
                  <form method="POST">

                    <div className="row">
                      <div className="contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="contact-input-feild">
                        <input
                          type="int"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="contact-input-feild">
                        <input
                          type="email"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row message-box">
                      <div>
                        <textarea
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={postUserData}
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
                      type="submit"
                      className="button"
                      onClick={submitData}>
                      Submit
                    </button>

                    <span className="static-msg">{done && "Thanks for your feedback.." }</span>
                    
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