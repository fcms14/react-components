import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { theme } from "../../../providers/theme";

const MarkDownStyle = styled.div`
  background-color: #f9f9f9;
  padding: ${theme.padding.main};
  border-radius: ${theme.gap};
  border: ${theme.border}  #e0e0e0;
  font-family: 'Arial', sans-serif;
  font-size: ${theme.fontsizes.title.smaller};
  line-height: 1.6;
  color: #333;
  max-height: 550px;
  overflow-y: auto;

  h1, h2, h3 {
    color: #222;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }

  p {
    margin: 0.8em 0;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  code {
    background-color: #f0f0f0;
    padding: 2px 4px;
    border-radius:${theme.radius};
    font-family: 'Courier New', monospace;
  }

  pre {
    background-color: #f0f0f0;
    padding: ${theme.padding.header};
    border-radius: ${theme.radius};
    overflow-x: auto;
  }
`;


export default MarkDownStyle;
