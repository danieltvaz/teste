import { SpacerProps } from "./types";
import styled from "styled-components";

export const Spacer = styled.div.attrs<SpacerProps>((props) => ({
  style: {
    flexDirection: props.direction,
  },
}))`
  display: flex;
`;
