import classes from "./Modal.module.css";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalContainer = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes["modal-content"]}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      ReactDOM.createPortal(
      <Backdrop onClick={props.onClose} />
      ,document.getElementById("overlays")) ReactDOM.createPortal(
      <ModalContainer>{props.children}</ModalContainer>
      document.getElementById("overlays"))
    </Fragment>
  );
};

export default Modal;
