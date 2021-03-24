import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../../../redux/actions/messageAction";
import "./MessageItem.css";

const MessageItem = ({ id, user_id, content, date_reception }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteMessage(id));
  };

  return (
    <div className="message-item">
      <div className="message-item__header">
        <p className="message-item__header--email">
          Sender : <br /> {user_id}
        </p>
        <p className="message-item__header--date">
          Received at : <br /> {date_reception}
        </p>
        <AiFillDelete
          className="message-item__header--delete-icon"
          onClick={() => handleDelete()}
        />
      </div>
      <p className="message-item__content">{content}</p>
    </div>
  );
};

export default MessageItem;
