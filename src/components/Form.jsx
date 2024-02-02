import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';
import instagramlogo from "../images/instagramlogo.png";
import githublogo from "../images/githublogo.png";
import linkedinlogo from "../images/linkedinlogo.png";

//'useState' hook manages state for form input'inputValues' and form submission status 'formSubmitted'
//'handleChange' function updates the state when input values change
//'handle submit' function is used when form is submitted and sets the 'formSubmitted' flag to 'true'
//the component condionally renders the form or a confirmation message based on the state of 'formSubmitted'

const Form = () => {
  const [inputValues, setInputValues] = useState({
    Email: '',
    Name: '',
    Message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { Email, Name, Message } = inputValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <>
      {!formSubmitted ? (
        <>
          <p className="contact-text">LETS HAVE A CONVERSATION:</p>
          <form onSubmit={handleSubmit} className="form-form">
            <InputField
              type="text"
              value={Name}
              theme="field"
              label="Your name:"
              name="Name"
              onChange={handleChange}
            />
            <InputField
              type="text"
              value={Email}
              theme="field"
              label="Your Email-Adress:"
              name="Email"
              onChange={handleChange}
            />
            <InputField
              type="text"
              value={Message}
              theme="field"
              label="Message:"
              name="Message"
              onChange={handleChange}
            />
            <Button theme="send">SAY HI</Button>
          </form>
        </>
      ) : (
        <div className="form-info">
          <p>Hello, {Name}!</p>
          <p>Thank you for contacting me.</p>
          <p>Feel free to check out my social media:</p>
		  <a className="form-link" href="https://www.instagram.com/"><img className="form-logo" src={instagramlogo} alt="instagram"/></a>
		  <a className="form-link" href="https://github.com/"><img className="form-logo" src={githublogo} alt="github"/></a>
		  <a className="form-link" href="https://www.linkedin.com/"><img className="form-logo" src={linkedinlogo} alt="linkedin"/></a>
        </div>
      )}
    </>
  );
};

export default Form;
