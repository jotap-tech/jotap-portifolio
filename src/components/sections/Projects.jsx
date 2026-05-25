import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition">
              
              <h3 className="text-xl font-bold mb-2">
                User CRUD API
              </h3>

              <p className="text-gray-400 mb-4">
                Full Stack CRUD application developed with React, Node.js,
                Express, Prisma ORM, and MongoDB Atlas. The project allows
                users to create, list, and delete users through a modern and
                responsive interface integrated with a REST API.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Prisma",
                  "Vite",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-400 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                    hover:shadow-[0_2px_8px_rgba(34,197,94,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="http://auth-api-bay-seven.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  Live Demo →
                </a>

                <a
                  href="https://github.com/jotap-tech/auth-api"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
