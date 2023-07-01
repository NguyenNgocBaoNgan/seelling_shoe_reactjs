import React, { useState, useEffect } from "react";
import "./Header.css";
import {Link} from "react-router-dom";

function Header() {
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);
    const [isUserMenuHovered, setUserMenuHovered] = useState(false);
    const [userMenuTimeout, setUserMenuTimeout] = useState(null);

    const handleUserIconMouseEnter = () => {
        clearTimeout(userMenuTimeout);
        setUserMenuOpen(true);
        setUserMenuHovered(true);
    };

    const handleUserIconMouseLeave = () => {
        const timeout = setTimeout(() => {
            setUserMenuOpen(false);
            setUserMenuHovered(false);
        }, 30000);
        setUserMenuTimeout(timeout);
    };

    useEffect(() => {
        return () => {
            clearTimeout(userMenuTimeout);
        };
    }, [userMenuTimeout]);

    return (
        <div>
            <header className="header_area sticky-header">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light main_box">
                        <div className="container">
                            <Link to={"/home"} >
                            <a className="navbar-brand logo_h" href="">

                                <img src="../img/logo.png" />
                            </a>
                                </Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div
                                className="collapse navbar-collapse offset"
                                id="navbarSupportedContent"
                            >
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    <li className="nav-item">
                                        <a href="/home" className="nav-link">
                                            Trang chủ
                                        </a>
                                    </li>

                                    <li className="nav-item submenu dropdown ">
                                        <a
                                            href="../introduce"
                                            className="nav-link "
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Giới thiệu
                                        </a>
                                        {/*<ul className="dropdown-menu">*/}
                                        {/*    <li className="nav-item"><a className="nav-link"*/}
                                        {/*                                href="category/Nam/Boots/Boots.html">Boots</a>*/}
                                        {/*    </li>*/}
                                        {/*    <li className="nav-item"><a className="nav-link"*/}
                                        {/*                                href="category/Nam/Sandal/Sandal.html">Sandal</a>*/}
                                        {/*    </li>*/}
                                        {/*    <li className="nav-item"><a className="nav-link"*/}
                                        {/*                                href="category/Nam/SportShoe/SportShoe.html">Giày*/}
                                        {/*        thể thao</a></li>*/}
                                        {/*    <li className="nav-item"><a className="nav-link"*/}
                                        {/*                                href="category/Nam/RunningShoes/Runn1.html">Giày*/}
                                        {/*        chạy bộ</a></li>*/}
                                        {/*    <li className="nav-item"><a className="nav-link"*/}
                                        {/*                                href="category/Nam/SoccerShoes/Socc1.html">Giày*/}
                                        {/*        đá banh</a></li>*/}
                                        {/*</ul>*/}
                                    </li>
                                    <li className="nav-item submenu dropdown ">
                                        <a href="../News" className="nav-link "
                                           role="button" aria-haspopup="true"
                                           aria-expanded="false">Tin tức</a>

                                        {/*<ul className="dropdown-menu">*/}
                                        {/*    <li className="nav-item "><a className="nav-link"*/}
                                        {/*                                 href="category/Nu/Boots/Boots1.html">Boots</a>*/}
                                        {/*    </li>*/}
                                        {/*    <li className="nav-item"><a className="nav-link"*/}
                                        {/*                                href="category/Nu/Sandal/Sandal-01.html">Sandal</a>*/}
                                        {/*    </li>*/}
                                        {/*    <li className="nav-item"><a className="nav-link"*/}
                                        {/*                                href="category/Nu/SportShoes/SportShoe-01.html">Giày*/}
                                        {/*        thể thao</a></li>*/}
                                        {/*    <li className="nav-item"><a className="nav-link"*/}
                                        {/*                                href="category/Nu/RunningShoes/RunningShoes-01.html">Giày*/}
                                        {/*        chạy bộ - đi bộ</a></li>*/}

                                        {/*</ul>*/}
                                    </li>
                                    <li className="nav-item submenu dropdown">
                                        <a
                                            href="category.html"
                                            className="nav-link "
                                            data-toggle="dropdown"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Khuyến mãi
                                        </a>
                                    </li>

                                    <li className="nav-item ">
                                        <a href="../Contact" className="nav-link">
                                            Liên hệ
                                        </a>
                                    </li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a href="/cart">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <div
                                            className={`user-icon ${isUserMenuOpen ? "active" : ""}`}
                                            onMouseEnter={handleUserIconMouseEnter}
                                            onMouseLeave={handleUserIconMouseLeave}
                                        >
                                            <i className="fa-solid fa-user"></i>
                                            {isUserMenuHovered && (
                                                <ul className="user-menu">
                                                    <li>
                                                        <a href="/">Đăng nhập</a>
                                                    </li>
                                                    <li>
                                                        <a href="/register">Đăng ký</a>
                                                    </li>
                                                    <li>
                                                        <a href="/logout">Đăng xuất</a>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </li>
                                    <li>
                                        <a href="/Search">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <img className="image_banner" src="../img/common-banner.jpg" />
                </div>
            </header>
        </div>
    );
}
export default Header;
