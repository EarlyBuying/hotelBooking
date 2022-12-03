import React, { useState } from "react";

function CustomerAdd() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [idnum, setIdnum] = useState("");
  const [mobilenum, setMobileNum] = useState("");
  const [email, setEmail] = useState("");

  function cusData(e) {
    e.preventDefault();

    const submiteData = {
      fname,
      lname,
      idnum,
      mobilenum,
      email,
    };
    console.log(submiteData);
  }
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label for="firstName" className="form-label">
            Customer First Name :
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Enter Your First Name"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="lastName" className="form-label">
            Customer Last Name :
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Enter Your Last Name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="idNum" className="form-label">
            Customer ID Number :
          </label>
          <input
            type="text"
            className="form-control"
            id="idNum"
            placeholder="Enter Your ID Number"
            onChange={(e) => setIdnum(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="mobileNum" className="form-label">
            Customer Mobile Number :
          </label>
          <input
            type="text"
            className="form-control"
            id="mobileNum"
            placeholder="Enter Your Mobile Number"
            onChange={(e) => setMobileNum(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Customer Email :
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" onClick={cusData} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CustomerAdd;
