import React from "react";
import { useEffect,useState } from "react";
import "./Nav.css";

function Nav() {
const[show, handleShow]= useState(false);

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
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <img 
        class="nav__avatar" 
        src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
        alt="" 
        />

      </div>
    </div>
  );
}

export default Nav;
