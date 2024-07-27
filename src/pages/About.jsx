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
          <h2 className='h2 article-title'>Who am I?</h2>
        </FadeIn>
      </header>
      <section className='about-text'>
        <FadeIn>
          <p>
            Hi there👋! I'm Rasheed, a passionate and innovative software engineer with over 5 years of experience. My journey in the tech world is driven by a relentless curiosity and a desire to solve real-world problems. For the past 3 years, I've specialized in AI/ML engineering, leveraging tools like TensorFlow and Keras to develop and deploy intelligent systems that solve real-world problems and drive business success.
          </p>
        </FadeIn>
        <FadeIn>
          <p>
            While my core expertise lies in AI and machine learning, I'm also skilled in mobile app development with Flutter. I enjoy creating intuitive and user-friendly AI powered applications that provide seamless experiences on both Android and iOS platforms.
          </p>
        </FadeIn>
        <FadeIn>
          <p>
            In addition to my technical skills, I have a knack for technical writing, which I engage in during my free time. Using tools like Postman and Swagger UI, I craft clear and SEO-optimized documentation that aids both developers and end-users.
          </p>
        </FadeIn>
        <FadeIn>
          <p>
            Beyond the realm of technology, I have a deep love for critical and logical reasoning. I enjoy solving logical mathematical problems and often spend my leisure time engaged in these activities. Traveling is another passion of mine; exploring new places and meeting new people has helped in fueling my creativity also broadens my perspective, allowing me to approach challenges with a fresh outlook.
          </p>
        </FadeIn>
        <FadeIn>
          <p>
            My journey in tech is a blend of professional expertise and personal passions, all driven by a desire to push boundaries and create impactful solutions. Let's connect and see how we can innovate together!
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
