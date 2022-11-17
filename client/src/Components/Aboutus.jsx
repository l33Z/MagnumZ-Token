import "../Styles/aboutus.css";
import hero from "../assets/a.svg";
import Header from "../Components/Header";
import { NavLink } from "react-router-dom";

const Aboutus = () => {
  return (
    <>
      <Header />
      <div className="homeMain">
        <div className="leftSide">
          <h2>What is MagnumZ Token (MAZTO)</h2>
          <p>
            MagnumZ Token is a cryptocurrency forked from the Goerli
            blockchain.Magnum Token was created as a satire of cryptocurrency
            culture in 2022 and takes its name from the Shiba Inu Doge meme.
          </p>
          <p>
            The project was founded by Zeel Rabadiya, based on the idea that a
            comedic coin would receive more mainstream attention than a serious
            project like Bitcoin. Since its creation, a large community of fans
            including Elon Musk has rallied around and supported the coin.
          </p>
          <p>
            MagnumZ Token uses a Proof of Work consensus mechanism that requires
            dedicated mining equipment to mine new coins. The supply of Magnum
            Tokenis unlimited to discourage hoarding, reward miners, and keep
            transaction fees manageable. This does, however, mean that the coin
            is inflationary. Although it started as a joke,Magnum Token has
            become increasingly popular with investors among other major
            cryptocurrencies.
          </p>

          <div className="btnBuynow">
            <NavLink to="/buynow">Buy Now</NavLink>
          </div>
        </div>

        <div className="rightSide">
          <img src={hero} alt="mato" />
        </div>
      </div>
    </>
  );
};

export default Aboutus;
