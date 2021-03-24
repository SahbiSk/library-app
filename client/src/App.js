import React from "react";
import AuthForm from "./components/authComponent/AuthForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/Profile/Profile";
import BookList from "./components/BookList/BookList";
import Contact from "./components/Contact/Contact";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/footer/Footer";
import About from "./components/About/About";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={"/"} exact render={(props) => <Homepage {...props} />} />
        <Route path="/auth" exact render={(props) => <AuthForm {...props} />} />
        <Route
          path={"/profile"}
          exact
          render={(props) => <Profile {...props} />}
        />
        <Route
          path={"/profile/booklist"}
          exact
          render={(props) => <Profile {...props} />}
        />
        <Route
          path="/booklist"
          exact
          render={(props) => <BookList {...props} />}
        />
        <Route
          path="/contactus"
          exact
          render={(props) => <Contact {...props} />}
        />
        <Route
          path="/profile/membership"
          exact
          render={(props) => <Profile {...props} />}
        />
        <Route
          path="/profile/ProfileMessagesSection"
          exact
          render={(props) => <Profile {...props} />}
        />
        <Route path="/about" exact render={(props) => <About {...props} />} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
