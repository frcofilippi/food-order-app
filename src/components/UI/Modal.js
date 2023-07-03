import Button from "./Button";
import classes from "./Modal.module.css";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalContainer = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes["modal-content"]}>{props.children}</div>
      <div className={classes["modal-actions"]}>
        <Button label={"Order"} />
        <Button label={"Cancel"} isCancel={true} />
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      ReactDOM.createPortal(
      <Backdrop />
      ,document.getElementById("overlays")) ReactDOM.createPortal(
      <ModalContainer>{props.children}</ModalContainer>,
      document.getElementById("overlays"))
    </Fragment>
  );
};

export default Modal;
