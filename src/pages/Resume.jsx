
import {
  Skills,
  Education,
  Experience,
  ToolsAndFramework,
} from "../components/PageSections/ResumeSection";

import { useAppContext } from "../contexts/AppContext";

const Resume = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "resume active" : "resume"}`}>
      <header>
        <h2 className='h2 article-title'>Resume</h2>
      </header>
      <Education />
      <Experience />
      <Skills />
      <ToolsAndFramework/>
    </article>
  );
};
export default Resume;
