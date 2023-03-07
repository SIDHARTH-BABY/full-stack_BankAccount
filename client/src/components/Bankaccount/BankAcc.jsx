import React, { useRef } from "react";
import SideBar from "../../Sidebar/SideBar";
import "./bankacc.scss";
import axios from "axios";
const BankAcc = () => {
  let userName = useRef();
  let Gender = useRef();
  let Dob = useRef();
  let Email = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("kello");
    const name = userName.current.value;
    const gender = Gender.current.value;
    const dob = Dob.current.value;
    const email = Email.current.value;
    const response = await axios.post("http://localhost:5001/user/bankacc", {
      name,
      gender,
      dob,
      email,
    });
    console.log(response);
  };

  return (
    <div class="parent">
      <SideBar />
      <div>
        <div>
          <form class="outer-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" ref={userName} />
            <label>Gende</label>
            <input type="text" ref={Gender} />
            <label>DOB</label>
            <input type="date" ref={Dob} />
            <label>Email</label>
            <input type="email" ref={Email} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BankAcc;
