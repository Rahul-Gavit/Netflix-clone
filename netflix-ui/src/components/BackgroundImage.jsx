import React from "react";
import styled from "styled-components";
import background from "../assets/login.jpg";

export default function BackgroundImage() {
  return <Container />;
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
`;
