import React from "react";
import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
const[show, handleShow]= useState(false);
const history = useHistory();

const transitionNavBar = ()=> {
    if (window.scrollY > 100){
        handleShow(true);
    } else {
        handleShow(false)
    }
}

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return ()=> window.removeEventListener("scroll", transitionNavBar);
}, []);

  return (
    <div class={`nav ${show && "nav__black"}`}>
      <div class="nav__contents">
        <img
          className="nav__logo"
          onClick={() => history.push("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png"
          alt=""
        />

        <img
          class="nav__avatar"
          onClick={() => history.push("/profile")}
          src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
