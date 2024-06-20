import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import formOperations from "../../redax/form-operation";


export const ClientItem = ({ item }) => {
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    dispatch(formOperations.deleteClient(item._id));
  };
  return (
    <>
      <td>{item.name}</td>

      <td>{item.ipn}</td>

      <td>{item.tel}</td>

      <td>{item.credit}</td>

      <td>{item.targetCredit}</td>

      <td>{item.sum}</td>

      <td>{item.intrest}</td>
      <button type="button" onClick={onClick}>
        Видалити
      </button>
    </>
  );
};

ClientItem.propTypes = {
  item: PropTypes.object,
};
