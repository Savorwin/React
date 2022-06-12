import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployeesAddForm from '../employeers-add-form/employeers-add-form';


function App() {

    const data =  [
        {name: 'John.C', salary: 8000, increase: true},
        {name: 'Alex M.', salary: 12000, increase: true},
        {name: 'Carl W.', salary: 15000, increase: false},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeersList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;