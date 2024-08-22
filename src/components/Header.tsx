import { useNavigate } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";
import { images } from "../constants/images";
import { LanguagesIcon, ThemeIcon } from "./Icons";
import { name } from "../constants/general";
import { setPageTitle } from "../functions/setPageTitle";
import "./Header.css"

export function Header() {
  const navigate = useNavigate();
  const { showLanguageSelector, setShowLanguageSelector, traductions } =
    useLanguage();
  const { toggleTheme } = useTheme();

  const handleClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPageTitle(`${name}: ${traductions.home}`);
  };

  const alexe1Img = typeof images.alexe1 === "string" ? images.alexe1 : "";

  return (
    <header>
      <button onClick={toggleTheme}>
        <ThemeIcon />
      </button>

      <div
        className="header__icon"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <img src={alexe1Img} alt={`${name} Icon`} />
      </div>

      <button onClick={() => setShowLanguageSelector(!showLanguageSelector)}>
        <LanguagesIcon />
      </button>
    </header>
  );
}
