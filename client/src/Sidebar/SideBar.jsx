import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sidestyle.scss";
const SideBar = () => {
  const navigate = useNavigate();
  const [colour, setColour] = useState("home");
  const colourChange = (home) => {
    setColour(home);
    home.preventDefault();
  };
  return (
    <div>
      <div class="navigation">
        <ul>
          <li class="list active">
            <a
              href="#"
              onClick={() => {
                colourChange("home");
              }}
            >
              <span class="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span
                class={colour === "home" ? "hello" : null}
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </span>
            </a>
          </li>
          <li class="list">
            <a
              href="#"
              onClick={() => {
                colourChange("wid");
              }}
            >
              <span class="icon">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
              <span
                class={colour === "wid" ? "hello" : null}
                onClick={() => {
                  navigate("/widget");
                }}
              >
                Widget Status
              </span>
            </a>
          </li>
          <li class="list">
            <a
              href="#"
              onClick={() => {
                colourChange("bank");
              }}
            >
              <span class="icon">
                <ion-icon name="title"></ion-icon>
              </span>
              <span
                class={colour === "bank" ? "hello" : null}
                onClick={() => {
                  navigate("/bankaccount");
                }}
              >
                {" "}
                Bank Account
              </span>
            </a>
          </li>
          <li class="list">
            <a href="#">
              <span class="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span class="title">Profile</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
              <span class="icon">
                <ion-icon name="paper-plane-outline"></ion-icon>
              </span>
              <span class="title">Messages</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
              <span class="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span class="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
