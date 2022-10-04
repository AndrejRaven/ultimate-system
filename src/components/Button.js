import styled from "styled-components";

export const Button = styled.button`
  padding: 16px;
  background-color: ${({ variant }) =>
    (variant === "outlined" && "transparent") || "white"};
  border: ${({ variant }) =>
    (variant === "outlined" && "none") || "1px solid #293672"};
  font-size: 1rem;
  border-radius: 0.25rem;
  color: #293672;
  width: ${({ fullWidth }) => fullWidth && "100%"};
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    color: ${({ variant }) => (variant === "outlined" && "grey") || "white"};
    background-color: ${({ variant }) =>
      (variant === "outlined" && "transparent") || "#293672"};
  }
`;

export const SecondaryButton = styled(Button)`
  padding: 8px 16px;
  border-radius: 0.5rem;
  font-weight: 700;
  color: #222;
`;

export const FilledButton = styled(Button)`
  background-color: #293672;
  color: white;
  border-radius: 0.5rem;
  padding: 0 50px;
  &:hover {
    opacity: 0.8;
  }
`;
