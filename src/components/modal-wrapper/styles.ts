import styled from "styled-components";

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 600px;
  height: 800px;
  box-shadow: 5px 5px 100px rgba(255, 255, 255, 0.5);
  padding: 24px;
  border-radius: 20px;
`;

export const OuterWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;
