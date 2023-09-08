import styled from "styled-components";

export const OgnenContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  font-size: 20px;

  span {
  }

  &:hover {
    background-color: blue;
  }
`;
