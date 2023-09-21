import ChatBot from "./ChatBot";
import "./css/text simp_sum.css"
import Footer from "./Footer";
import NavBar from "./NavBar";
import axios from "axios";
import { useState,useEffect } from "react";
import Sippner from "./Sippner";

const Text_sim_sum = () => {
  const [file, setFile] = useState(null);
  const [summarizedText, setSummarizedText] = useState('');
  const [simplifiedText, setSimplifiedText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [showEllipsis, setShowEllipsis] = useState(false);
  const [showSippner,setShowSippner] = useState(false);
  useEffect(() => {
    const typingSpeed = 10; // Adjust typing speed as needed
    if(simplifiedText===''){
      const typingInterval = setInterval(() => {
        if (typingIndex < summarizedText.length) {
          setDisplayText((prevText) => prevText + summarizedText[typingIndex]);
          setTypingIndex((prevIndex) => prevIndex + 1);
          setShowEllipsis(true);
        } else {
          clearInterval(typingInterval)
          setShowEllipsis(false)
        }
      }, typingSpeed); 
      return () => {
        clearInterval(typingInterval);
      };
    }
    else if(summarizedText===''){
      const typingInterval = setInterval(() => {
        if (typingIndex < simplifiedText.length) {
          setDisplayText((prevText) => prevText + simplifiedText[typingIndex]);
          setTypingIndex((prevIndex) => prevIndex + 1);
          setShowEllipsis(true);
        } else {
          clearInterval(typingInterval)
          setShowEllipsis(false)
        }
      }, typingSpeed); 
      return () => {
        clearInterval(typingInterval);
      };
    }
  }, [summarizedText,typingIndex,simplifiedText]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("selected file", selectedFile );
    setFile(selectedFile);
    setSummarizedText('');
    setSimplifiedText('');
  };

  const handleSummarize = async () => {
    await setShowSippner(true)
    if (file) {
      const formData = new FormData();
      formData.append('pdf', file);
      console.log(`${process.env.REACT_APP_DJANGO_ADDRESS}/summarize/`);
      try {
        let response = await axios.post(`${process.env.REACT_APP_DJANGO_ADDRESS}/summarize/` ,formData,{        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        let summarizedtext = await response.data.summarized_text;
        console.log(formData);
        await setSimplifiedText('')
        await setDisplayText('');
        await setTypingIndex(0);
        await setSummarizedText(summarizedtext);
      } catch (error) {
        console.error('Error summarizing PDF:', error);
      }
    }
    await setShowSippner(false)
  };

  const handleSimplify = async () => {
    await setShowSippner(true);
    if (file) {
      const formData = new FormData();
      formData.append('pdf', file);
      try {
        const response = await axios.post(`${process.env.REACT_APP_DJANGO_ADDRESS}/simplify/`, formData,{headers: {
          'Content-Type': 'multipart/form-data',}
        },);
        const simplifiedtext = response.data.simplified_text;
        await setSummarizedText('');
        await setDisplayText('');
        await setTypingIndex(0);
        await setSimplifiedText(simplifiedtext);
      } catch (error) {
        console.error('Error simplifying PDF:', error);
      }
    }
    await setShowSippner(false)
  };

  const fetchTranslatedContent = async (selectedLanguage) => {
    try {
      // Ensure selectedLanguage is valid here
  
      const requestData = {
        text: simplifiedText || summarizedText,
        lang: selectedLanguage,
      };
  
      const response = await axios.post(`${process.env.REACT_APP_DJANGO_ADDRESS}/translator/`, requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data.translatedContent)
  
      if (response.status === 200) {
        await setSummarizedText('');
        await setDisplayText('');
        await setTypingIndex(0);
        await setSimplifiedText(response.data.translatedContent);
      } else {
        console.error('Unexpected status code:', response.status);
      }
    } catch (error) {
      console.error('Error fetching translated content:', error);
    }
    console.log(selectedLanguage)
  };
    return (
        <div style={{backgroundColor: "#eaf3f8"}}>
        <NavBar/>
        <div style={{height: "20px"}}></div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <label className="drop-container" id="dropcontainer">
              <span className="drop-title"><h3><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-file-arrow-up" viewBox="0 0 16 16">
                <path d="M8 11a.5.5 0 0 0 .5-.5V6.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7.5 6.707V10.5a.5.5 0 0 0 .5.5z"/>
                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
              </svg>Drop files here</h3></span>
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
          {showSippner && <Sippner/>}
          {!showSippner && <div style={{display: "flex",justifyContent: "right"}}>
          <div className="dropdown" style={{width: "30%"}}>
            <div className={`btn btn-secondary dropdown-toggle ${displayText===''?'disabled':''}`} style={{width: "100%"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-translate" viewBox="0 0 16 16">
              <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
              <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
            </svg> language
            </div>
            <ul className="dropdown-menu" style={{ width: "100%" }}>
              <li><button className="dropdown-item" onClick={() => fetchTranslatedContent('hi')}>Hindi</button></li>
              <li><button className="dropdown-item" onClick={() => fetchTranslatedContent('mr')}>Marathi</button></li>
              <li><button className="dropdown-item" onClick={() => fetchTranslatedContent('kn')}>Kannada</button></li>
              <li><button className="dropdown-item" onClick={() => fetchTranslatedContent('te')}>Telugu</button></li>
              <li><button className="dropdown-item" onClick={() => fetchTranslatedContent('ta')}>Tamil</button></li>
              <li><button className="dropdown-item" onClick={() => fetchTranslatedContent('bn')}>Bengali</button></li>
            </ul>
            </div>
            </div>}
          <div className="input-text" style={{color: "black",backgroundColor: "#fff"}}>{displayText || 'Summarized and Simplified document will be displayed here...'}{showEllipsis && '|'}</div>
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