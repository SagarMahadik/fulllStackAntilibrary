import styled from 'styled-components';
import landingBackground from '../../../img/landing.jpg';

/**
 * File Name: login.js
 * These are styles used for the Antilibrary landing page
 * Tasks pending : Background image is to be randomized
 * Possible implications on other components: Colors chosen for the components might require change
 */

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${landingBackground}) no-repeat center center/cover;
  position: relative;
`;

export const DarkOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const AuthorName = styled.h2`
  font-size: 1.1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  height: auto;
`;

export const LoginForm = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 300px;
  background: rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 10px;
`;

export const TextField = styled.input`
  width: 100%;
  padding: 0.625rem 0;
  font-size: 1.2rem;
  color: #fff;
  letter-spacing: 0.062rem;
  margin-bottom: 1.875rem;
  border: none;
  border-bottom: 0.065rem solid #fff;
  outline: none;
  background: transparent;
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.4rem 0.5rem;
  font-size: 1.2rem;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;

  ${TextField}:focus ~ &,
  ${TextField}:not([value=""]) ~ & {
    top: -1.125rem;
    left: 0;
    color: #e2c18b;
    font-size: 1.1rem;
  }
`;

export const InputWrapper = styled.label`
  position: relative;
`;
