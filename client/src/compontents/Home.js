import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./css/Home.css";
import { useState,useEffect,useRef } from "react";

const Home = () => {
    const [loaded, setLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
      const image = new Image();
      image.src = require("../photos and icons/photos/document.png");

      image.onload = () => {
        setLoaded(true);
      };
    }, []);
    useEffect(() => {
      const handleScroll = () => {
        const img = imgRef.current;
        if (img) {
          const imgTop = img.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
  
          if (imgTop < windowHeight) {
            setIsVisible(true);
          }
        }
      };
      window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
    
    return (
      <div className="body1">
        <div className="container" id="">
        <img src={require("../photos and icons/icons/Text techies.png")} alt="logo"/>
        <div className="row">
            <div className="headline col-5">
                One stop solve<br/>
                for all your <br/>
                documents<br/>
            </div>
            <div className="col-7">
                <img className={`headphoto ${loaded ? 'show' : ''}`} src={require("../photos and icons/photos/5f68631d2596dddefd5b23a1_Help (2) (1).png")} alt=""/>
            </div>
            <div className="row" style={{paddingLeft: "10%"}}>
                <div className="btn-align">
                        <Link type="button" to="/Sign in" className="col-2 btn1 me-md-5 me-ms-5" style={{backgroundColor: "#004138"}}>Sign In </Link> 
                        <Link type="button" to="/Sign in" className="col-2 btn1" style={{backgroundColor: "rgba(0, 65, 56,0.5)"}}>Sign Up</Link>
                    </div>
              </div>
        </div>
        <br/><br/><br/><br/>
        <div className="row">
            <div className="col-5">
                <h3>
                    Document summarization and simplification.
                </h3>
                Employs advanced document summarization and simplification techniques to distill complex legal texts into concise and understandable summaries, enhancing accessibility and comprehension for users.
            </div>
            <div className="col-6">
                <img className={`headphoto2 ${isVisible ? 'show' : ''}`} src={require("../photos and icons/photos/document.png")} alt="" ref={imgRef}/>
            </div>
        </div>
        <br/><br/><br/><br/>
        <center><h4>Features</h4></center>
        <div className={`row row-cols-1 row-cols-md-3 g-5`}>
            <div className="col">
              <div className="card  features" style={{margin: "5%"}}>
                <img src={require("../photos and icons/photos/image.png")} className="card-img-top" alt="..."/>
                <div className="card-body align-items-stretch">
                  <h5 className="card-title">Chat Bot</h5>
                  <p className="card-text">Your 24/7 instant assistance for seamless browsing and support</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card  features" style={{margin: "5%"}}>
                <img src={require("../photos and icons/photos/image (1).png")} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Collaborative Support</h5>
                  <p className="card-text"> Enables multiple users to simultaneously work on and review legal documents and seamless document collaboration.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card features" style={{margin: "5%"}}>
                <img src={require("../photos and icons/photos/image (2).png")} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Expert Advice</h5>
                  <p className="card-text">Provides access to expert advice for comprehensive legal guidance and insights</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card features" style={{margin: "5%"}}>
                <img src={require("../photos and icons/photos/image (3).png")} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Clause Library</h5>
                  <p className="card-text">Offers a comprehensive clause library for quick access to standardized legal language and provisions</p>
                </div>
              </div>
            </div>
            <div className="col">
                <div className="card features" style={{margin: "5%"}}>
                  <img src={require("../photos and icons/photos/image (4).png")} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Privacy Preservation</h5>
                    <p className="card-text">Prioritizes privacy preservation through robust security measures and data protection protocols</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card features" style={{margin: "5%"}}>
                  <img src={require("../photos and icons/photos/image (5).png")} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Multi-Lingual Support</h5>
                    <p className="card-text">Facilitates multi-lingual support to cater to a diverse user base and global legal needs</p>
                  </div>
                </div>
              </div>
          </div>
          <br/><br/><br/><br/>
    </div>
    <Footer/>
    </div>
);
}
export default Home;
