import React from "react";
import logo from '../assets/logo.png'
import '../App.css';


export function Header_icon(){
    return (
            <img className="logo" src={logo} alt="My Image"/>
    )
}

export function Header_title(){
    return (
        <h1 className="system-title">수질 모니터링 시스템</h1>
    )
}

export function Header_menu(){
    return(
        <nav className="navigation">
            <a href="/" className="nav-item">
              Home
            </a>
            <div className="dropdown">
              <a href="#" className="nav-item">
                Reports
              </a>
              <div className="dropdown-content">
                <a href="/detail">수온</a>
                <a href="/detail">용존산소</a>
                <a href="/detail">pH</a>
                <a href="/detail">암모니아</a>
                <a href="/detail">아질산</a>
                <a href="/detail">질산염</a>
              </div>
            </div>
            <div className="dropdown">
              <a href="#" className="nav-item">
                Settings
              </a>
              <div className="dropdown-content">
                <a href="#">준비중입니다</a>
              </div>
            </div>
          </nav>
    )
}