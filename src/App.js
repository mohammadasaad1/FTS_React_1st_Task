import { FilterUsersTable } from "./Components/FilterUsersTable/FilterUsersTable";
import './styles.css'
const users = [
  {
    "name": "Carolien Bloeme",
    "selected": false
  },
  {
    "name": "Sun Jun",
    "selected": true
  },
  {
    "name": "Song Bao",
    "selected": false
  },
  {
    "name": "Olivia Arribas",
    "selected": true
  },
  {
    "name": "Bonginkosi Mdladlana",
    "selected": false
  },
  {
    "name": "Arina Belomestnykh",
    "selected": true
  },
  {
    "name": "Jacqueline Likoki",
    "selected": true
  }
]

function App() {
  return (
  <div className="container">
  <h5>Add members to Front-end development team</h5>
  <FilterUsersTable users = {users}/>
  
  </div>
  );
}

export default App;
