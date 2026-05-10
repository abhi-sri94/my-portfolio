import { TypeAnimation } from 'react-type-animation'
import profilePic from './assets/abhishek.jpg'
import SafarShareImg from './assets/SafarShare.png'

import Dayli1 from './assets/Dayli1.png'
import Dayli2 from './assets/Dayli2.png'
import Dayli3 from './assets/Dayli3.png'

import rockclimb1 from './assets/rockclimb1.png'
import rockclimb2 from './assets/rockclimb2.png'
import rockclimb3 from './assets/rockclimb3.png'
export default function App() {
  const projects = [
    {

      title: 'SafarShare',
      description: 'India-focused ride-sharing platform designed to improve passenger safety, smart ride management, and reliable intercity travel experiences.',
      tech: ['React', 'Node.js', 'MongoDB'],
      live: 'https://safarshare.in',
      github: 'https://github.com/abhi-sri94/SafarShare',
      images: [SafarShareImg],
    },
    {
      title: 'Dayli Delivery',
      description: 'A modern quick-commerce grocery delivery platform focused on ultra-fast local deliveries, smooth ordering experience, and scalable operations.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      live: 'https://dayli.co.in',
      github: 'https://github.com/abhi-sri94',
      images: [Dayli1, Dayli2, Dayli3],
    },
    {
      title: 'Rockclimb Networks',
      description: 'A digital solutions company website showcasing services like web development, app development, hosting, digital marketing, and IT security solutions.',
      tech: ['React', 'Web Development', 'Hosting'],
      live: 'https://rockclimbnetworks.com',
      github: 'https://github.com/abhi-sri94/rcn-website',
      images: [rockclimb1, rockclimb2, rockclimb3],
    },

  ];

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'Tailwind CSS',
    'Firebase',
    'GitHub',
    'Vercel',
    'UI/UX Design',
    'Responsive Design',
  ];

  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-6">
          <h1 className="text-3xl font-extrabold tracking-tight">Abhishek.</h1>

          <div className="hidden md:flex gap-10 text-lg font-medium text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto animate-fadeIn grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-400 uppercase tracking-[0.3em] mb-4 text-sm">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1500,
                  'React Developer',
                  1500,
                  'Startup Builder',
                  1500,
                  'MERN Engineer',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Abhishek <br /> Srivastava
            </h1>

            <p className="text-gray-300 text-xl leading-loose max-w-2xl mb-8">
              Full Stack Developer & Startup Builder.<br />
              Creating scalable platforms, modern interfaces,<br />
              and real-world digital solutions.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 transition duration-300 px-6 py-3 rounded-2xl font-medium shadow-lg hover:scale-105 hover:shadow-blue-500/40"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-white/20 hover:border-white transition duration-300 px-6 py-3 rounded-2xl font-medium shadow-lg hover:scale-105 hover:shadow-white/20"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="border border-white/20 hover:border-white transition duration-300 px-6 py-3 rounded-2xl font-medium shadow-lg hover:scale-105 hover:shadow-purple-500/30"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/30 animate-float">

              <img
                src={profilePic}
                alt="Abhishek"
                className="w-full h-full rounded-full object-cover border-4 border-purple-500 hover:scale-105 transition duration-500"
              />

            </div>
          </div>
        </div>
      </section >

      {/* About Section */}
      < section id="about" className="py-24 px-6 border-t border-white/10" >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-10 relative z-10">
            <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 hover:border-purple-500/40 hover:-translate-y-2 transition duration-300 shadow-lg hover:shadow-purple-500/20">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>

              <p className="text-gray-400 leading-relaxed">
                I’m a Full Stack Developer and startup builder passionate about creating scalable digital products and modern web experiences. I enjoy transforming ideas into clean, high-performance applications that solve real-world problems.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 hover:border-purple-500/40 hover:-translate-y-2 transition duration-300 shadow-lg hover:shadow-purple-500/20">
              <h3 className="text-2xl font-semibold mb-4">What I Do</h3>

              <p className="text-gray-400 leading-relaxed">
                I specialize in frontend development, backend systems, responsive interfaces, and scalable architectures. My focus is building fast, user-friendly products with clean design, smooth performance, and real business value.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* Projects */}
      < section
        id="projects"
        className="py-24 px-6 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-14">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition duration-300"
              >
                <div className="grid grid-cols-1 gap-3 mb-6 max-h-[420px] overflow-y-auto pr-1">
                  {project.images?.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={project.title}
                      className="w-full h-52 object-cover rounded-2xl border border-white/10 hover:scale-[1.02] transition duration-300"
                    />
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 hover:border-white px-5 py-2 rounded-xl transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Skills */}
      < section id="skills" className="py-24 px-6 border-t border-white/10" >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 tracking-wide">
            <span className="text-teal-300">tech</span>
            <span className="text-purple-400">:</span>
            <span className="text-blue-200">skills</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#151515] to-[#1f1f1f] 
                    border border-white/10 rounded-2xl px-6 py-5
                    flex items-center justify-center
                    hover:border-cyan-400
                    hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]
                    hover:-translate-y-2
                    transition duration-300"
              >
                <span className="text-lg font-semibold text-white group-hover:text-cyan-400 transition">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Experience */}
      < section className="py-24 px-6 border-t border-white/10" >
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold mb-14">Experience</h2>

          <div className="space-y-8">
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-2">
                Founder & Developer — Rockclimb Networks (2024 - Present)
              </h3>
              <p className="text-gray-400">
                Building web solutions, digital products, hosting services, and
                IT solutions for businesses.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-2">
                Founder & Developer — SafarShare (In Development)
              </h3>
              <p className="text-gray-400">
                Developing a next-generation ride-sharing platform focused on
                safety, reliability, and smart ride matching.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-2">
                Founder & Developer — Dayli Delivery (In Development)
              </h3>
              <p className="text-gray-400">
                Developing a quick-commerece plattform for same-day grocery.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-2">
                Full Stack Developer
              </h3>
              <p className="text-gray-400">
                Designing and developing responsive web applications and startup
                products using modern JavaScript technologies.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* Contact */}
      < section
        id="contact"
        className="py-15 px-6 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto text-center">

          <div className="mt-16">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-10">

              <span className="text-blue-300">
                Want to collaborate on a new project
              </span>

              <br />

            </h2>

            <p className="text-lg md:text-xl">

              <span className="text-pink-500">
                Contact at
              </span>{" "}

              <a
                href="mailto:asri.4247@gmail.com"
                className="text-emerald-400 hover:text-emerald-300 transition"
              >
                asri.4247@gmail.com
              </a>

            </p>
          </div>


        </div>
      </section >

      {/* Footer */}
      < footer className="border-t border-white/10 py-2 text-center text-gray-500 text-sm" >
        Designed & Developed by Abhishek Srivastava
      </footer >
    </div >
  );
}
