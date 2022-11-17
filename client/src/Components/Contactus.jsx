import Header from "../Components/Header";
import "../Styles/contactus.css";
import contatctImg from "../assets/1 (3).png";
import pp from "../assets/pp.png";

const Contactus = () => {
  return (
    <>
      <Header />
      <div className="mainContatc">
        <div className="leftConatctSide">
          <img src={contatctImg} alt="contactImg" />
        </div>
        <div className="rightContactSide">
          <div className="profilePic">
            <img src={pp} alt="profilepic" />
            <h2>Zeel Rabadiya</h2>
          </div>

          <div className="socialLinks">
            <ul>
              <li>
                <a href="https://twitter.com/Zeel562?s=08" target="blank">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ze_el_0_0/" target="blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGFQ_DnYtfKdAAAAYA8IVigohntVG4onYICs4-rhljKbsf-hjbazu7wENIjmZU_dbQvkNMMdiD_DXEOZ_7j980IZnCMKfMIcMoYnlP1ESNd_SlWXI4wkN52fJb0qRJXGVOrxEc=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fzeel-rabadiya-3a2510200"
                  target="blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/l33Z" target="blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
