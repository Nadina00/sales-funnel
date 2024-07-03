
import "./App.css";
import { FormAddClient } from "./components/formAddClient/FormAddClient";
import { Header } from "./components/header/Header";
import { ListClient } from "./components/listClient/ListClient";
import { useSelector } from "react-redux";
import { department } from "./redax/form-select";
import { ToastContainer, toast } from "react-toastify";
import { errorClient } from "../src/redax/form-select";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const departmentNum = useSelector(department);
  const errorAdd = useSelector(errorClient);
  console.log(departmentNum)

  const notify = () => {
    if (errorAdd) {
      toast("Помилка!");
    } else {
      toast("Успішно виконано!");
    }
  };
  return (
    <>
      <Header />
      {(departmentNum !== "Головний офіс") && (departmentNum !== "charge") &&<FormAddClient/> }
      <ListClient notify={notify}/>
      <ToastContainer/>
      
    </>
  );
}

export default App;
