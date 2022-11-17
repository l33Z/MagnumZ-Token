import magImg from "../assets/1 (2).png";
import "../Styles/home.css";
import Header from "../Components/Header";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div className="mainHome">
        <div className="leftHomeSide">
          <img src={magImg} alt="img" />
        </div>
        <div className="rightHomeSide">
          <h1>MagnumZ Token (MAZTO)</h1>
          <div className="infoMag">
            <p>
              MagnumZ Token is a cryptocurrency forked from the Goerli
              blockchain.Magnum Token was created as a satire of cryptocurrency
              culture in 2022 and takes its name from the Shiba Inu Doge meme.
            </p>
          </div>
          <div className="btnBuyNow">
            <NavLink to="/buynow">Buy now</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
