import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import formOperations from "../../redax/form-operation";
import css from "./ListClient.module.css"


export const ClientItem = ({ item }) => {
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    dispatch(formOperations.deleteClient(item._id));
  };
  return (
    <tr className={css["client-row"]}>
      <td>{item.name}</td>
      <td>{item.ipn}</td>
      <td>{item.tel}</td>
      <td>{item.credit}</td>
      <td>{item.targetCredit}</td>
      <td>{item.sum}</td>
      <td>{item.intrest}</td>
      <td>
        <button className={css["delete-button"]} type="button" onClick={onClick}>
          Видалити
        </button>
      </td>
    </tr>
  );
};

ClientItem.propTypes = {
  item: PropTypes.object,
};
