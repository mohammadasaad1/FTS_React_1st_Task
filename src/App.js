import { FilterUsersTable } from "./Components/FilterUsersTable/FilterUsersTable";
import "./styles.css";
import users from "./data.js";

function App() {
  return (
    <div className="container">
      <h5>Add members to Front-end development team</h5>
      <FilterUsersTable users={users} />
    </div>
  );
}
export default App;
