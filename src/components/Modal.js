import ReactDOM from "react-dom";
import styled from "styled-components";
import Backdrop from "./Backdrop";

const Modal = styled.div`
  z-index: 100;
  position: fixed;
  top: 22vh;
  left: 10%;
  width: 80%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
  .close-icon {
    position: absolute;
    right: -10px;
    top: -10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #bfbfbf;
    color: #bfbfbf;
    transition: 0.3s;
    &:hover {
      border: 1px solid gray;
      color: gray;
    }
  }
`;

const ModalOverlay = (props) => {
  const content = (
    <Backdrop>
      <Modal>
        {props.children}
      </Modal>
    </Backdrop>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

export default ModalOverlay;
