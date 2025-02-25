// import React from 'react'
import { Moon, SunIcon } from "lucide-react";
import {useState} from 'react';

export default function toggleGroup() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
  return (
    <div>
        <button  
        // size="icon"
         className="cursor-pointer rounded-full" onClick={toggleTheme}>
                    {theme === "light" ? <Moon /> : <SunIcon />}
                </button>
    </div>
  )
}
