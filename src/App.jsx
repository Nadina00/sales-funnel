import "./App.css";
import { FormAddClient } from "./components/formAddClient/FormAddClient";
import { Header } from "./components/header/Header";
import { ListClient } from "./components/listClient/ListClient";
import { useSelector } from "react-redux";
import { department, loading } from "./redax/form-select";
import { ToastContainer, toast } from "react-toastify";
import { errorClient } from "../src/redax/form-select";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "./components/loader/Loader";

function App() {
  const departmentNum = useSelector(department);
  const errorAdd = useSelector(errorClient);
  const loader = useSelector(loading);
  console.log(departmentNum);

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
      {departmentNum !== "Головний офіс" && departmentNum !== "charge" && (
        <FormAddClient />
      )}
      {loader ? <Loader /> : <ListClient notify={notify} />}
      <ToastContainer />
    </>
  );
}

export default App;
