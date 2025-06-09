import React, { Component } from "react";
import "./index.css";
import Messages from '../Messages'
class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: JSON.parse(localStorage.getItem("chatMessages")) || [], // Load saved messages
      input: "",
    };
  }

  // Save messages to localStorage for session continuity
  saveMessagesToStorage = (messages) => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  };

  // Handle input changes
  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  // Add a new message and simulate chatbot response
  handleSendMessage = () => {
    const { input, messages } = this.state;
    if (input.trim() !== "") {
      const timestamp = new Date().toLocaleTimeString();

      const newMessages = [
        ...messages,
        { text: input, sender: "user", timestamp },
      ];
      this.setState({ messages: newMessages, input: "" }, () => {
        this.saveMessagesToStorage(newMessages);

        // Simulate chatbot response
        setTimeout(() => {
          const botResponse = {
            text: "This is a chatbot response.",
            sender: "bot",
            timestamp: new Date().toLocaleTimeString(),
          };
          const updatedMessages = [...this.state.messages, botResponse];
          this.setState({ messages: updatedMessages }, () => {
            this.saveMessagesToStorage(updatedMessages);
          });
        }, 1000);
      });
    }
  };

  // Reset conversation
  handleResetConversation = () => {
    this.setState({ messages: [] }, () => {
      localStorage.removeItem("chatMessages"); // Clear storage
    });
  };

  render() {
    const { messages, input } = this.state;

    return (
      <div className="chatbot-container">
        <div className="chat-display">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === "user" ? "user" : "bot"}`}
            >
              <span className="timestamp">{msg.timestamp}</span>
              <p>{msg.text}</p>
              <Messages/>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={this.handleInputChange}
            placeholder="Type a message..."
          />
          <button onClick={this.handleSendMessage}>Send</button>
          <button onClick={this.handleResetConversation} className="reset-button">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Chatbot;
