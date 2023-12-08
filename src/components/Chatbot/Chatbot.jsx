import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    console.log(isChatOpen)
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  const handleSendMessage = () => {
    const message = userInput.trim();
    if (message === '') return;

    // Add user message to the messages state
    setMessages([...messages, { text: message, sender: 'user' }]);
    // console.log(messages)

    setUserInput('');

    // Send the user message to the server
    fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: new URLSearchParams({ userInput: message }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        // Add bot's response to the messages state
        setMessages([...messages,  { text: message, sender: 'user' },{ text: data.response, sender: 'bot' }]);
        // console.log(messages)
      })
      .catch((error) => console.error('Error sending message:', error));
  };

  return (
    <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      <div className="chat-button1" onClick={toggleChat}>
        <i className="material-icons chat">chat</i>
      </div>

      <div className={`chat-container1 ${isChatOpen ? 'opened' : 'ji'}`}>
        <div className="chat-header1">
          <div id="online-status1"></div>
          <div id="toolbar-title1">ACGCET-Assistant</div>
          <span className="minimise-button1" onClick={closeChat}>
            <i className="material-icons chat-close">close</i>
          </span>
        </div>

        <div className="chat-messages1">
          {messages.map((message, index) => (
            <p
            dangerouslySetInnerHTML={{ __html:message.text }}
              key={index}
              className={`message-bubble1 ${message.sender}-message`}
            >
              {/* {message.text} */}
            </p>
          ))}
        </div>
        <div className='chat-bottom'>
        {/* <div id="dev-message1">
          <a className="dev-link1" href="https://accet.ac.in/webdev-team">
            Created and maintained by cse students
          </a>
        </div> */}

        <div className="chat-input1">
          <input
            type="text"
            id="chat-input1"
            // placeholder="Hi, How can I help you?"
            placeholder="Ask a question..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button className="material-icons" id="send-button1" onClick={handleSendMessage}>
            send
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
