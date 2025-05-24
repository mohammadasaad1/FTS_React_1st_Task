import { SearchBar } from "../SearchBar/SearchBar";
import {User} from "../User/User.js"
import Buttons from "../Buttons/Button.js"
import '../SearchBar/searchStyle.css'
import { useState } from "react";
export function FilterUsersTable({users}){
    const [query, setQuery] = useState("");
    // const [items, setItems] = useState(users);

    const itemsByQuery = users.filter(user => {
        return user.name.toLowerCase().includes(query.toLowerCase());
    })
   console.log(itemsByQuery);
   const toDisplay = itemsByQuery.map((user, id) => <User user ={user} id = {id}/>)
    return (
    
    <div style={{display:"flex" , flexDirection:"column" , justifyContent:'center' , alignItems:'center'}}>
        <SearchBar setQuery={setQuery}/>
        <div className='user-list'>
            {toDisplay}
        </div>
        <div style={{display :'flex' , marginTop:30 , gap:20}}> <Buttons isCancle ={1}/> <Buttons isCancle ={0}/></div>
    </div>
    
);
}
