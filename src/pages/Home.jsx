import { NavLink } from "react-router-dom";
import adept from "/src/assets/Capture d’écran du 2023-04-07 08-34-47.png";
import aknmode from "/src/assets/Capture d’écran du 2023-04-07 10-00-39.png";
import boutique from "/src/assets/Capture d’écran du 2023-04-07 10-11-54.png";
import skillhub from "/src/assets/Capture d’écran du 2023-04-07 10-14-15.png";
import sigma from "/src/assets/Capture d’écran du 2023-04-07 10-37-46.png";
import fylla from "/src/assets/Capture d’écran du 2023-04-07 11-29-42.png";

const Home = () => {
  return (
    <div className="container">
      <h1 className="name">Jean-Barron ALOKPON.</h1>
      <p className="desc">Voici quelques uns de mes réalisations.</p>
      <div className="projet">
        <div className="p">
          <div>
            <img src={adept} alt="adept" />
            <NavLink target="_blank" to="https://barronakn.github.io/Adept/">
              Adept
            </NavLink>
          </div>
          <div>
            <img src={aknmode} alt="aknmode" />
            <NavLink target="_blank" to="https://barronakn.github.io/aknmode/">
              Akn mode
            </NavLink>
          </div>
        </div>
        <div className="p">
          <div>
            <img src={boutique} alt="boutique" />
            <NavLink
              target="_blank"
              to="https://barronakn.github.io/boutiquemode/"
            >
              Boutique
            </NavLink>
          </div>
          <div>
            <img src={skillhub} alt="skillhub" />
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
            <img src={sigma} alt="sigma" />
            <NavLink target="_blank" to="https://barronakn.github.io/Sigma/">
              Sigma
            </NavLink>
          </div>
          <div>
            <img src={fylla} alt="fylla" />
            <NavLink target="_blank" to="https://barronakn.github.io/Fylla/">
              Fylla
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
