import EmployeesListItem from "../employeers-list-item/employeers-list-item";
import './employeers-list.css';

const EmployeersList = ({data}) => {

    const elements = data.map(item => {
        return (
            <EmployeesListItem name={item.name} salary={item.salary} increase={item.increase}/> // {...items} тоже самое
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeersList;