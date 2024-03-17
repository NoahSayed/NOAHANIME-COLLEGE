import React, { useState } from 'react';
import styled from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

// Conversation steps for the chatbot
const steps = [
  {
    id: "Greet",
    message: "Hello, Welcome!",
    trigger: "Done",
  },
  {
    id: "Done",
    message: "Please enter your name!",
    trigger: "waiting1",
  },
  {
    id: "waiting1",
    user: true, // User input step
    trigger: "Name",
  },
  {
    id: "Name",
    message: "Hi {previousValue}, How can I help you today?",
    trigger: "issues",
  },
  {
    id: "issues",
    options: [
      {
        value: "React",
        label: "React Development Issue",
        trigger: "React",
      },
      { value: "Angular", label: "Angular Development Issue", trigger: "Angular" },
      { value: "General Inquiry", label: "General Inquiry", trigger: "Inquiry" },
    ],
  },
  {
    id: "React",
    message:
      "Thanks for letting us know about your React issue. Our team will get in touch with you shortly to assist.",
    end: true, // End of conversation
  },
  {
    id: "Angular",
    message:
      "Thanks for letting us know about your Angular issue. Our team will get in touch with you shortly to assist.",
    end: true,
  },
  {
    id: "Inquiry",
    message:
      "Please tell us more about your inquiry and we'll do our best to help!",
    trigger: "moreInfo",
  },
  {
    id: "moreInfo",
    user: true, // User input step for more details
    trigger: "inquiryResponse",
  },
  {
    id: "inquiryResponse",
    message:
      "Thank you for the additional information. We'll get back to you as soon as possible. In the meantime, you can explore our resources section for helpful articles!",
    end: true,
  },
];

function Chatbot() {
  return (
    <ChatbotContainer> {/* New container for styling */}
       <ChatBot
        steps={steps}
         // Override defaults
        // Additional customization options (optional)
         botAvatar="/images/naruto.jpg" // If using an avatar image
        // botBubbleColor="#FFE0CC" // Chat bubble color
        // userBubbleColor="#F0F8FF" // User message bubble color
      />
    </ChatbotContainer>
  );
}

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 0; {/* Set bottom to 0 */}
  right: 20px; {/* Adjust as needed */}
  width: 300px; {/* Set a width */}
  background-color: #fff; {/* Set background color */}
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); {/* Add a shadow */}
  z-index: 10; {/* Ensure it's above other elements */}
`;


export default Chatbot;
