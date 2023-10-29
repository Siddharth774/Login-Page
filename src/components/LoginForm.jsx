import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #a18cd1, #fbc2eb);
  @media (max-width: 768px) {
    width: 100%;
`;

const FormContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 400px;
  width: 90%;
  
`;

const Title = styled.h1`
  background: #fbc2eb;
  color: #fff;
  padding: 15px;
  text-align: center;
  margin: 0;
`;

const Form = styled.form`
  padding: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: none;
  background: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #a18cd1;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background: #8246a4;
  }
`;

const LoginForm = () => {
  return (
    <Container>
      <FormContainer>
        <Title>Login</Title>
        <Form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <SubmitButton type="submit">Log In</SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default LoginForm;