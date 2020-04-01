import React from 'react';

import { Redirect } from 'react-router-dom';
import {
  Background,
  DarkOverlay,
  AuthorName,
  LoginForm,
  TextField,
  Label,
  InputWrapper
} from '../../styles/componentStyles/Login/login';

import { Button, Quote } from '../../styles/applicationStyles/appComponents';

const Login = () => {
  const onChange = () => {
    console.log('Hello');
  };

  const onSubmit = () => {
    return <Redirect to="/genreDetails" />;
  };
  return (
    <Background>
      <DarkOverlay>
        <LoginForm>
          <h2
            style={{
              textAlign: 'center',
              color: 'white',
              marginTop: '10px'
            }}
          >
            Please!
          </h2>
          <InputWrapper>
            <TextField name="username" value="" onChange={onChange} />
            <Label>Username</Label>
          </InputWrapper>
          <InputWrapper>
            <TextField name="password" value="" onChange={onChange} />
            <Label>Password</Label>
          </InputWrapper>
          <Button to="/genreDetails" style={{ top: '5%' }}>
            Let's Go
          </Button>
        </LoginForm>
        <Quote>
          "The question is not who is going to let me, Question is who is going
          to stop me!"
          <AuthorName>Fyodor Dostovsky</AuthorName>
        </Quote>
      </DarkOverlay>
    </Background>
  );
};

export default Login;
