import NavBar from "./NavBar";

const TemplateLibrary = () => {
    return (
        <>
        <NavBar/>
        <div style={{height: "20px"}}></div>
        <div className="container">
            <center><h1>Find templates you can trust</h1>
            <div style={{height: "20px"}}></div>
            <div class="row">
                <div class="col-12 col-md-2 mb-2">
                    <button type="button" class="btn btn-primary btn-block" style={{width: "100%"}}>COMMERCIAL</button>
                </div>
                <div class="col-12 col-md-2 mb-2">
                    <button type="button" class="btn btn-primary btn-block" style={{width: "100%"}}>EMPLOYMENT</button>
                </div>
                <div class="col-12 col-md-2 mb-2">
                    <button type="button" class="btn btn-primary btn-block" style={{width: "100%"}}>ADMINISTRATION</button>
                </div>
                <div class="col-12 col-md-2 mb-2">
                    <button type="button" class="btn btn-primary btn-block" style={{width: "100%"}}>FINANCE</button>
                </div>
                <div class="col-12 col-md-2 mb-2">
                    <button type="button" class="btn btn-primary btn-block" style={{width: "100%"}}>CONSUMER</button>
                </div>
                <div class="col-12 col-md-2 mb-2">
                    <button type="button" class="btn btn-primary btn-block" style={{width: "100%"}}>R&D</button>
                </div>
                </div>
            </center>
        </div>
        </>
    )
}
export default TemplateLibrary;
