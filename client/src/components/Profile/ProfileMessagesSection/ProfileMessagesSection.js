import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMessage } from "../../../redux/actions/messageAction";
import MessageItem from "./MessageItem/MessageItem";
import "./ProfileMessagesSection.css";

const ProfileMessagesSection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMessage());
  }, [dispatch]);

  const messages = useSelector((state) => state.messageReducer);

  return (
    <div className="messages-container">
      {messages.map((msg, key) => (
        <MessageItem {...msg} key={key} />
      ))}
    </div>
  );
};

export default ProfileMessagesSection;
