import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { listClients } from "../../redax/form-select";
import { ClientItem } from "./ClientItem";
import { department } from "../../redax/form-select";
import css from "./ListClient.module.css";
import { Loader } from "../loader/Loader";
import { Modal } from "../modal/Modal";
import { useState } from "react";

export const ListClient = ({ notify }) => {
  const list = useSelector(listClients);
  const [isModal, setIsModal] = useState(false);
  const [item, setItem] = useState([]);

  const departmentNum = useSelector(department);
  console.log(departmentNum);
  const isModalClick = (isModalOpen, itemModal) => {
    setIsModal(isModalOpen);
    setItem(itemModal);
  };
  const onClose = (arg) => {
    setIsModal(arg);
  };

  return (
    <div>
      <p> Відділення {departmentNum}</p>
      <div className={css.wrapper}>
        <table className={css.table_blur}>
          <thead>
            <th>Відділення</th>
            <th>ПІБ</th>
            <th>ІПН</th>
            <th>Телефон</th>
            <th>Вид кредиту</th>
            <th>Ціль кредиту</th>
            <th>Сума кредиту</th>
            <th>Зацікавленість</th>
            <th>Дії</th>
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
                    onClickNotify={notify}
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
    </div>
  );
};
ListClient.propTypes = {
  notify: PropTypes.func,
};
