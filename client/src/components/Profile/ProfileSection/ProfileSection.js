import React, { useState } from "react";
import { Button, Checkbox, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../../redux/actions/userAction";
import FileBase64 from "react-file-base64";

const ProfileSection = (props) => {
  const user = useSelector((state) => state.userReducer);

  if (user.email === "" || user.password === "") {
    props.history.push("/auth");
  }

  const [formData, setFormData] = useState({
    email: user.email,
    password: user.password,
  });
  const [image, setImage] = useState(user.image);
  const { email, password } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [editEmail, seteditEmail] = useState(false);
  const [editPassword, seteditPassword] = useState(false);

  const handleUpdate = (oldMail, newMail, newPassword, newImage) => {
    dispatch(update({ oldMail, newMail, newPassword, newImage }));
  };

  return (
    <div className={`profile-section`}>
      <div className="profile-pic__container">
        <img className="profile-pic" src={user.image} alt="profile-pic" />
      </div>
      <div className="info-section">
        <div className="info-section__email">
          <strong> user email : </strong>
          <div>
            <TextField
              name="email"
              type="email"
              value={email}
              className="field"
              disabled={!editEmail}
              onChange={handleChange}
            />
            <Button className="edit" onClick={() => seteditEmail(!editEmail)}>
              {editEmail ? "done" : "Edit"}
            </Button>
          </div>
        </div>
        <div className="info-section__password">
          <strong>user password : </strong>
          <div>
            <TextField
              name="password"
              type={`${showPassword ? "text" : "password"}`}
              value={password}
              disabled={!editPassword}
              className="field"
              onChange={handleChange}
            />
            <Button
              className="edit"
              onClick={() => seteditPassword(!editPassword)}
            >
              {editPassword ? "done" : "Edit"}
            </Button>
          </div>
          <div>
            <strong>show password :</strong>
            <Checkbox onChange={() => setShowPassword(!showPassword)} />
          </div>
          <div className="file-upload">
            <p>update your profile picture :</p>
            <FileBase64
              multiple={false}
              onDone={(img) => {
                setImage(img.base64);
              }}
              required
            />
          </div>
        </div>
        <Button
          onClick={() => handleUpdate(user.email, email, password, image)}
          className="save"
        >
          Save changes
        </Button>
      </div>
    </div>
  );
};

export default ProfileSection;
