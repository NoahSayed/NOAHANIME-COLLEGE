import React from "react";
import styled from "styled-components";

const LoginNotice = () => {
  return (
    <Wrapper>
      <Message> This feature requires administrative privileges</Message>
    </Wrapper>
  );
};

export default LoginNotice;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e1e1e, #2c3e50);
  color: white;
`;

const Message = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  max-width: 90%;
  font-weight: bold;
  color: #ffcc00;
  text-shadow: 1px 1px 2px #000;
`;

