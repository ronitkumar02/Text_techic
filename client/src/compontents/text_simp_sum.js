import ChatBot from "./ChatBot";
import "./css/text simp_sum.css"
import Footer from "./Footer";
import NavBar from "./NavBar";
import axios from "axios";
import { useState } from "react";

const Text_sim_sum = () => {
  const [file, setFile] = useState(null);
  const [summarizedText, setSummarizedText] = useState('');
  const [simplifiedText, setSimplifiedText] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("selected file", selectedFile );
    setFile(selectedFile);
    setSummarizedText('');
    setSimplifiedText('');
  };

  const handleSummarize = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('pdf', file);
      try {
        const response = await axios.post('/summarize', formData);
        const summarizedtext = response.data;
        setSimplifiedText('');
        setSummarizedText(summarizedtext);
      } catch (error) {
        console.error('Error summarizing PDF:', error);
      }
    }
  };

  const handleSimplify = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('pdf', file);

      try {
        const response = await axios.post('/simplify', formData);
        const simplifiedtext = response;
        await setSummarizedText('');
        await setSimplifiedText(simplifiedtext);
      } catch (error) {
        console.error('Error simplifying PDF:', error);
      }
    }
  };
    return (
        <div style={{backgroundColor: "#f2fcfb"}}>
        <NavBar/>
        <div style={{height: "20px"}}></div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <label className="drop-container" id="dropcontainer">
              <span className="drop-title"><h3><i className="bi bi-file-arrow-up"></i>Drop files here</h3></span>
              or
              <input className="input1" type="file" id="images" tname="upload" accept="application/pdf,application/vnd.ms-excel" required onChange={handleFileChange}/>
            </label>
            <br/>
        </div>
              <div className="col-3 btn-grp">
                <button type="submit" className="btn btn-primary" style={{width: "100%"}} value="Summarize" onClick={handleSummarize}>Summarize</button>
              </div>
              <div className="col-3 btn-grp">
                <button type="submit" className="btn btn-primary" style={{width: "100%"}} value="Simplify" onClick={handleSimplify}>Simplify</button>
              </div>
          </div>
          <div style={{height: "20px"}}></div>
          <div className="input-text" style={{color: "black"}}>{summarizedText || simplifiedText || 'Summarized and Simplified document will be displayed here...'}</div>
          <div style={{height: "20px"}}></div>
          <center>
            <h2>Summarize any text with a click of a button</h2>
              <h5 style={{width: "50%"}}>QuillBot's Summarizer can condense articles, papers, or documents down to the key points instantly. Our AI uses natural language processing to locate critical information while maintaining the original context.</h5>
              <br/>
            <table className="table">
              <tbody>
                <tr>
                  <td>⌛  AI-powered</td>
                  <td>Quickly extracts key points</td>
                </tr>
                <tr style={{border: "2px solid"}}>
                  <td>📕  Summarizes</td>
                  <td>Essays, papers & documents</td>
                </tr>
                <tr style={{border: "2px solid"}}>
                  <td>💰100% free</td>
                  <td>Unlimited summarization</td>
                </tr>
              </tbody>
            </table>
          </center>
          </div>
          <Footer/>
          <ChatBot/>
        </div>
    );
}

export default Text_sim_sum;