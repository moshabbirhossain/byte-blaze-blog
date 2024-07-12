import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const handleTheme=(e)=>{
        if(e.target.checked){
            setTheme('synthwave')
        }
        else{
            setTheme('light')
        }
    }
    useEffect(()=>{
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme]);
    return (
        <div className="navbar bg-base-100 shadow-lg px-2 fixed z-10">
            <Link to={'/'} className="flex-1">
                <h1 className="btn btn-ghost text-xl text-primary gap-0 normal-case">
                    <span className="text-secondary">Byte</span>Blaze
                </h1>
            </Link>
            <div className="flex-none gap-2">
                <ul className="menu menu-horizontal  items-center gap-1">
                    <NavLink to={'/'} className={({isActive}) => isActive ? 'text-primary text-lg font-bold' : 'text-lg font-bold'}>
                        Home
                    </NavLink>
                    <NavLink to={'/blogs'} className={({isActive}) => isActive ? 'text-primary text-lg font-bold' : 'text-lg font-bold'}>
                        Blogs
                    </NavLink>
                    <NavLink to={'/bookmarks'} className={({isActive}) => isActive ? 'text-primary text-lg font-bold' : 'text-lg font-bold'}>
                        Bookmarks
                    </NavLink>
                </ul>
                <label className="grid cursor-pointer place-items-center">
                    <input
                        onChange={handleTheme}
                        type="checkbox"
                        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                    />
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;
