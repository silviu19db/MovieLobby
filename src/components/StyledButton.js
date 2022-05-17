import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  width: 115px;
  padding: 10px 20px;
  border-radius: 20px;
  font: normal normal 16px;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  background: #e9f6ff;
  margin-left: 15px;

  @media screen and (min-width: 481px) {
    margin-left: 38px;
  }
`;
