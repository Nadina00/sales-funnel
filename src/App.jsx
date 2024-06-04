
import "./App.css";
import { FormAddClient } from "./components/formAddClient/FormAddClient";
import { Header } from "./components/header/Header";
import { ListClient } from "./components/listClient/ListClient";
import { useSelector } from "react-redux";
import { department } from "./redax/form-select";

function App() {
  const departmentNum = useSelector(department);
  console.log(departmentNum)
  return (
    <>
      <Header />
      {departmentNum !== "mainOffice" &&<FormAddClient/> }
      <ListClient/>
    </>
  );
}

export default App;
