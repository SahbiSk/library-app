import React, { useState, useEffect } from "react";
import BookListItem from "../../BookList/BookListItem/BookListItem";
import FileBase64 from "react-file-base64";
import { Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import "./ProfileBookList.css";
import { addBook, getALLBooks } from "../../../redux/actions/bookActions";
import { getUserCargo } from "../../../redux/actions/cargoActions";
//import CargoItem from "./CargoItem/CargoItem";

const ProfileBookList = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [add, setAdd] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleUpload = (obj) => {
    dispatch(addBook(obj));
  };

  useEffect(() => {
    user.role === "admin"
      ? dispatch(getALLBooks())
      : dispatch(getUserCargo({ user_id: user.email }));
  }, [dispatch]);

  const data = useSelector((state) =>
    user.role === "admin" ? state.bookReducer : state.cargoReducer
  );
  console.log(data);
  return (
    <div className="book-list__container">
      <div className="book-list__form">
        {user.role === "admin" && (
          <Button
            className="book-list__add-button"
            onClick={() => setAdd(!add)}
          >
            {add ? "Cancel" : "Add new Book"}
          </Button>
        )}
        {add && (
          <div className="upload-book">
            <h5>Title : </h5>
            <TextField
              onChange={(e) => handleChange(e)}
              className="upload-book__title"
              id="title"
              value={formData.title}
            />
            <h5>Description :</h5>
            <TextField
              multiline={true}
              rows="3"
              onChange={(e) => handleChange(e)}
              id="description"
              className="upload-book__description"
              value={formData.description}
            />
            <div className="upload-book__file-upload">
              <p>Upload book icon :</p>
              <FileBase64
                multiple={false}
                onDone={(img) => {
                  setImage(img.base64);
                }}
                required
              />
            </div>
            <Button
              className="book-list__upload-button"
              onClick={() => handleUpload({ ...formData, image })}
            >
              Upload
            </Button>
          </div>
        )}
      </div>
      <div>
        {data.map((item, key) => (
          <BookListItem key={key} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProfileBookList;
