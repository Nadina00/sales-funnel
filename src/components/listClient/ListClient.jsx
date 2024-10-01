import { useSelector } from "react-redux";
import { listClients } from "../../redax/form-select";
import { ClientItem } from "./ClientItem";
import { department } from "../../redax/form-select";
import css from "./ListClient.module.css";

export const ListClient = () => {
  const list = useSelector(listClients);

  const departmentNum = useSelector(department);
  console.log(departmentNum);

  return (
    <div className={css.table_container}>
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
          <th>Видалити</th>
        </tr>
        {!list ? (
          <p className={css.loader}>Loader</p>
        ) : (
          list.map((item) => (
            <tr key={item._id}>
              <ClientItem item={item} />
            </tr>
          ))
        )}
      </table>
    </div>
  );
};
