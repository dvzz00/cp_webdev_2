import html from "../Assets/svg/skills/html.svg";
import photoshop from "../Assets/svg/skills/photoshop.svg";
import afterEffects from "../Assets/svg/skills/after-effects.svg";
import css from "../Assets/svg/skills/css.svg";
import javascript from "../Assets/svg/skills/javascript.svg";
import react from "../Assets/svg/skills/react.svg";
import bootstrap from "../Assets/svg/skills/bootstrap.svg";
import tailwind from "../Assets/svg/skills/tailwind.svg";
import vitejs from "../Assets/svg/skills/vitejs.svg";
import python from "../Assets/svg/skills/python.svg";
import numpy from "../Assets/svg/skills/numpy.svg";
import premierepro from "../Assets/svg/skills/premierepro.svg";
import figma from "../Assets/svg/skills/figma.svg";
import canva from "../Assets/svg/skills/canva.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "after effects":
      return afterEffects;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "bootstrap":
      return bootstrap;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "python":
      return python;
    case "numpy":
      return numpy;
    case "premiere pro":
      return premierepro;
    case "figma":
      return figma;
    case "canva":
      return canva;
    default:
      break;
  }
};
