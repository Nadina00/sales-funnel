import { useState } from "react";
import { useDispatch } from "react-redux";
import formOperations from "../../redax/form-operation";

export const FormAddClient = () => {
  const [name, setName] = useState("");
  const [ipn, setIpn] = useState(null);
  const [tel, setTel] = useState(null);
  const [credit, setCredit] = useState("Кредит");
  const [targetCredit, setTargetCredit] = useState("Оборотка");
  const [intrest, setIntrest] = useState("Зацікавлений");
  const dispatch = useDispatch()

  const handleChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleChangeIpn = (e) => {
    e.preventDefault();
    setIpn(e.target.value);
  };
  const handleChangeTel = (e) => {
    e.preventDefault();
    setTel(e.target.value);
  };
  const handleChangeCredit = (e) => {
    e.preventDefault();
    setCredit(e.target.value);
  };

  const handleChangeTargetCredit = (e) => {
    e.preventDefault();
    setTargetCredit(e.target.value);
  };

  const handleChangeIntrest = (e) => {
    e.preventDefault();
    setIntrest(e.target.value);
  };

  const onSubmit = (e) =>{
    e.preventDefault();
    dispatch(formOperations.addClient({name, ipn, tel, credit, targetCredit, intrest}))

  }
  console.log(name, ipn, tel, credit, targetCredit, intrest)

  return (
    <form onSubmit={onSubmit}>
      <label>
        {" "}
        ПІБ
        <input type="text" onChange={handleChangeName} />
      </label>
      <label>
        ІПН
        <input type="number" onChange={handleChangeIpn} />
      </label>
      <label>
        {" "}
        Телефон
        <input type="tel" onChange={handleChangeTel} />
      </label>
      <select onChange={handleChangeCredit}>
        {" "}
        Вид кредиту
        <option value="Кредит">Кредит</option>
        <option value="Лінія">Лінія</option>
        <option value="Овердрафт">Овердрафт</option>
      </select>
      <select onChange={handleChangeTargetCredit}>
        {" "}
        Ціль кредиту
        <option value="Оборотка">Оборотка</option>
        <option value="Інвест">Інвест</option>
      </select>

      <select onChange={handleChangeIntrest}>
        {" "}
        Зацікавленість
        <option value="Зацікавлений">Зацікавлений</option>
        <option value="Не зацікавлений">Незацікавлений</option>
      </select>
      <button type="submit">Зберігти</button>
    </form>
  );
};
