import "../styles/home.scss";
import "../styles/hero.scss";

import Card from "../components/Card";
import Button from "../components/Button";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="intro">
          <h1>Venez goûter nos saveurs!!!</h1>
          <p>
            Fastfood FAIT MAISON pâtisserie orientale, hamburger, panini, tacos,
            salade, plats traditionnels, Couscous, tadjine, frites fait maison
          </p>
          <Button url="/contact" content="Commander" blank="" />
        </div>
        <img
          src="/assets/images/hero_section_burger.png"
          alt="Hamburger"
          className="img"
        />
      </section>

      <div className="section-container">
        <h2 className="section-title">
          Nos <span>Hamburgers</span>
        </h2>
        <div className="section">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
