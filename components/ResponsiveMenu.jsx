import "../styles/responsiveMenu.scss";
import Link from "next/link";

const ResponsiveMenu = ({ burgerMenuState }) => {
  return (
    <nav className="responsive-nav">
      <ul className="list">
        <li className="element">
          <Link href="/" className="link" onClick={burgerMenuState}>
            Accueil
          </Link>
        </li>
        <li className="element">
          <Link href="/" className="link" onClick={burgerMenuState}>
            Menu
          </Link>
        </li>
        <li className="element">
          <Link href="/contact" className="link" onClick={burgerMenuState}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ResponsiveMenu;
