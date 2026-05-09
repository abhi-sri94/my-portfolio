export default function Portfolio() {
  const projects = [
    {
      title: 'SafarShare',
      description:
        'India-focused ride-sharing platform built with enhanced passenger safety, smart ride management, and scalable architecture.',
      tech: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Dayli Delivery',
      description:
        'Quick-commerce grocery delivery platform focused on ultra-fast local delivery experiences.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
    },
    {
      title: 'Rockclimb Networks',
      description:
        'Digital solutions company providing web development, app development, hosting, and IT services.',
      tech: ['Web Development', 'Hosting', 'IT Solutions'],
    },
    {
      title: 'Reco App',
      description:
        'Modern apartment and community management application with responsive UI and clean user experience.',
      tech: ['React Native', 'UI/UX', 'Frontend'],
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
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">Abhishek.</h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-400 uppercase tracking-[0.3em] mb-4 text-sm">
              Full Stack Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Abhishek <br /> Srivastava
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
              Software Engineer and Startup Builder creating scalable digital
              products like SafarShare, Dayli Delivery, and Rockclimb Networks.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-2xl font-medium"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-white/20 hover:border-white transition px-6 py-3 rounded-2xl font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-0 flex items-center justify-center shadow-2xl shadow-blue-500/30">
              <div className="w-72 h-72 rounded-full bg-zinc-900 flex items-center justify-center text-7xl font-bold">
                AS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>

              <p className="text-gray-400 leading-relaxed">
                I am a Full Stack Developer and entrepreneur passionate about
                building modern digital products and startup solutions. I enjoy
                creating scalable web platforms, mobile experiences, and clean
                user interfaces that solve real-world problems.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10">
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
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-24 px-6 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-14">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition duration-300"
              >
                <div className="h-52 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 mb-6 flex items-center justify-center text-4xl font-bold text-gray-600">
                  {project.title.charAt(0)}
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
                  <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl transition">
                    Live Demo
                  </button>

                  <button className="border border-white/20 hover:border-white px-5 py-2 rounded-xl transition">
                    GitHub
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-14">Skills & Technologies</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-white/10 rounded-2xl py-6 text-center hover:border-blue-500 hover:-translate-y-1 transition"
              >
                <p className="font-medium text-gray-200">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-14">Experience</h2>

          <div className="space-y-8">
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-2">
                Founder — Rockclimb Networks
              </h3>
              <p className="text-gray-400">
                Building web solutions, digital products, hosting services, and
                IT solutions for businesses.
              </p>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-2">
                Founder — SafarShare
              </h3>
              <p className="text-gray-400">
                Developing a next-generation ride-sharing platform focused on
                safety, reliability, and smart ride matching.
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
      </section>

      {/* Contact */}
      <section
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
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Abhishek Srivastava. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}
