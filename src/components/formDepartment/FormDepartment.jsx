import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import formOperations from "../../redax/form-operation";
import { useSelector } from "react-redux";
import { department } from "../../redax/form-select";

export const FormDepartment = () => {
  const [number, setNumber] = useState(null);
  const dispatch = useDispatch();
  const departmentNum = useSelector(department);


  const handleOption = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
    dispatch(formOperations.numberDepartment(e.target.value));
    
  };
  
useEffect(() =>{
  dispatch(formOperations.getClient({departmentNum: number}));
}, [departmentNum, dispatch, number])

  return (
    <form>
      <label>
        {" "}
        відділення
        <select onChange={handleOption} value={number}>
          <option value="charge">Виберіть відділення</option>
          <option value="Головний офіс">Головний офіс</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
    </form>
  );
};
