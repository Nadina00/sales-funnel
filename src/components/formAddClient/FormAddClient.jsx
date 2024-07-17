import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { department } from "../../redax/form-select";
import { errorClient } from "../../redax/form-select";
import { ModalText } from "../modal/ModalText";
import formOperations from "../../redax/form-operation";
import css from "./AddClient.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FormAddClient = () => {
  const [isModalText, setIsModalText] = useState(false);
  const [textNote, setTextNote] = useState("");
  const [date, setDate] = useState("")
  const [name, setName] = useState("");
  const [ipn, setIpn] = useState(null);
  const [tel, setTel] = useState(null);
  const [credit, setCredit] = useState("Кредит");
  const [targetCredit, setTargetCredit] = useState("Оборотка");
  const [sum, setSum] = useState(null);
  const [intrest, setIntrest] = useState("Зацікавлений");
  const departmentNum = useSelector(department);
  const dispatch = useDispatch();
  const errorAdd = useSelector(errorClient);
  
  
  const handleChangeDate = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };
 
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

  const isModalTextClick = () => {
    setIsModalText(true);
  };
  const onCloseText = (arg) => {
    setIsModalText(arg);
  };
  const onChangeText = (note) => {
    setTextNote(note);
  };
console.log(date)
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      formOperations.addClient({
        date,
        name,
        ipn,
        tel,
        credit,
        targetCredit,
        sum,
        intrest,
        departmentNum,
        textNote,
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
console.log(    date,
  name,
  ipn,
  tel,
  credit,
  targetCredit,
  sum,
  intrest,
  departmentNum,
  textNote)

  const notify = () => {
    if (errorAdd) {
      toast("Помилка!");
    } 
    if ( !name) {
      toast("Вкажіть ПІБ чи назву клієнта!");
    }
    else {
      toast("Збережено!");
    }
  };
  return (
    <div className={css.box}>
      <form onSubmit={onSubmit}>
      <label className={css.label}>
          {" "}
          Дата
          <input
            type="date"
            onChange={handleChangeDate}
            placeholder="Дата"
            value={date}
          />
        </label>
        <label className={css.label}>
          {" "}
          ПІБ чи назва фірми
          <input
            type="text"
            onChange={handleChangeName}
            placeholder="ПІБ чи назва фірми"
            value={name}
            required
          />
        </label>
        <label className={css.label}>
          ІПН
          <input
            type="number"
            onChange={handleChangeIpn}
            pattern="\d{8,10}"
            placeholder="00000000"
            value={ipn}
          />
        </label>
        <label className={css.label}>
          {" "}
          Телефон
          <input
            type="tel"
            onChange={handleChangeTel}
            pattern="0\d{9}"
            placeholder="067000000"
            value={tel}
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
            value={sum}
          />{" "}
          грн.
        </label>

        <select onChange={handleChangeIntrest} className={css.label}>
          {" "}
          Зацікавленість
          <option value="Зацікавлений">Зацікавлений</option>
          <option value="Не зацікавлений">Незацікавлений</option>
        </select>
        <button type="button" onClick={isModalTextClick} className={css.button}>
          Примітка
        </button>
        {departmentNum !== null && (
          <button type="submit" onClick={notify}>
            Зберігти
          </button>
        )}
      </form>
      <ToastContainer containerId="containerA" />
      {isModalText && (
        <ModalText
          isModalTextClick={isModalTextClick}
          onClose={onCloseText}
          onClickNotify={notify}
          onClick={onChangeText}
        />
      )}
    </div>
  );
};
