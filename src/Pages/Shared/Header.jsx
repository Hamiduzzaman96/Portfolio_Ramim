import React from 'react'

export default function Header() {
    const navOption = <>
        <li><a>Home</a></li>
        <li>
            <a>Project</a>
            <ul className="p-2">
                <li><a>Front-End</a></li>
                <li><a>UI/UX</a></li>
            </ul>
        </li>
        <li><a>Blog</a></li>
        <li><a href="">Contact</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 bg-cyan-700 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                          {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl">Hamiduzzaman Ramim
                    
                    </a>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        <li><a>Home</a></li>
                        <li>
                            <details>
                                <summary>Project</summary>
                                <ul className="p-2 text-black">
                                    <li><a>React.js</a></li>
                                    <li><a>UI/UX</a></li>
                                    <li><a href="">C#</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Hire me</a>
                </div>
            </div>
        </div>
    )
}
