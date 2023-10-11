import "../styles/Skills.scss";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoFirebase,
  BiLogoRedux,
} from "react-icons/bi";
import Icon from "./Icon";
const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <section className="skills-container">
        <Icon name={"HTML"} />
        <Icon name={"CSS"} />
        <Icon name={"Sass"} />
        <Icon name={"JS"} />
        <Icon name={"React"} />
        <Icon name={"Firebase"} />
        <Icon name={"Redux"} />
      </section>
    </div>
  );
};

export default Skills;
