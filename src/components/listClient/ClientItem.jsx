import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import formOperations from "../../redax/form-operation";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import css from "./ListClient.module.css";
import { department } from "../../redax/form-select";

export const ClientItem = ({
  item,
  isModalClick,
  onClickNotify,
  isModalTextClick,
}) => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const [isModalText, setIsModalText] = useState(false);
  const departmentNum = useSelector(department);

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
  const onClickModalText = (e) => {
    e.preventDefault();
    setIsModalText(true);
    isModalTextClick(isModalText, item);
  };
  const dateForm = item.date;
  const truncateDateString = (dateString) => {
    if (typeof dateString === "string" && dateString.includes("T")) {
      return dateString.split("T")[0];
    }
    return " ";
  };

  const formattedDate = truncateDateString(dateForm);
  console.log(formattedDate);

  return (
    <>
      <td data-label="Відділення">{item.departmentNum}</td>
      <td data-label="Дата"> {formattedDate}</td>
      <td data-label="ПІБ">{item.name}</td>

      <td data-label="ІПН">{item.ipn}</td>

      <td data-label="Телефон">{item.tel}</td>

      <td data-label="Вид кредиту">{item.credit}</td>

      <td data-label="Ціль кредиту">{item.targetCredit}</td>

      <td data-label="Сума кредиту">{item.sum}</td>

      <td data-label="Зацікавленість">{item.intrest}</td>
      <td className={css.btn} data-label="Дії">
        {(departmentNum !== "Головний офіс") && (
          <button type="button" onClick={onClickModal} className={css.button}>
            Змінити
          </button>
        )}
        <button type="button" onClick={onClick} className={css.button}>
          Видалити
        </button>
      </td>
      <td className={css.btn} data-label="Примітка">
        <button type="button" onClick={onClickModalText} className={css.button}>
          Примітка
        </button>
      </td>
    </>
  );
};

ClientItem.propTypes = {
  item: PropTypes.object,
  isModalClick: PropTypes.func,
  isModalTextClick: PropTypes.func,
  onClickNotify: PropTypes.func,
};
