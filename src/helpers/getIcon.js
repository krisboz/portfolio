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

import { SiSqlite, SiExpress } from "react-icons/si";

import { GiBearFace } from "react-icons/gi";

import { FaReact, FaNodeJs } from "react-icons/fa6";

const getIcon = (icons) => {
  const iconMap = {
    html: BiLogoHtml5,
    css: BiLogoCss3,
    javascript: BiLogoJavascript,
    react: FaReact,
    firebase: BiLogoFirebase,
    redux: BiLogoRedux,
    express: SiExpress,
    sass: BiLogoSass,
    git: BiLogoGit,
    github: BiLogoGithub,
    zustand: GiBearFace,
    sqlite: SiSqlite,
    node: FaNodeJs,
  };

  return icons.map((icon) => {
    const IconComponent = iconMap[icon];
    return IconComponent ? IconComponent : null;
  });
};

export default getIcon;
