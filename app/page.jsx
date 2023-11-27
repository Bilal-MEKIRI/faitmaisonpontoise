"use client";

import "../styles/home.scss";
import "../styles/hero.scss";
import "../styles/contact.scss";

import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../utils/urls.js";

import Card from "../components/Card";
import Button from "../components/Button";

const Home = () => {
  const [burgers, setBurgers] = useState([]);
  const [sandwiches, setSandwiches] = useState([]);
  const [tacos, setTacos] = useState([]);
  const [salades, setSalades] = useState([]);
  const [tajines, setTajines] = useState([]);
  const [couscous, setCouscous] = useState([]);
  const [speciale, setSpeciale] = useState([]);
  const [gateaux, setGateaux] = useState([]);

  const categorizedProducts = (products) => {
    const burgers = products.filter((product) => product.type === "burger");

    const sandwiches = products.filter(
      (product) => product.type === "sandwich"
    );

    const tacos = products.filter((product) => product.type === "tacos");

    const salades = products.filter((product) => product.type === "salade");

    const tajines = products.filter((product) => product.type === "tajine");

    const couscous = products.filter((product) => product.type === "couscous");

    const speciales = products.filter((product) => product.type === "speciale");

    const gateaux = products.filter((product) => product.type === "gateau");

    setBurgers(burgers);
    setSandwiches(sandwiches);
    setTacos(tacos);
    setSalades(salades);
    setTajines(tajines);
    setCouscous(couscous);
    setSpeciale(speciales);
    setGateaux(gateaux);
  };

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const { data } = await axios.get(URL.allProducts);

        categorizedProducts(data);
      } catch (error) {
        console.log("Failed to fetch burgers data", error);
      }
    };

    fetchAllProducts();
  }, []);

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

      <div className="section-container" id="hamburger-section">
        <h2 className="section-title">
          Nos <span>Spécialités</span>
        </h2>
        <div className="section">
          {speciale.map((item) => (
            <Card
              key={item?._id}
              price={item?.price}
              img={item?.image}
              name={item?.name}
              description={item?.description}
            />
          ))}
        </div>
      </div>

      <div className="section-container" id="hamburger-section">
        <h2 className="section-title">
          Nos <span>Hamburgers</span>
        </h2>
        <div className="section">
          {burgers.map((item) => (
            <Card
              key={item?._id}
              price={item?.price}
              img={item?.image}
              name={item?.name}
              description={item?.description}
            />
          ))}
        </div>
      </div>

      <div className="section-container" id="hamburger-section">
        <h2 className="section-title">
          Nos <span>Couscous</span>
        </h2>
        <div className="section">
          {couscous.map((item, index) => {
            // Determine if this item is one of the last two items in an array with an odd number
            const isTwoInLastRow = couscous.length % 3 === 2;
            const isLastOrSecondToLastItem = index >= couscous.length - 2;
            const className =
              isTwoInLastRow && isLastOrSecondToLastItem
                ? "last-row-two-items"
                : "";

            return (
              <Card
                key={item?._id}
                price={item?.price}
                img={item?.image}
                name={item?.name}
                description={item?.description}
                className={className}
              />
            );
          })}
        </div>
      </div>

      <div className="section-container" id="hamburger-section">
        <h2 className="section-title">
          Nos <span>Tajines</span>
        </h2>
        <div className="section">
          {tajines.map((item, index) => {
            const isTwoInLastRow = tajines.length % 3 === 2;
            const isLastOrSecondToLastItem = index >= tajines.length - 2;
            const className =
              isTwoInLastRow && isLastOrSecondToLastItem
                ? "last-row-two-items"
                : "";

            return (
              <Card
                key={item?._id}
                price={item?.price}
                img={item?.image}
                name={item?.name}
                description={item?.description}
                className={className}
              />
            );
          })}
        </div>
      </div>

      <div className="section-container" id="hamburger-section">
        <h2 className="section-title">
          Nos <span>Sandwichs</span>
        </h2>
        <div className="section">
          {sandwiches.map((item) => (
            <Card
              key={item?._id}
              price={item?.price}
              img={item?.image}
              name={item?.name}
              description={item?.description}
            />
          ))}
        </div>
      </div>

      <div className="section-container" id="hamburger-section">
        <h2 className="section-title">
          Nos <span>Tacos</span>
        </h2>
        <div className="section">
          {tacos.map((item) => (
            <Card
              key={item?._id}
              price={item?.price}
              img={item?.image}
              name={item?.name}
              description={item?.description}
            />
          ))}
        </div>
      </div>

      <div className="section-container" id="hamburger-section">
        <h2 className="section-title">
          Nos <span>Salades</span>
        </h2>
        <div className="section">
          {salades.map((item) => (
            <Card
              key={item?._id}
              price={item?.price}
              img={item?.image}
              name={item?.name}
              description={item?.description}
            />
          ))}
        </div>
      </div>

      <div className="section-container" id="hamburger-section">
        <h2 className="section-title">
          Nos <span>Gateaux</span>
        </h2>
        <div className="section">
          {gateaux.map((item, index) => {
            const isTwoInLastRow = gateaux.length % 3 === 2;
            const isLastOrSecondToLastItem = index >= gateaux.length - 2;
            const className =
              isTwoInLastRow && isLastOrSecondToLastItem
                ? "last-row-two-items"
                : "";

            return (
              <Card
                key={item?._id}
                price={item?.price}
                img={item?.image}
                name={item?.name}
                description={item?.description}
                className={className}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
