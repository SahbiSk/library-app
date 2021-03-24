import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../../redux/actions/messageAction";
import tank from "../../img/tank.png";
import "./Contact.css";

const Contact = () => {
  const [message, setmessage] = useState("");
  const user = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage({ user_id: user.email, content: message }));
  };

  return (
    <div className="contact-main-container">
      <div className="tank">
        <img src={tank} alt="tank" />
      </div>
      <div className="contact-container">
        <div>
          <h2 className="contact-container__title">Contact Us</h2>
        </div>
        <form
          className="contact-container__form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <textarea
            className="contact-container__form--message"
            placeholder="Enter message here..."
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            required
          />
          {user.email === "" || user.password === "" ? (
            <strong>You must login to send a message</strong>
          ) : (
            <Button className="contact-container__form--submit" type="submit">
              Send
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
