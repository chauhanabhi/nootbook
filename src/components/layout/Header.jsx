import { useEffect, useState } from 'react';
import { CartFill, Moon, PersonCircle, Search, Sun } from 'react-bootstrap-icons'
import {Link} from "react-router-dom";
import { SearchBar } from "../index";
import { DropdownLoggedOut, DropdownLoggedIn } from '../index';
import { useCart } from "../../context";

export const Header = () => {
    const [showSearcBar, setShowSearchaBar] = useState(false);
    const [dropdown, setDropdown]= useState(false);
    const [dark, setDark] = useState(JSON.parse(sessionStorage.getItem("dark")) || false);
     const [token, setToken] = useState(sessionStorage.getItem("token"));
     const {cartList} = useCart();
     console.log(token,"");
     
    
    useEffect(() =>{
        sessionStorage.setItem("dark", JSON.stringify(dark))
        if(dark){
            document.documentElement.classList.add("dark")
        }else{
           document.documentElement.classList.remove("dark")
        }

        
        // update login/logout dropdown updated
        const handleStorageChange = () => {
          setToken(sessionStorage.getItem("token"));
        };
        window.addEventListener("storage", handleStorageChange);
        // also run once when component loads
        handleStorageChange();
        return () => {
          window.removeEventListener("storage", handleStorageChange);
        };
    },[dark])

  return (
    <>
    <header>
  <nav className="bg-white dark:bg-gray-900">
    <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
      <Link to="/" className="flex items-center">
        <img src="Logo" className="mr-3 h-10" alt="CodeBook Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          CodeBook
        </span>
      </Link>
      <div className="flex items-center relative">
        <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected" />
        <span onClick={() => setDark(!dark)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search">{dark ? <Sun size={24} /> : <Moon size={24} />}</span>
        <span onClick={() => setShowSearchaBar(!showSearcBar)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"><Search  size={24} /></span>
        <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
          <span className="text-2xl bi bi-cart-fill relative">
            <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">
              {cartList?.length || 0}
            </span>
            <span className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"><CartFill size={24} /></span>
          </span>
        </Link>
        
         <span onClick={() => setDropdown(!dropdown)} className="cursor-pointer text-xl text-gray-700 dark:text-white ml-5 bi bi-search"><PersonCircle size={24}/></span>
         {dropdown && (token ? <DropdownLoggedIn setDropdown={setDropdown} setToken={setToken}  /> : <DropdownLoggedOut setDropdown={setDropdown} />)}
      </div>
    </div>
  </nav>
</header>
{showSearcBar && <SearchBar setShowSearchaBar={setShowSearchaBar} />}
</>

  )
}
