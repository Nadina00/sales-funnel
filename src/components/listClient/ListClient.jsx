import { useSelector } from "react-redux";
import { listClients } from "../../redax/form-select";
import { ClientItem } from "./ClientItem";
import { department } from "../../redax/form-select";

export const ListClient = () => {
  const list = useSelector(listClients);
  const departmentNum = useSelector(department);
  console.log(departmentNum)

  return (
    <div>
        <p> Відділення {departmentNum}</p>
      <ul>
        {list.length < 1 ? (
          <p>Loader</p>
        ) : (
          list.map((item) => (
            <li key={item.id}>
              <ClientItem item={item} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
