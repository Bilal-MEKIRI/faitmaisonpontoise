"use client";

import "../styles/nav.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ResponsiveMenu from "./ResponsiveMenu";

import { useState } from "react";

const Nav = () => {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  const burgerMenuState = () => {
    setBurgerMenuActive((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="header-content-container">
        <Link href="/" className="logo">
          <FontAwesomeIcon icon={faUtensils} className="logo-icon" />
          <p className="logo-text">FAIT MAISON</p>
        </Link>

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
          <>
            <div className="menu-icon" onClick={burgerMenuState}>
              <FontAwesomeIcon icon={faBars} className="burger-menu" />
            </div>
          </>
        ) : (
          <>
            <div className="menu-icon" onClick={burgerMenuState}>
              <FontAwesomeIcon icon={faXmark} className="burger-menu" />
            </div>
          </>
        )}
      </div>
      {burgerMenuActive ? (
        <ResponsiveMenu burgerMenuState={burgerMenuState} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;
