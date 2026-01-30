import { Link } from "react-router";
import styled from "styled-components";
import bgimg from "../assets/img.jpg";
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  background-color: green;
  :hover {
    text-decoration: underline;
    color: blue;
  }
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const BgImg = styled.div`
  background-image: url(${bgimg});
  height: 700px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const PropsBtn = styled.button`
  background-color: white;
  background-color: ${(props) => (props.$primary ? "pink" : "white")};
  font-size: lem;
  margin: 10px;
  height: ${(props) => (props.$secondary ? "70px" : "")};
  /* padding: 0%.25em lem; */
  padding: ${(props) => (props.$primary ? "7px 40px" : "7px 20px")};
  border: 2px solid #bf4f74;
  border-radius: 3px;
  color: ${(props) => (props.$primary ? "white" : "#bf4f74")};
`;
