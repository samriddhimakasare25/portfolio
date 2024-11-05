import { AboutMe, AnimatedTitle, Border, ContactForm, Container, FadeIn, GridPattern, MyWork, Section, SectionHeader, Skills, Socials, Stars, WorkExperience } from '@/components';
import { Archive, BookOpen, BriefCase, Envelope } from '@/icons';

const Page = () => {
  const sections = [
    { index: 0, title: 'About Me', id: 'about-me' },
    { index: 1, title: 'Work Experience', id: 'work-experience' },
    { index: 2, title: 'Skills', id: 'skills' },
    { index: 3, title: 'My Work', id: 'my-work' },
    { index: 4, title: 'Contact Me', id: 'contact' },
  ];

  const content = [
    {
      id: sections[0].id,
      sectionHeader: {
        title: 'About Me',
        description: 'A brief introduction about me',
        icon: <span />, // Default icon placeholder for About Me
      },
      mainContent: <AboutMe />,
    },
    {
      id: sections[1].id,
      sectionHeader: {
        icon: (
          <>
            <BriefCase height="28" width="28" />
            <span className="bg-work_experience_orange icon-blur absolute inset-0 -z-10"></span>
          </>
        ),
        title: 'Work Experience',
        description: (
          <div>
            <span className="text-work_experience_orange">Software Engineer</span> with <span className="text-work_experience_orange">2 years</span> of experience in the software industry
          </div>
        ),
      },
      mainContent: <WorkExperience />,
    },
    {
      id: sections[2].id,
      sectionHeader: {
        icon: (
          <>
            <BookOpen height="28" width="28" />
            <span className="bg-skills_purple icon-blur absolute inset-0 -z-10"></span>
          </>
        ),
        title: 'Skills',
        description: (
          <div>
            <span className="text-skills_purple">Full Stack</span> software developer with experience in <span className="text-skills_purple">Front-End</span> and <span className="text-skills_purple">Back-End</span> technologies
          </div>
        ),
      },
      mainContent: <Skills />,
    },
  ];

  return (
    <div>
      <Container>
        <Border />
        <AnimatedTitle />
        <ContactForm />
        <GridPattern />
        <FadeIn>
          <div className="scroll-down">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </FadeIn>
        <Border />
      </Container>
      <div id="stars-container" className="relative">
        <Container>
          <Stars id="stars" />
          {content.map((section, index) => (
            <Section key={index} id={section.id} className="pt-24 mt-28">
              <Border />
              <SectionHeader {...section.sectionHeader} />
              {section.mainContent}
            </Section>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Page;
