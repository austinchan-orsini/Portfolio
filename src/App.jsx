import { useEffect, useRef } from 'react';
import ShinyText from './Components/ShinyText';
import SpotlightCard from './Components/SpotlightCard';
import Magnet from './Components/Magnet';
import VariableProximity from './Components/VariableProximity';
import GradientText from './Components/GradientText';
import ExperienceCard from './Components/ExperienceCard';
import ScrollProgress from './Components/ScrollProgress';
import Navbar from './Components/Navbar';
import WorkTimeline from './Components/WorkTimeline';
import GlareHover from './Components/GlareHover';
import { MapPin, CirclePlus, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import './fonts.css';
import NeonDino from './Components/NeonDino';
import SlideInOnView from './Components/SlideInOnView';
import ProjectsGrid from "./Components/ProjectsGrid";
function App() {
  const containerRef = useRef(null);
  const listRef = useRef(null);
  useEffect(() => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'; // don’t restore old scroll
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); // start at top on load
  }, []);
  const sectionStyle = {
    minHeight: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'white',
    fontSize: '2rem',
    background: '#0e0e0eff',
    padding: '2rem',
  };

  const experienceData = [
    {
      company: 'Department of Design and Construction',
      companyUrl: 'https://www.nyc.gov/site/ddc/about/ITS.page',
      role: 'Software Engineer Intern',
      location: 'New York, NY',
      dates: 'Jun 2025 – Aug 2025',
      bullets: [
        'Built a contract dashboard frontend with Angular/JS/HTML/SCSS; reduced initial load time by ~40 seconds.',
        'Verified and debugged API data with Postman, SSMS, and SQL stored procedures to ensure accuracy end-to-end.',
      ],
      direction: 'left',
    },
    {
      company: 'Flora',
      companyUrl: 'https://www.linkedin.com/company/flora-management-the-healthit-consultants/',
      role: 'Data Analyst Intern',
      location: 'Remote',
      dates: 'May 2025 – Aug 2025',
      bullets: [
        'Designed automated Alteryx workflows to aggregate healthcare campaign data from multiple sources.',
        'Built an AI/NLP reporting POC that summarized pharma news and tied it to campaign metrics, cutting report time ~60%.',
      ],
      direction: 'right',
    },
    {
      company: 'Computer Care and Learning',
      companyUrl: 'https://www.computercareandlearning.com/',
      role: 'Software Engineer Intern',
      location: 'Boston, MA',
      dates: 'Jun 2024 – Aug 2024',
      bullets: [
        'Engineered a secure public forum using Firebase, HTML, PHP, and public/private key encryption.',
        'Implemented data-backup workflows with Backblaze and Macrium Reflect to reduce recovery time.',
      ],
      direction: 'left',
    },
    {
      company: 'Metropolitan Jewish Health System',
      companyUrl: 'https://www.mjhs.org/',
      role: 'IT Hardware Intern',
      location: 'New York, NY',
      dates: 'Jun 2023 – Aug 2023',
      bullets: [
        'Imaged and configured 50+ devices for new hires, reducing onboarding time.',
        'Diagnosed and resolved 75+ hardware/network/app issues across 100+ systems to minimize downtime.',
      ],
      direction: 'right',
    },
  ];
  // somewhere near the top of App.jsx
