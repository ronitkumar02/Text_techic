import { Link } from "react-router-dom";
import "./css/Footer.css"

const Footer = () => {
    return (
        <footer className="new_footer_area bg_color">
    <div className="new_footer_top">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft"}}>
                        <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                        <p>Don’t miss any updates of our new templates and extensions.!</p>
                        <form action="#" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                            <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"/>
                            <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                            <p className="mchimp-errmessage" style={{display: "none;"}}></p>
                            <p className="mchimp-sucmessage" style={{display: "none"}}></p>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft"}}>
                        <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                        <ul className="list-unstyled f_list">
                            <li><a href="#home">Company</a></li>
                            <li><a href="#home">Android App</a></li>
                            <li><a href="#home">ios App</a></li>
                            <li><a href="#home">Desktop</a></li>
                            <li><a href="#home">Projects</a></li>
                            <li><a href="#home">My tasks</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft"}}>
                        <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                        <ul className="list-unstyled f_list">
                            <li><a href="#home">FAQ</a></li>
                            <li><a href="#home">Term &amp; conditions</a></li>
                            <li><a href="#home">Reporting</a></li>
                            <li><a href="#home">Documentation</a></li>
                            <li><a href="#home">Support Policy</a></li>
                            <li><a href="#home">Privacy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft"}}>
                        <h3 className="f-title f_600 t_color f_size_18">Team Members</h3>
                        <div className="f_social_icon">
                            <Link to="#home" className="fab fa-facebook"></Link>
                            <Link to="#home" className="fab fa-twitter"></Link>
                            <Link to="#home" className="fab fa-linkedin"></Link>
                            <Link to="#home" className="fab fa-pinterest"></Link>
                            <Link to="#home" className="fab fa-pinterest"></Link>
                            <Link to="#home" className="fab fa-pinterest"></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div className="footer_bg">
        </div>
    </div>
    <div className="footer_bottom">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-sm-7">
                    <p className="mb-0 f_400">© cakecounter Inc.. 2019 All rights reserved.</p>
                </div>
                <div className="col-lg-6 col-sm-5 text-right">
                    <p>Made with <i className="icon_heart"></i> in <Link to="hhomettp://cakecounter.com" target="_blank">CakeCounter</Link></p>
                </div>
            </div>
        </div>
    </div>
</footer>
);
}

export default Footer;