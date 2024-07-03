import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import formOperations from "../../redax/form-operation";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import css from "./ListClient.module.css";

export const ClientItem = ({ item, isModalClick, onClickNotify }) => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    dispatch(formOperations.deleteClient(item._id));
    onClickNotify();
  };

  const onClickModal = (e) => {
    e.preventDefault();
    setIsModal(true);
    isModalClick(isModal, item);
  };
  console.log(isModal);
  return (
    <>
      <td data-label="Відділення">{item.departmentNum}</td>
      <td data-label="ПІБ">{item.name}</td>

      <td data-label="ІПН">{item.ipn}</td>

      <td data-label="Телефон">{item.tel}</td>

      <td data-label="Вид кредиту">{item.credit}</td>

      <td data-label="Ціль кредиту">{item.targetCredit}</td>

      <td data-label="Сума кредиту">{item.sum}</td>

      <td data-label="Зацікавленість">{item.intrest}</td>
      <td className={css.btn} data-label="Дії">
        <button type="button" onClick={onClickModal} className={css.button}>
          Змінити
        </button>

        <button type="button" onClick={onClick} className={css.button}>
          Видалити
        </button>
      </td>
    </>
  );
};

ClientItem.propTypes = {
  item: PropTypes.object,
  isModalClick: PropTypes.func,
  onClickNotify: PropTypes.func,
};
