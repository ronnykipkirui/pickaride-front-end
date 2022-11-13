import React from "react";

export default function Contact() {
  return (
    <div>
    <section className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>
          Do you have a question about our cars..Reach out to us!!!
        </p>
      </div>

      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon"></div>
            
          </div>
          <div className="box">
            <div className="icon"></div>
            <div className="text">
              <h3>Email</h3>
              <p> pickaride@gmail.com</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
         
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p> (+254) 0000000000</p>
            </div>
          </div>
        </div>

        <div className="contactForm">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
            <label className="label" htmlFor="fullname">
                Full Name
              </label>
              <input
                type="text"
                name=""
                required="required"
          
             
              />
              
            </div>

            <div className="inputBox">
            <label className="label" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                name=""
                required="required"
           
              />
             
            </div>

            <div className="inputBox">
            <label className="label" htmlFor="message">
                Feedback
              </label>
              <textarea
                required="required"
              
              ></textarea>
             
            </div>

            <div className="inputBox">
              <input type="submit" name="" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
}
