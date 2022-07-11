import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="container" id="mainDiv">
        <div className="container" id="subDiv">
          <div className="container" id="darkimg">
            <div id="logodiv">
              <img id="logoimg" src="./Assets/Artboard@2x.png" className="img-thumbnail" alt="no"/>

              <div  id="card" className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
  <div id="loginH" className="card-header bg-transparent border-success">Login</div>
  <div className="card-body text-success">
    <h5 className="card-title">
      
    </h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
  <div className="card-footer bg-transparent border-success">Footer</div>
</div>

            </div>
                
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Login;
