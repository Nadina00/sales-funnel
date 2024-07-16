import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { listClients } from "../../redax/form-select";
import { ClientItem } from "./ClientItem";
import { department } from "../../redax/form-select";
import css from "./ListClient.module.css";
import { Loader } from "../loader/Loader";
import { Modal } from "../modal/Modal";
import { useState } from "react";
import { ModalText } from "../modal/ModalText";

export const ListClient = ({ notify }) => {
  const list = useSelector(listClients);
  const [isModal, setIsModal] = useState(false);
  const [isModalText, setIsModalText] = useState(false);
  const [item, setItem] = useState([]);
  const [itemText, setItemText] = useState([])

  const departmentNum = useSelector(department);
  console.log(departmentNum);

  const isModalClick = (isModalOpen, itemModal) => {
    setIsModal(isModalOpen);
    setItem(itemModal);
  };
  const isModalTextClick = (isModalText, itemModalText
  ) => {
    setIsModalText(isModalText);
    setItemText(itemModalText)
  };

  const onClose = (arg) => {
    setIsModal(arg);
  };

  const onCloseText = (arg) => {
    setIsModalText(arg);
  };
  console.log(isModalText);

  return (
    <div className={css.box}>
      <p> Відділення {departmentNum}</p>
      <div className={css.wrapper}>
        <table className={css.table_blur}>
          <thead>
            <th>Відділення</th>
            <th>Дата</th>
            <th>ПІБ</th>
            <th>ІПН</th>
            <th>Телефон</th>
            <th>Вид кредиту</th>
            <th>Ціль кредиту</th>
            <th>Сума кредиту</th>
            <th>Зацікавленість</th>
            <th>Дії</th>
            <th>Примітка</th>
          </thead>
          <tbody>
            {!list ? (
              <Loader />
            ) : (
              list.map((item) => (
                <tr key={item._id}>
                  <ClientItem
                    item={item}
                    isModalClick={isModalClick}
                    isModalTextClick={isModalTextClick}
                    onClickNotify={notify}
                    className={css.item}
                  />
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isModal && (
        <Modal
          isModalClick
          item={item}
          departmentNum={departmentNum}
          onClose={onClose}
          onClickNotify={notify}
        />
      )}

      {isModalText && (
        <ModalText
          isModalTextClick={isModalTextClick}
          onClose={onCloseText}
          onClickNotify={notify}
          item={itemText}
        />
      )}
    </div>
  );
};
ListClient.propTypes = {
  notify: PropTypes.func,
};
