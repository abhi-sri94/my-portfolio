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
    'Netlify',
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
              Full Stack Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Abhishek <br /> Srivastava
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
              Software Engineer and Startup Builder creating scalable digital
              products like SafarShare, Dayli Delivery, and Rockclimb Networks.
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
                I am a Full Stack Developer and entrepreneur passionate about
                building modern digital products and startup solutions. I enjoy
                creating scalable web platforms, mobile experiences, and clean
                user interfaces that solve real-world problems.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 hover:border-purple-500/40 hover:-translate-y-2 transition duration-300 shadow-lg hover:shadow-purple-500/20">
              <h3 className="text-2xl font-semibold mb-4">What I Do</h3>

              <p className="text-gray-400 leading-relaxed">
                I work on frontend development, backend systems, startup product
                design, responsive web applications, and scalable architecture.
                My focus is building products that combine performance,
                simplicity, and real usability.
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
          <h2 className="text-4xl font-bold mb-14">Skills & Technologies</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-white/10 rounded-2xl py-6 text-center hover:border-blue-500 hover:bg-blue-500/10 hover:text-white hover:-translate-y-1 transition"
              >
                <p className="font-medium text-gray-200">{skill}</p>
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
        className="py-24 px-6 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let’s Build Something</h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Interested in working together, collaborating on a startup, or
            building a digital product? Let’s connect.
          </p>

          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10 max-w-2xl mx-auto">
            <div className="space-y-6 text-left">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
              />

              <button className="w-full bg-blue-500 hover:bg-blue-600 transition py-4 rounded-xl font-semibold text-lg">
                Send Message
              </button>
            </div>
          </div>

          <div className="mt-12 text-gray-500 text-sm">
            info@rockclimbnetworks.com
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm" >
        © 2026 Abhishek Srivastava.Built with React & Tailwind CSS.
      </footer >
    </div >
  );
}
