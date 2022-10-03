import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1em;
  tbody {
    tr {
      border: 10px solid white;
      background-color: white;
      border-radius: 8px;
      margin: 30px 0;
      td {
        padding: 20px 0;
        margin: 8px 0;
        .icon {
            background-color: aliceblue;
            border-radius: 50%;
            height: 50px;
            margin: auto;
            border: 1px solid aliceblue;
          }
      }
    }
    tr td:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      text-align: center;
    }

    tr td:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`;
