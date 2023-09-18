import "./css/Chat bot.css"
import { useState } from "react";
import logo from '../photos and icons/icons/chatbox-icon.svg'
const ChatBot = () => {
        const [state, setState] = useState(false);
      
        const toggleState = () => {
          setState(!state);
        };
    return (
        <div class="chatbox_container">
            <div class={`chatbox`}>
                        <div>
                        <iframe class={`chatbox chatbox__support ${state ? 'chatbox--active' : ''}`} src="http://localhost:8000" width="400" height="500" title="chat box"></iframe>
                        </div>
                <div class="chatbox__button">
                    <button><img src={logo} onClick={toggleState} alt="..."/></button>
                </div>
            </div>
    </div>
    )
}
export default ChatBot;