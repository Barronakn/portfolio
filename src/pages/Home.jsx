import { NavLink } from "react-router-dom";
import adept from "/src/assets/adept.png";
import aknmode from "/src/assets/aknmode.png";
import boutique from "/src/assets/boutique.png";
import skillhub from "/src/assets/skillhub.png";
import sigma from "/src/assets/sigma.png";
import fylla from "/src/assets/fylla.png";
import enjoy from "/src/assets/enjoy.png";

const Home = () => {
  return (
    <div className="container">
      <h1 className="name">Jean-Barron ALOKPON.</h1>
      <p className="desc">Voici quelques unes de mes réalisations.</p>
      <div className="projet">
        <div className="p">
          <div>
            <NavLink target="_blank" to="https://barronakn.github.io/Adept/">
              <img src={adept} alt="adept" />
            </NavLink>
            <NavLink target="_blank" to="https://barronakn.github.io/Adept/">
              Adept
            </NavLink>
          </div>
          <div>
            <NavLink target="_blank" to="https://aknmode-barronakn.vercel.app/">
              <img src={aknmode} alt="aknmode" />
            </NavLink>
            <NavLink target="_blank" to="https://aknmode-barronakn.vercel.app/">
              Akn mode
            </NavLink>
          </div>
        </div>
        <div className="p">
          <div>
            <NavLink target="_blank" to="https://barronakn.github.io/Sigma/">
              <img src={sigma} alt="sigma" />
            </NavLink>
            <NavLink target="_blank" to="https://barronakn.github.io/Sigma/">
              Sigma
            </NavLink>
          </div>
          <div>
            <NavLink target="_blank" to="https://fylla-1.vercel.app/">
              <img src={fylla} alt="fylla" />
            </NavLink>
            <NavLink target="_blank" to="https://fylla-1.vercel.app/">
              Fylla
            </NavLink>
          </div>
        </div>
        <div className="p">
          <div>
            <NavLink target="_blank" to="https://barronakn.github.io/Enjoy/">
              <img src={enjoy} alt="enjoy" />
            </NavLink>
            <NavLink target="_blank" to="https://barronakn.github.io/Enjoy/">
              Enjoy
            </NavLink>
          </div>
          <div>
            <NavLink
              target="_blank"
              to="https://barronakn.github.io/Competence-Center/"
            >
              <img src={skillhub} alt="skillhub" />
            </NavLink>
            <NavLink
              target="_blank"
              to="https://barronakn.github.io/Competence-Center/"
            >
              Skillhub
            </NavLink>
          </div>
        </div>
        <div className="p">
          <div>
            <NavLink
              target="_blank"
              to="https://barronakn.github.io/boutiquemode/"
            >
              <img src={boutique} alt="boutique" />
            </NavLink>
            <NavLink
              target="_blank"
              to="https://barronakn.github.io/boutiquemode/"
            >
              Boutique
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
