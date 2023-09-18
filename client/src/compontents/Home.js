import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./css/Home.css";

const Home = () => {
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
                <img className="headphoto" src={require("../photos and icons/photos/5f68631d2596dddefd5b23a1_Help (2) (1).png")} alt=""/>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, tempore ratione veritatis accusamus nisi obcaecati fuga magnam nostrum optio exercitationem esse itaque tenetur omnis quo ducimus velit eos quasi iure.
            </div>
            <div className="col-6">
                <img className="headphoto" src={require("../photos and icons/photos/document.png")} alt=""/>
            </div>
        </div>
        <br/><br/><br/><br/>
        <div className="row row-cols-1 row-cols-md-3 g-5">
            <div className="col">
              <div className="card" style={{margin: "5%"}}>
                <img src={require("../photos and icons/photos/image.png")} className="card-img-top" alt="..."/>
                <div className="card-body align-items-stretch">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{margin: "5%"}}>
                <img src={require("../photos and icons/photos/image (1).png")} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{margin: "5%"}}>
                <img src={require("../photos and icons/photos/image (2).png")} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{margin: "5%"}}>
                <img src={require("../photos and icons/photos/image (3).png")} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
                <div className="card" style={{margin: "5%"}}>
                  <img src={require("../photos and icons/photos/image (4).png")} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" style={{margin: "5%"}}>
                  <img src={require("../photos and icons/photos/image (5).png")} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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