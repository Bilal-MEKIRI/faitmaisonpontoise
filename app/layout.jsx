import "../styles/globals.scss";
import "../styles/layout.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Promo from "../components/Promo";
import Head from "next/head";

export const metaData = {
  title: "Fait Maison Pontoise",
  description:
    "Venez à Fait Maison pour une cuisine fraîche et faite à la main. Accueil chaleureux et thé offert par notre chef sympathique à Pontoise. Un goût inoubliable!",
};

const layout = ({ children }) => {
  return (
    <html>
      <body>
        <Head>
          <title>{metaData.title}</title>
          <meta name="description" content={metaData.description} />
        </Head>
        <main className="layout">
          <Promo />
          <Nav />
          <div>{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default layout;
