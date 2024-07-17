import { useState } from "react";
import PropTypes from "prop-types";
import css from "../listClient/ListClient.module.css";
import { useDispatch } from "react-redux";
import formOperations from "../../redax/form-operation";
import "react-toastify/dist/ReactToastify.css";
import modalCss from "./Modal.module.css";

export const Modal = ({ item, departmentNum, onClose, onClickNotify }) => {
  const [date, setDate] = useState('')
  const [name, setName] = useState(item.name);
  const [ipn, setIpn] = useState(item.ipn);
  const [tel, setTel] = useState(item.tel);
  const [credit, setCredit] = useState(item.credit);
  const [targetCredit, setTargetCredit] = useState(item.targetCredit);
  const [sum, setSum] = useState(item.sum);
  const [intrest, setIntrest] = useState(item.intrest);
  const dispatch = useDispatch();

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

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      formOperations.updateClient({
        id: item._id,
        date,
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
  };

  console.log(name, ipn, tel, credit, targetCredit, sum, intrest);
  const onClickClose = (e) => {
    e.preventDefault();
    onClose(false);
  };

  return (
    <div className={modalCss.modalBackground}>
      <div className={modalCss.box}>
        <button className={modalCss.btnClose} type="button" onClick={onClickClose}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 8L22 22" stroke="black" strokeWidth="2" />
            <path d="M8 22L22 8" stroke="black" strokeWidth="2" />
          </svg>
        </button>
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
              placeholder="0670000000"
              value={tel}
            />
          </label>
          <select
            onChange={handleChangeCredit}
            className={css.label}
            value={credit}
          >
            {" "}
            Вид кредиту
            <option value="Кредит">Кредит</option>
            <option value="Лінія">Лінія</option>
            <option value="Овердрафт">Овердрафт</option>
          </select>
          <select
            onChange={handleChangeTargetCredit}
            className={css.label}
            value={targetCredit}
          >
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

          <select
            onChange={handleChangeIntrest}
            className={css.label}
            value={intrest}
          >
            {" "}
            Зацікавленість
            <option value="Зацікавлений">Зацікавлений</option>
            <option value="Не зацікавлений">Незацікавлений</option>
          </select>
          <button type="submit" onClick={onClickNotify}>
            Зберігти
          </button>
        </form>
      </div>
    </div>
  );
};
Modal.propTypes = {
  item: PropTypes.object,
  departmentNum: PropTypes.number,
  onClose: PropTypes.func,
  onClickNotify: PropTypes.func,
};
