import React, { useState } from 'react'
import Select from "react-select";
import { Link } from 'react-router'
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

import flag_eng from "../assets/nvabar/flag_eng.png";
import flag_bd from "../assets/nvabar/flag_bd.png";
import flag_india from "../assets/nvabar/flag_india.png";
import logo from '../assets/nvabar/logo.png'

const languages = [
    { value: "english", label: "English (UK)", icon: flag_eng },
    { value: "bangla", label: "Bangla", icon: flag_bd },
    { value: "hindi", label: "Hindi", icon: flag_india },
];

const customSingleValue = ({ data }) => (
    <div className="flex items-center gap-2">
        <img src={data.icon} alt="" className="w-5 h-5" />
        {data.label}
    </div>
);

const customStyles = {
    control: (provided) => ({
        ...provided,
        minHeight: "40px",
        width: "160px",
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        boxShadow: "none",
        border: "none",
        paddingRight: "8px",
    }),
    input: (provided) => ({
        ...provided,
        display: "none",
        margin: 0,
        padding: 0,
        width: "0px",
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: "white",
        borderRadius: "5px",
        marginTop: "2px",
        border: "none",
        boxShadow: "none",
    }),
    option: (provided) => ({
        ...provided,
        display: "flex",
        alignItems: "center",
        padding: "6px 10px",
    }),
    singleValue: (provided) => ({
        ...provided,
        display: "flex",
        alignItems: "center",
        color: "#000",
        margin: 0,
        padding: 0,
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        padding: "4px",
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        display: "none",
    }),
    indicatorSeparator: () => ({
        display: "none",
    }),
};



const Navbar = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);


    return (
        <section >
            <div className="max-w-screen-xl mx-auto navbar text-white h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a>Home</a>
                                <ul className="p-2">
                                    <li><a>Home Page One</a></li>
                                    <li><a>Home Page Two</a></li>
                                    <li><a>Home Page Three</a></li>
                                    <li><a>Home Page Four</a></li>
                                    <li><a>Home Page Five</a></li>
                                    <li><a>Home Page Six</a></li>
                                </ul>
                            </li>
                            <li><Link to=''>About</Link></li>
                            <li><Link to=''>Domain</Link></li>
                            <li>
                                <a>Hosting</a>
                                <ul className="p-2">
                                    <li><a>Hosting</a></li>
                                    <li><a>Wordpress-hosting</a></li>
                                    <li><a>VPS-hosting</a></li>
                                    <li><a>Shared-hosting</a></li>
                                    <li><a>Reseller-hosting</a></li>
                                    <li><a>Cloud Hosting</a></li>
                                </ul>
                            </li>
                            <li>
                                <a>Page</a>
                                <ul className="p-2">
                                    <li><a>About Us</a></li>
                                    <li><a>Domain</a></li>
                                    <li><a>Hosting</a></li>
                                    <li><a>Blog Grid</a></li>
                                    <li><a>Testimonial</a></li>
                                    <li><a>Pricing</a></li>
                                    <li><a>Faq</a></li>
                                    <li><a>404</a></li>
                                    <li><a>Contact Us</a></li>
                                </ul>
                            </li>
                            <li><Link to=''>Domain</Link></li>
                        </ul>
                    </div>
                    <Link to='/'> <img src={logo} alt="" /> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>Home</summary>
                                <ul className="p-2 w-40">
                                    <li><a>Home Page One</a></li>
                                    <li><a>Home Page Two</a></li>
                                    <li><a>Home Page Three</a></li>
                                    <li><a>Home Page Four</a></li>
                                    <li><a>Home Page Five</a></li>
                                    <li><a>Home Page Six</a></li>
                                </ul>
                            </details>
                        </li>

                        <li><Link to=''>About</Link></li>
                        <li><Link to=''>Domain</Link></li>
                        <li>
                            <details>
                                <summary>Hosting</summary>
                                <ul className="p-2 w-40">
                                    <li><a>Hosting</a></li>
                                    <li><a>Wordpress-hosting</a></li>
                                    <li><a>VPS-hosting</a></li>
                                    <li><a>Shared-hosting</a></li>
                                    <li><a>Reseller-hosting</a></li>
                                    <li><a>Cloud Hosting</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Page</summary>
                                <ul className="p-2 w-40">
                                    <li><a>About Us</a></li>
                                    <li><a>Domain</a></li>
                                    <li><a>Hosting</a></li>
                                    <li><a>Blog Grid</a></li>
                                    <li><a>Testimonial</a></li>
                                    <li><a>Pricing</a></li>
                                    <li><a>Faq</a></li>
                                    <li><a>404</a></li>
                                    <li><a>Contact Us</a></li>
                                </ul>
                            </details>
                        </li>

                        <li><Link to=''>Contact</Link></li>
                    </ul>
                </div>

                <div className="hidden navbar-end relative md:flex items-center gap-2">
                    <IoIosSearch />
                    <span>|</span>
                    <Select
                        options={languages}
                        value={selectedLanguage}
                        onChange={setSelectedLanguage}
                        getOptionLabel={(e) => (
                            <div className="flex items-center gap-2">
                                <img src={e.icon} alt="" className="w-5 h-5" />
                                {e.label}
                            </div>
                        )}
                        components={{ SingleValue: customSingleValue }}
                        isSearchable={false}
                        styles={customStyles}
                        className="w-40 absolute -top-3"
                    />
                    <Link to='/register' className="flex items-center gap-3 font-semibold bg-blue-600 px-10 py-3 rounded text-white"><MdOutlinePersonAddAlt /> Register</Link>
                </div>
            </div>
            <div className='w-full h-[0.5px] bg-gray-500'></div>
        </section>
    )
}

export default Navbar