const projectsData = [
  {
    title: "RecipeRank",
    description:
      "A social cooking platform for sharing and ranking recipes with real-time comments and saved lists.",
    image: "/images/reciperank.png", // optional
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Supabase"],
    links: {
      website: "#",
      source: "#",
    },
  },
  {
    title: "EagleGrades",
    description:
      "Boston College GPA calculator with course history, major filters, and semester planners.",
    image: "/images/eaglegrades.png",
    tags: ["React", "Vite", "Tailwind CSS"],
    links: {
      website: "#",
      source: "#",
    },
  },
  {
    title: "Tradingview Telegram Alerts",
    description:
      "Real-time trading alerts with chart snapshots pushed to Telegram to keep traders informed.",
    image: "/images/trading-telegram.png",
    tags: ["Docker", "FastAPI", "Python", "Selenium"],
    links: {
      source: "#",
      extra: [{ label: "Docs", href: "#" }],
    },
  },
];


  return (
    <>
      <ScrollProgress />
      <Navbar />

      {/* HOME */}
      <section id="home" style={{ ...sectionStyle, minHeight: '100vh', position: 'relative' }}>
        <SlideInOnView direction="left" offset={100} amount={0.5}>
          <div className="flex flex-row items-center justify-center w-full px-10 gap-8">
            {/* Left: text */}
            <div className="text-7xl font-semibold satoshi-text text-white flex flex-col items-start gap-4 flex-shrink-0 w-[720px]">
              <div className="flex items-center">
                <p className="mr-6">Hello, I'm</p>
                <GradientText
                  colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
                  animationSpeed={13}
                  showBorder={false}
                  className="custom-class"
                >
                  <strong>Austin</strong>
                </GradientText>
              </div>
              <div
                ref={containerRef}
                className="w-full"
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  height: 'auto',
                }}
              >
                <VariableProximity
                  label={`I am a sophomore at Boston College studying\nMathematics and Computer Science,\ninterested in and  software engineering.`}
                  className="variable-proximity-demo text-white text-4xl"
                  fromFontVariationSettings="'wght' 400"
                  toFontVariationSettings="'wght' 1900"
                  containerRef={containerRef}
                  radius={100}
                  falloff="linear"
                />
              </div>
            </div>

            {/* Right: dino */}
            <NeonDino size={500} strength={5} padding={600} />
          </div>
        </SlideInOnView>
        <button
          type="button"
          onClick={() => {
            const el = document.getElementById('work');
            if (!el) return;
            const y = el.getBoundingClientRect().top + window.pageYOffset - 80; // navbar height
            window.scrollTo({ top: y, behavior: 'smooth' });
          }}
          className="absolute left-1/2 -translate-x-1/2 bottom-25 flex flex-col items-center text-white/70 hover:text-white focus:outline-none"
          aria-label="Scroll to Work"
        >
          <span className="text-xs tracking-wide">Scroll</span>
          <ChevronDown className="w-6 h-6 mt-1 animate-bounce [stroke-width:2]" />
        </button>
      </section>


<section id="work" style={sectionStyle}>
<h1 className="satoshi-text text-5xl mb-6 md:text-6xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white text-left self-start w-full pl-16 md:pl-80">
  Work Experience
</h1>

  {/* ✅ OUTSIDE the 600px div: timeline (left) + cards (right) */}
  <div className="w-full max-w-screen-xl mx-auto flex items-start gap-8">
    
    <WorkTimeline targetRef={listRef} top={120} />
    <div ref={listRef} className="flex-1 space-y-6">
      {experienceData.map((job, i) => (
        <ExperienceCard key={i} {...job} direction="right" />
      ))}
    </div>
  </div>
</section>


      {/* PROJECTS */}
      <section id="projects" style={sectionStyle}>
<h1 className="satoshi-text text-5xl mb-6 md:text-6xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white text-left self-start w-full pl-16 md:pl-80">
  Projects
</h1>

  <div className="w-full max-w-screen-xl mx-auto px-6 md:px-8">
    <ProjectsGrid projects={projectsData} />
  </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={sectionStyle}>
        <div className="mt-8 mb-6 text-center text-white/90 space-y-1">
          <p className="text-sm md:text-base">
            Powered with midnight commits by <span className="font-semibold">Austin Chan-Orsini</span> 
          </p>
          <p className="text-sm md:text-base">
            Thanks for visiting! Let’s stay in touch{" "}
            <a
              className="underline"
            >
              chanorsi@bc.edu
            </a>
            {"🌙"}
          </p>
          <p p className="text-sm md:text-base">
            © 2025 Insert Website Link
          </p>
        </div>

        <div className="mt-4 flex items-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/austinchan-orsini"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group inline-flex items-center justify-center text-white/90 hover:text-white"
          >
            <Github className="w-8 h-8 transition-all [stroke-width:1.75] group-hover:[stroke-width:2.6]" />
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/austinchan-orsini"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group inline-flex items-center justify-center text-white/90 hover:text-white"
          >
            <Linkedin className="w-8 h-8 transition-all [stroke-width:1.75] group-hover:[stroke-width:2.6]" />
          </a>
          {/* Email */}
          <a
            href="mailto:chanorsi@bc.edu"
            aria-label="Email"
            className="group inline-flex items-center justify-center text-white/90 hover:text-white"
          >
            <Mail className="w-8 h-8 transition-all [stroke-width:1.75] group-hover:[stroke-width:2.6]" />
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
