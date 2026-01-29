import { Link, useNavigate } from "react-router-dom" 
import { logout, getUser, } from "../../Services";
import { useState, useEffect } from "react";

export const DropdownLoggedIn = ({setDropdown, setToken}) => {

    const [user, setUser] = useState({});
    const navigate = useNavigate();

     useEffect(() => {
            async function fetchDat() {
              const data = await getUser();
                setUser(data);
            }
           fetchDat() ;
        },[])
    
    function handleLogout() {
        logout();
        setToken(null);        // ✅ THIS triggers re-render
        setDropdown(false);
        navigate("/")
    }
  return (
     <div id="dropdownAvatar" className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div className="font-medium truncate text-xs">Name : {user.name}<br/>Email : {user.email}</div>
        </div>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
                <Link onClick={() => setDropdown(false)} to="/product" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
            </li>
            <li>
                <Link onClick={() => setDropdown(false)} to="/dahsboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
        </ul>
        <div className="py-1">
            <span onClick={handleLogout} className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
        </div>
    </div>
  )
}

