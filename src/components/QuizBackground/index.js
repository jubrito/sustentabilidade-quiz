import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import UseWindowSize from '../UseWindowSize';

const fadeIn = keyframes`
  0%   {background-color: black;}
  25%  {background-color: rgb(0 0 0 / 80%);}
  75%  {background-color: rgb(0 0 0 / 50%);}
  100%  {background-color: rgb(0 0 0 / 40%);}
`;

const fadeOut = keyframes`
  0%   {background-color: rgb(0 0 0 / 40%);}
  25%   {background-color: rgb(0 0 0 / 30%);}
  75%   {background-color: rgb(0 0 0 / 10%);}
  100%  {background-color: none;}
`;

const QuizBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  height: 100vh; //Fallback for browsers that do not support Custom Properties
  height: ${({height}) => height}px;
  position: relative;
  flex: 1;
  z-index: 1;
  opacity: 1;
  transition: all 1000s linear;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transition: background 1000s linear;
    background: ${({isHomepage}) => isHomepage ? 'rgb(0 0 0 / 40%)' : 'transparent'};
    pointer-events: none;
    top: 0;
    left: 0;
    /* opacity: ${({isHomepage}) => (isHomepage ? 0.4 : 0)}; */
    animation: ${({isHomepage}) => isHomepage ? fadeIn : fadeOut} 1s linear;
  }

  @media screen and (max-width: 1024px) {
    min-height: 1360px;
  }
  @media screen and (max-width: 768px) {
    min-height: 1024px;
    height: max-content;
  }
  @media screen and (max-width: 767px) {
    height: 100%;
  }
`;

export default QuizBackground;
