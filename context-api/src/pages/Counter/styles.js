import styled, { css } from "styled-components";

export const CounterText = styled.span`
  ${({ isEven }) =>
    isEven
      ? css`
          color: red;
          border-bottom: 1px solid black;
        `
      : css`
          color: blue;
          border-right: 1px solid black;
        `}
  &:hover {
    background-color: green;
  }
  @media (min-width: 720px) {
    font-size: 40px;
  }
  /* color: ${({ isEven }) => (isEven ? "red" : "blue")}; */
`;
