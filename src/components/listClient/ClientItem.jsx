import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import formOperations from "../../redax/form-operation";
import { useState } from "react";

import css from "./ListClient.module.css";

export const ClientItem = ({ item, isModalClick }) => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    dispatch(formOperations.deleteClient(item._id));
  };

  const onClickModal = (e) => {
    e.preventDefault();
    setIsModal(true);
    isModalClick(isModal, item)
  };

  console.log(isModal);
  return (
    <>
      <td>{item.name}</td>

      <td>{item.ipn}</td>

      <td>{item.tel}</td>

      <td>{item.credit}</td>

      <td>{item.targetCredit}</td>

      <td>{item.sum}</td>

      <td>{item.intrest}</td>
      <div className={css.btn}>
        <button type="button" onClick={onClickModal} className={css.button}>
          Змінити
        </button>

        <button type="button" onClick={onClick} className={css.button}>
          Видалити
        </button>
      </div>
    </>
  );
};

ClientItem.propTypes = {
  item: PropTypes.object,
  isModalClick: PropTypes.func
};
