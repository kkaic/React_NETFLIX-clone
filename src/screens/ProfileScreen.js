import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { auth } from "../firebase";
// import PlanScreen from "./PlanScreen";

function ProfileScreen() {
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div class="profileScreen__info">
          <img
            src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt=""
          />
          <div className="profileScreen__details">
            {/* <h2>{user.email}</h2> */}
            <h2>aaa@gmail.com</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <div className="planScreen__plan">
                <div className="planScreen__info">
                  <h5>Premium</h5>
                  <h6>4K + HRD</h6>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="planScreen__plan">
                <div className="planScreen__info">
                  <h5>Basic</h5>
                  <h6>720p</h6>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="planScreen__plan">
                <div className="planScreen__info">
                  <h5>Standard</h5>
                  <h6>1080p</h6>
                </div>
                <button>Subscribe</button>
              </div>
            </div>
            {/* <PlanScreen/> */}
            <button
              onclick={() => auth.signOut()}
              className="profileScreen__signOut"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
