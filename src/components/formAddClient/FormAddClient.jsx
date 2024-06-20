import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { department } from "../../redax/form-select";
//import { errorClient } from "../../redax/form-select";
import formOperations from "../../redax/form-operation";
import css from "./AddClient.module.css";

export const FormAddClient = () => {
  const [name, setName] = useState("");
  const [ipn, setIpn] = useState(null);
  const [tel, setTel] = useState(null);
  const [credit, setCredit] = useState("Кредит");
  const [targetCredit, setTargetCredit] = useState("Оборотка");
  const [sum, setSum] = useState(null);
  const [intrest, setIntrest] = useState("Зацікавлений");
  const departmentNum = useSelector(department);
  const dispatch = useDispatch();
  //const error = useSelector(errorClient);

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
  const handleChangeSum = (e) => {
    e.preventDefault();
    setSum(e.target.value);
  };

  const handleChangeIntrest = (e) => {
    e.preventDefault();
    setIntrest(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      formOperations.addClient({
        name,
        ipn,
        tel,
        credit,
        targetCredit,
        sum,
        intrest,
        departmentNum,
      })
    );
    setName("");
    setIpn(null);
    setTel(null);
    setTargetCredit("Оборотка");
    setCredit("Кредит");
    setIntrest("Зацікавлений");
    setSum(null);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label className={css.label}>
          {" "}
          ПІБ чи назва фірми
          <input
            type="text"
            onChange={handleChangeName}
            placeholder="ПІБ чи назва фірми"
          />
        </label>
        <label className={css.label}>
          ІПН
          <input
            type="number"
            onChange={handleChangeIpn}
            pattern="\d{8,10}"
            placeholder="00000000"
          />
        </label>
        <label className={css.label}>
          {" "}
          Телефон
          <input
            type="tel"
            onChange={handleChangeTel}
            pattern="067\d{7}"
            placeholder="067000000"
          />
        </label>
        <select onChange={handleChangeCredit} className={css.label}>
          {" "}
          Вид кредиту
          <option value="Кредит">Кредит</option>
          <option value="Лінія">Лінія</option>
          <option value="Овердрафт">Овердрафт</option>
        </select>
        <select onChange={handleChangeTargetCredit} className={css.label}>
          {" "}
          Ціль кредиту
          <option value="Оборотка">Оборотка</option>
          <option value="Інвест">Інвест</option>
        </select>
        <label className={css.label}>
          {" "}
          Сума кредиту
          <input
            type="nubmer"
            onChange={handleChangeSum}
            placeholder="100 000"
          />{" "}
          грн.
        </label>

        <select onChange={handleChangeIntrest} className={css.label}>
          {" "}
          Зацікавленість
          <option value="Зацікавлений">Зацікавлений</option>
          <option value="Не зацікавлений">Незацікавлений</option>
        </select>
        {departmentNum !== null && <button type="submit">Зберігти</button>}
      </form>
    </>
  );
};
