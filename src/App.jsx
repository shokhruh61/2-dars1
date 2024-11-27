
import './App.css'
import data from './assets/data.json';

import UserList from './componets/UserList';

function App() {
    return (
        <dir>
            <UserList users={data} />
        </dir>
    );
}




export default App;
