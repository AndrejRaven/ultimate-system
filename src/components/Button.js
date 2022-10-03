import styled from "styled-components";

export const Button = styled.button`
  padding: 16px;
  border: 1px solid #293672;
  font-size: 1rem;
  border-radius: 5px;
  color: #293672;
  width: 100%;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #293672;
  }
`;

export const SecondaryButton = styled(Button)`
  padding: 8px 16px;
  min-width: 150px;
  max-width: 250px;
  border-radius: 14px;
  font-weight: 700;
  color: #222;
`;
