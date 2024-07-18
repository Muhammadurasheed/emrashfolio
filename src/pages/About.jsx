import FadeIn from "../components/FadeIn";
import {
  Clients,
  Services,
  Testimonials,
} from "../components/PageSections/AboutSection";

import { useAppContext } from "../contexts/AppContext";

const About = () => {
  const { isPageActive } = useAppContext();

  return (
    <article className={`${!isPageActive ? "about active" : "about"}`}>
      <header>
        <FadeIn>
          <h2 className='h2 article-title'>About me</h2>
        </FadeIn>
      </header>
      <section className='about-text'>
        <FadeIn>
          <p>
          Hi 👋, I am Rasheed, a dedicated software engineer with over 5 years of professional experience. My passion lies in leveraging technology to solve real-world problems and drive business success. Specializing in AI/ML engineering for the past 3 years, I have developed and deployed intelligent systems using TensorFlow and Keras, creating innovative solutions that push the boundaries of what’s possible.
          </p>
        </FadeIn>
        <FadeIn>
          <p>
          Also, I have a strong expertise in mobile app development with Flutter, building robust and user-friendly applications for both Android and iOS platforms. 
          </p>
        </FadeIn>
        <FadeIn>
          <p>
          My experience in web development using React has enabled me to create responsive, interactive, and high-performance web applications that deliver exceptional user experiences.
          </p>
        </FadeIn>
        <FadeIn>
          <p>
         I'm also experienced in technical writin Using tools like Postman and Swagger UI. I craft documentation that is SEO optimied for ease of access and useful for diverse audiences, from developers to end-users.
          </p>
        </FadeIn>
      </section>
      <Services />
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <Clients />
      </FadeIn>
    </article>
  );
};
export default About;
