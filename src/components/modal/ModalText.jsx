import modalCss from "./Modal.module.css";
import PropTypes from "prop-types";
//import { useDispatch } from "react-redux";
//import formOperations from "../../redax/form-operation";

export const ModalText = ({ item, onClose, onClick }) => {

  const onChange = (e) => {
    e.preventDefault();
    onClick(e.target.value);
    console.log(e.target.value);
  };

  const onClickClose = (e) => {
    e.preventDefault();
    onClose(false);
  };

  return (
    <div className={modalCss.boxText}>
      <button
        className={modalCss.btnClose}
        type="button"
        onClick={onClickClose}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 8L22 22" stroke="black" strokeWidth="2" />
          <path d="M8 22L22 8" stroke="black" strokeWidth="2" />
        </svg>
      </button>
      {item ? (
        <textarea
          className={modalCss.area}
          onChange={onChange}
          value={item.textNote}
        ></textarea>
      ) : (
        <textarea className={modalCss.area} onChange={onChange}></textarea>
      )}
    </div>
  );
};
ModalText.propTypes = {
  onClose: PropTypes.func,
  item: PropTypes.object,
  onClick: PropTypes.func,
};
