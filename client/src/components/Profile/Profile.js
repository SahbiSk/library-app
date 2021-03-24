import React from "react";
import { Link } from "react-router-dom";
import { AiFillProfile, AiFillMessage } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { MdCardMembership } from "react-icons/md";
import "./Profile.css";
import ProfileSection from "./ProfileSection/ProfileSection";
import ProfileBookList from "./ProfileBookList/ProfileBookList";
import ProfileMembershop from "./ProfileMembership/ProfileMembershop";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import ProfileMessagesSection from "./ProfileMessagesSection/ProfileMessagesSection";

const Profile = (props) => {
  const dispatch = useDispatch();
  const currentComponent = () => {
    switch (props.location.pathname) {
      case "/profile":
        return <ProfileSection {...props} />;
      case "/profile/booklist":
        return (
          <div className="holder">
            <ProfileBookList {...props} />
          </div>
        );
      case "/profile/membership":
        return <ProfileMembershop {...props} />;
      case "/profile/ProfileMessagesSection":
        return <ProfileMessagesSection {...props} />;
      default:
        return;
    }
  };

  const user = useSelector((state) => state.userReducer);

  if (user.email === "" || user.password === "") {
    props.history.push("/auth");
  }

  return (
    <div className={`profile`}>
      <nav className={`profile-nav`}>
        <ul className={`profile-nav__list`}>
          <div className="profile-nav__list--main-list">
            <li className={`profile-nav__list--item`}>
              <Link to="/profile">
                <AiFillProfile className="icon" />
                <span className="link-title">Profile</span>
              </Link>
            </li>
            <li className={`profile-nav__list--item`}>
              <Link to="/profile/booklist">
                <BsBook className="icon" />
                <span className="link-title">
                  {user.role === "admin" ? "books" : "booked books"}
                </span>
              </Link>
            </li>
            {/** <li className={`profile-nav__list--item`}>
              <Link to="/profile/membership">
                <MdCardMembership className="icon" />
                <span className="link-title">Membership details</span>
              </Link>
            </li> */}
            {user.role === "admin" ? (
              <li className={`profile-nav__list--item`}>
                <Link to="/profile/ProfileMessagesSection">
                  <AiFillMessage className="icon" />
                  <span className="link-title">Messages Recieved</span>
                </Link>
              </li>
            ) : null}
          </div>
          <li className={`profile-nav__list--item`}>
            <Link to="/auth" onClick={() => dispatch(logout())}>
              <BiLogOut className="icon" />
              <span className="link-title">Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
      {currentComponent()}
    </div>
  );
};

export default Profile;
