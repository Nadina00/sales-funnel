import { useSelector } from "react-redux";
import { listClients } from "../../redax/form-select";
import { ClientItem } from "./ClientItem";
import { department } from "../../redax/form-select";
import css from "./ListClient.module.css";
import { Loader } from "../loader/Loader";
import { Modal } from "../modal/Modal";
import { useState } from "react";

export const ListClient = () => {
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
      <table className={css.table_blur}>
        <tr>
          <th>ПІБ</th>
          <th>ІПН</th>
          <th>Телефон</th>
          <th>Вид кредиту</th>
          <th>Ціль кредиту</th>
          <th>Сума кредиту</th>
          <th>Зацікавленість</th>
          <th>Дії</th>
        </tr>
        {!list ? (
          <Loader />
        ) : (
          list.map((item) => (
            <tr key={item._id}>
              <ClientItem item={item} isModalClick={isModalClick} />
            </tr>
          ))
        )}
      </table>
      {isModal && (
        <Modal
          isModalClick
          item={item}
          departmentNum={departmentNum}
          onClose={onClose}
        />
      )}
    </div>
  );
};
