import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import HagridTrialMedium from './fonts/Hagrid-Medium-trial.woff2';
import HagridTrialExtrabold from './fonts/Hagrid-Extrabold-trial.woff2';
import HagridTrialHeavy from './fonts/Hagrid-Heavy-trial.woff2';
import HagridTextTrialMedium from './fonts/Hagrid-Text-Medium-trial.woff2';
import HagridTextTrialBold from './fonts/Hagrid-Text-Bold-trial.woff2';
import HagridTextTrialExtrabold from './fonts/Hagrid-Text-Extrabold-trial.woff2';
import SoyuzGrotesk from './fonts/soyuz-grotesk-bold.woff2';
import eUkraineLight from './fonts/e-Ukraine-Light.woff2';
import eUkraineRegular from './fonts/e-Ukraine-Regular.woff2';
import eUkraineMedium from './fonts/e-Ukraine-Medium.woff2';
import eUkraineBold from './fonts/e-Ukraine-Bold.woff2';
import eUkraineHeadRegular from './fonts/e-UkraineHead-Regular.woff2';
import eUkraineHeadBold from './fonts/e-UkraineHead-Bold.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Hagrid Trial';
    src: url(${HagridTrialMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Hagrid Trial';
    src: url(${HagridTrialExtrabold}) format('woff2');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Hagrid Trial';
    src: url(${HagridTrialHeavy}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Hagrid Text Trial';
    src: url(${HagridTextTrialMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Hagrid Text Trial';
    src: url(${HagridTextTrialBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Hagrid Text Trial';
    src: url(${HagridTextTrialExtrabold}) format('woff2');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Soyuz Grotesk';
    src: url(${SoyuzGrotesk}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'eUkraine';
    src: url(${eUkraineLight}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'eUkraine';
    src: url(${eUkraineRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'eUkraine';
    src: url(${eUkraineMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'eUkraine';
    src: url(${eUkraineBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'eUkraine Head';
    src: url(${eUkraineHeadRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'eUkraine Head';
    src: url(${eUkraineHeadBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  &.hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  /* *::-webkit-scrollbar {
    width: 8px;
  }


  *::-webkit-scrollbar-track {
    
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.4);
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #ec7246; 
  } */

  body {
    background-color: #AB7CE9;
    font-family: "eUkraine", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #ffffff;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a, button {
    cursor: pointer;
  }

  html {
    scroll-behavior: smooth;
  }`;
