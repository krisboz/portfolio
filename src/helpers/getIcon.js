import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoFirebase,
  BiLogoRedux,
  BiLogoSass,
  BiLogoGit,
  BiLogoGithub,
} from "react-icons/bi";

import { GiBearFace } from "react-icons/gi";

import { FaReact } from "react-icons/fa6";

const getIcon = (icons) => {
  const iconMap = {
    html: BiLogoHtml5,
    css: BiLogoCss3,
    javascript: BiLogoJavascript,
    react: FaReact,
    firebase: BiLogoFirebase,
    redux: BiLogoRedux,
    sass: BiLogoSass,
    git: BiLogoGit,
    github: BiLogoGithub,
    zustand: GiBearFace,
  };

  return icons.map((icon) => {
    const IconComponent = iconMap[icon];
    return IconComponent ? IconComponent : null;
  });
};

export default getIcon;
