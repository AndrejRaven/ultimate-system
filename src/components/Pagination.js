import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  div {
    width: 20px;
    margin: 10px;
    text-align: center;
    border-radius: 50%;
    &.active {
      color: wheat;
      background-color: black;
    }
    &:hover {
      background-color: grey;
    }
  }
`;
