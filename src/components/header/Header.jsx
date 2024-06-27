import { FormDepartment } from "../formDepartment/FormDepartment"

export const Header = () =>{
    return(
        <div>
            <h2>Воронка продажу</h2>
            <h3>Виберіть відділення</h3>
            <FormDepartment/>
            
        </div>
    )
}