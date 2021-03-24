import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { Button, Checkbox, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import "./AuthForm.css";
import { logIn, signup } from "../../redux/actions/userAction";

const AuthForm = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [image, setImage] = useState();
  const [login, setLogin] = useState(true);
  const [showPassowrd, setShowPassowrd] = useState(false);

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer);
  if(user.email!==""||user.password!==""){
    props.history.push("/profile")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    login
      ? dispatch(logIn(formData))
      : dispatch(signup({ ...formData, image }));
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="login-signup">
          <h3
            className={`login ${login && "active"} `}
            onClick={() => setLogin(true)}
          >
            Login
          </h3>
          <h3
            className={`signup ${!login && "active"} `}
            onClick={() => setLogin(false)}
          >
            Signup
          </h3>
        </div>
        <div className="form-logo" />
        <TextField
          name="email"
          placeholder="email"
          type="email"
          value={email}
          required
          className="field"
          onChange={handleChange}
          label="email"
        />
        <TextField
          className="field"
          name="password"
          placeholder="password"
          type={`${showPassowrd ? "text" : "password"}`}
          value={password}
          required
          label="password"
          onChange={handleChange}
        />
        <div className="checkbox-container">
          <Checkbox
            value="show password"
            color="primary"
            onChange={() => setShowPassowrd(!showPassowrd)}
          />
          <p>show password</p>
        </div>
        {!login && (
          <div className="file-upload">
            <p>upload your profile picture :</p>
            <FileBase64
              multiple={false}
              onDone={(img) => {
                setImage(img.base64);
              }}
              required
            />
          </div>
        )}
        <Button type="submit" className="button">
          {login ? "Login" : "Signup"}
        </Button>
      </form>
    </div>
  );
};
export default AuthForm;
