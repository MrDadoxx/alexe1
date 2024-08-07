import "./SectionLink.css";
import { scrollToSection } from "../functions/scrollToSection";

interface LinkSectionProps {
  elementId: string;
  text: string;
  imagePath: string;
}

export function LinkSection({ elementId, text, imagePath }: LinkSectionProps) {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    scrollToSection(event, elementId);
  };

  return (
    <a href="#" onClick={handleClick} className="link-section">
      <span>{text}</span>
      <img src={imagePath} alt="Icon" />
    </a>
  );
}
