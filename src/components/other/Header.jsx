import React,{useState} from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header = (props) => {
    
    const [username, setUsername] = useState('')

    // if(!data)
    // {
    //     setUsername('Admin')
    // }
    // else{
    //     setUsername(data.firstname)
    // }

    const logoutUser = () => {
        localStorage.setItem('loggedInUser', '')
        props.changeUser('');
    }

    return ( 
        <div className="flex justify-between items-end">
            <h1 className="text-2xl">Hello <br /><span className="text-3xl font-semibold">username</span></h1>
            <button onClick={logoutUser} className="bg-red-500 text-white px-3 py-2 rounded-sm text-lg font-medium">Log Out</button> 
        </div>
    );
}

export default Header ;
