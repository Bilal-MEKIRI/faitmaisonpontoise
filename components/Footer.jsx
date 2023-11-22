import "../styles/footer.scss";

import Button from "../components/Button";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content-container">
        <Button
          url={
            "https://www.instagram.com/fait_maison_pontoise?igshid=YmMyMTA2M2Y%3D"
          }
          content={"Instagram"}
          blank={"_blank"}
        />
        <div className="copyright">
          Created by <span className="name">FAIT MAISON</span> | © all rights
          reserved!
        </div>
      </div>
    </div>
  );
};

export default Footer;
