// Login.jsx

import React, { useState } from "react";
import { MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBTabsPane } from "mdb-react-ui-kit";
import "../../styles/login.scss";

const Login = () => {
  const [justifyActive] = useState("tab1");
  const [isLoginSelected, setIsLoginSelected] = useState(true);

  return (
    <div id="login">
      <div className="button-container">
        <MDBBtn
          className={`mb-4 ${isLoginSelected ? "active" : ""}`}
          onClick={() => setIsLoginSelected(true)}
        >
          Login
        </MDBBtn>
        <MDBBtn
          className={`mb-4 ${!isLoginSelected ? "active" : ""}`}
          onClick={() => setIsLoginSelected(false)}
        >
          Register
        </MDBBtn>
      </div>

      <MDBTabsPane show={justifyActive === "tab1"}>
        <div className="text-center mb-3">
          <p>Sign in with:</p>
          <div className="d-flex justify-content-between mx-auto" style={{ width: "40%" }}>
            <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>
            <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>
            <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>
            <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
          <p className="text-center mt-3">or:</p>
        </div>
        <MDBInput wrapperClass="mb-4" label="Email address" id="form1" type="email" />
        <MDBInput wrapperClass="mb-4" label="Password" id="form2" type="password" />
        <div className="d-flex justify-content-between mx-4 mb-4">
          <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
          <a href="!#">Forgot password?</a>
        </div>
        <div id="signin">
        <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
        </div>
        <p className="text-center">
          Not a member? <a href="#!">Register</a>
        </p>
      </MDBTabsPane>
    </div>
  );
};

export default Login;
