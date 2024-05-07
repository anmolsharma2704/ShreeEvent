import React from "react";
import styled from "styled-components";

const Contact = () => {
  const handleSubmit = (event) => {
    // Prevent default form submission
    event.preventDefault();
    // Perform additional validation if needed
    // Submit form data if all validations pass
  };

  return (
    <section>
      {/* Embedded Google Maps */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231630.90914836465!2d74.33838048671878!3d24.890034300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968a14f54fb858f%3A0x3067cdecbf7612c6!2sShree%20Event%20Planner%20%26%20Management!5e0!3m2!1sen!2sin!4v1715072773272!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      
      <form
            action="https://formspree.io/f/mleqzklz"
            method="POST"
            className="contact-inputs">
            <StyledContainer>
        <LeftColumn>
          {/* Contact Form */}
          <Div className="Element">
            <StyledLabel htmlFor="eventType">Name</StyledLabel>
            <StyledInput
              type="text"
              placeholder="Name"
              name="username"
              required
              autoComplete="off"
            />
          </Div>
          {/* Contact number input */}
          <Div className="Element">
            <StyledLabel htmlFor="eventType">Contact number</StyledLabel>
            <StyledInput
              type="tel"
              name="contactNumber"
              placeholder="Contact number"
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
              required
            />
          </Div>
          {/* Date input */}
          <Div className="Element">
            <StyledLabel htmlFor="eventType">Date of Event</StyledLabel>
            <StyledInput
              type="date"
              name="eventDate"
              required
              autoComplete="off"
            />
          </Div>
        
          {/* Type of event dropdown */}
          <Div className="Element">
            <StyledLabel htmlFor="eventType">Type of Event:</StyledLabel>
            <StyledSelect
              id="eventType"
              name="eventType"
              required
              autoComplete="off"
            >
              <option value="">Select event type</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Conference">Conference</option>
              <option value="Workshop">Workshop</option>
              <option value="Seminar">Seminar</option>
              <option value="Webinar">Webinar</option>
              <option value="Meeting">Meeting</option>
            </StyledSelect>
          </Div>
          </LeftColumn>
        <RightColumn>
          {/* Message about the event input */}
          <Div className="Element">
            <StyledLabel htmlFor="eventType">Write About Event</StyledLabel>
            <StyledTextarea
              name="aboutEvent"
              cols="30"
              rows="10"
              autoComplete="off"
              placeholder="Enter your message"
            ></StyledTextarea>
          </Div>
          {/* Venue address input */}
          <Div className="Element">
            <StyledLabel htmlFor="eventType">Venue Address</StyledLabel>
            <StyledInput
              type="text"
              placeholder="Venue Address"
              name="Venue Address"
              required
              autoComplete="off"
            />
          </Div>
          </RightColumn>
          {/* Submit button */}
          
        
      </StyledContainer>
      <StyledButton type="submit" value="Send" />
      </form>
    </section>
  );
};

const LeftColumn = styled.div``;

const RightColumn = styled.div``;

export default Contact;


// Styled Components
const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr); // Default to single column layout

  @media screen and (min-width: 998px) {
    grid-template-columns: repeat(2, 1fr); // Switch to two columns layout on larger screens
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin:2rem;

  font-size: 2rem;
  color: blue;
  transition: all 0.3s ease;


  &:hover {
    transform: translateY(-5px);
    font-size:3rem;
  }
`;



const StyledInput = styled.input`
  width: 100%;
  font-size:2rem;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const StyledLabel = styled.label`
  margin-bottom: 10px;
  display: block;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  font-size:2rem;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
const StyledButton = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width:8vw;
  margin-left:46%;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;
