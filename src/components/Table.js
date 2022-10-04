import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1em;
`;

export const Row = styled.tr`
  border: 10px solid white;
  background-color: white;
  border-radius: 8px;
  margin: 30px 0;
`;

export const Col = styled.td`
  padding: 10px 0;
  margin: 8px 0;
  .icon {
    margin: 0 auto;
    background-color: lightblue;
    border: 1px solid lightblue;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    p {
      margin: 8px auto;
    }
  }
  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    text-align: center;
  }

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
