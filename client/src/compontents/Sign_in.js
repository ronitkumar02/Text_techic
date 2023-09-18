import { Link } from "react-router-dom";
import "./css/Sign_In.css"
import { useState } from "react";
// import { PathRouteProps } from "react-router-dom";
const Sign_in = (state) => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(state.sign_in);

    const handleSignUpClick = () => {
      setIsRightPanelActive(true);
    };
  
    const handleSignInClick = ()=> {
      setIsRightPanelActive(false);
    };

    return (
        <div style={{boxSizing: "border-box"}} className="body2">
        <div className={`container1 ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container1">
        <div className={`form-container sign-up-container`}>
            <form className="form1"action="#">
                <h2 className="h21">Create Account</h2>
                <div className="social-container">
                    Sign Up using google
                    <a href="#home" className="social"><i className="fab fa-facebook-f"></i></a>
                </div>
                <span className="span1">or use your email for registration</span>
                <input className="input1" type="text" placeholder="Name" />
                <input className="input1" type="email" placeholder="Email" />
                <input className="input1" type="password" placeholder="Password" />
                <button className="button1">Sign Up</button>
            </form>
        </div>
        <div className={`form-container sign-in-container`}>
            <form className="form1"action="#">
                <h2 className="h21">Sign in</h2>
                <div className="social-container">
                    Sign In using google
                    <a href="#facebook" className="social"><i className="fab fa-facebook-f"></i></a>
                </div>
                <span>or use your account</span>
                <input className="input1" type="email" placeholder="Email" />
                <input className="input1" type="password" placeholder="Password" />
                <br/>
                <Link to="/text simplification and summarization">
                <button className="button1">Sign In</button>
                </Link>
            </form>
        </div>
        <div className="overlay-container">
            <div className={`overlay`}>
                <div className="overlay-panel overlay-left">
                    <h2 className="h21">Welcome Back!</h2>
                    <p className="p1">To keep connected with us please login with your personal info</p>
                    <button className="button1 ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h2 className="h21">Hello, Friend!</h2>
                    <p>Enter your personal details and start journey with us</p>
                    <button className="button1 ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
} 

export default Sign_in;