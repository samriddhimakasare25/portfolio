import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const experience = [
  {
    title: 'Aikya Global inc | Frontend Developer.',
    date: 'Dec 2024 - Present',
    description: [
      'Developed front-end user interface using React, React Native and JavaScript for Web Apps, iOS and Android mobile applications.',
      'Developed and maintained React Native components, screens, and features for the mobile app using TDD practices.',
      'Collaborated with other developers to implement new features in a way that is consistent with existing codebase conventions.',
    ],
    image: { url: '/work/aikyaglobal_logo.jpeg', height: 96, width: 96, className: ''},
  },
  {
    title: 'Popln | UX Designer.',
    date: 'Dec 2024 - Present',
    description: [
      'Conducted comprehensive user research through surveys and interviews to identify user pain points, enhancing user experience and guiding design decisions for the Popln mobile app.',
      'Redesigned the entire mobile interface with a user-centric approach, improving navigation and accessibility while maintaining brand consistency.',
      'Developed high-fidelity prototypes in Figma, incorporating modern design principles and interactive components to deliver a seamless and visually engaging mobile experience.',
    ],
    image: { url: '/work/Popln.jpeg', height: 96, width: 96, className: ''},
  },
  {
    title: 'Zeuty | CEO/Founder.',
    date: 'Apr 2024 - Present',
    description: [
      'Founded and led Zeuty, a student housing platform aimed at solving housing challenges, securing a $5,000 angel grant to kickstart the project.',
      'Recruited and managed a multidisciplinary team of 30+, including UX designers, business strategists, and frontend/backend developers, fostering collaboration across all departments.',
      'Spearheading product development and strategic planning to build a PERN stack-based platform, focusing on improving access to reliable housing for students.',
    ],
    image: { url: '/work/zeuty.jpeg', height: 96, width: 96, className: '' },
  },
  {
    title: 'Easy Artisan Website | Marketing Intern .',
    date: 'Dec 2024 - Feb 2025',
    description: [
      'Created engaging graphics and visual content to enhance brand visibility and align with Asy Artisan’s unique style and target audience.',
      'Conducted market research to identify key trends and opportunities, refining the brand’s messaging and positioning in the artisan market.',
      'Developed and implemented a cohesive brand identity, improving brand consistency across digital platforms and increasing audience engagement.',
    ],
    image: { url: '/work/easy.png', height: 96, width: 96, className: 'bg-white' },
  },
  {
    title: 'Lotus Addiction Therapy | Lead Frontend Developer.',
    date: 'Dec 2023 - May 2024',
    description: [
      'Led a team of 6 developers, providing technical guidance in React Native and TypeScript, ensuring adherence to best practices and scalable development.',
      'Conducted regular code reviews and progress check-ins, fostering collaboration and improving code quality across the team.',
      'Managed project timelines and milestones, ensuring the team met deadlines while delivering a high-quality product aligned with business goals.',
    ],
    image: { url: '/work/l.jpeg', height: 96, width: 96, className: 'bg-white'},
  },
  {
    title: 'Site 4 U | Project Manager.',
    date: 'Mar 2024 - Apr 2024',
    description: [
      'Managed a team of 10 developers and designers, ensuring timely delivery of client projects while maintaining high-quality standards.',
      'Acted as the primary liaison between clients and the team, gathering requirements, translating them into actionable tasks, and providing regular progress updates.',
      'Oversaw project timelines and resource allocation, ensuring customer expectations were met and projects were delivered on schedule.',
    ],
    image: { url: '/work/site.jpeg', height: 96, width: 96, className: 'bg-white' },
  },
  {
    title: 'Sustainable Life App | UX Designer.',
    date: 'Feb 2023 - Aug 2023',
    description: [
      'Redesigned the Sustainable Life App’s user interface using Figma, focusing on improving usability, visual appeal, and user engagement.',
      'Developed high-fidelity prototypes and interactive mockups, ensuring a seamless and intuitive user experience aligned with sustainability-focused goals.',
      'Collaborated with cross-functional teams to integrate user feedback and refine design solutions for a more user-centric product.',
    ],
    image: { url: '/work/s.jpeg', height: 96, width: 96, className: 'bg-white' },
  }
  
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date} image={item.image}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({ children, title, date, image }: { children: React.ReactNode; title: string; date?: string; image: { url: string; className: string; height: number; width: number } }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto', image.className)}>
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden', image.className)}>
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
