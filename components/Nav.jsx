"use client";

import "@styles/header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { useState } from "react";

const Nav = () => {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  const burgerMenuState = () => {
    setBurgerMenuActive((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="header-content-container">
        <img
          src="/assets/icons/fait_maison_logo.png"
          alt="Restaurant logo"
          className="logo"
        />
        <nav className="navigation">
          <li className="nav-item">
            <Link href="/" className="link">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/" className="link">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="link">
              Contact
            </Link>
          </li>
        </nav>
        {!burgerMenuActive ? (
          <div className="menu-icon" onClick={burgerMenuState}>
            <FontAwesomeIcon icon={faBars} className="burger-menu" />
          </div>
        ) : (
          <div className="menu-icon" onClick={burgerMenuState}>
            <FontAwesomeIcon icon={faXmark} className="burger-menu" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
