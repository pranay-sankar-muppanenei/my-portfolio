// src/components/Projects.jsx
import { motion } from "framer-motion";

export default function Projects() {
const projects = [
    // React Projects
    {
      title: "Nxt Watch",
      description:
        "Developed the Nxt Watch platform, a YouTube-inspired application where users can access various video categories and search for content.",
      link: "https://shanksnxtwatch.ccbp.tech/login",
      image: "https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png",
      credentials: {
        username: "rahul",
        password: "rahul@2021",
      },
    },
      {
      title: "Jobby App",
      description:
        "Created a Jobby App where users can login, search for jobs based on filters like salary, type (internship, full-time, part-time), and rating.",
      link: "#",
      image: "https://assets.ccbp.in/frontend/react-js/home-lg-bg.png",
      credentials: {
        username: "rahul",
        password: "rahul@2021",
      },
    },
    {
      title: "Nxt trends E-commerce",
      description:
        "A modern e-commerce experience inspired by Amazon and Flipkart, with React Router, JWT authentication, and REST API integration.",
      link: "https://shanksnxttrendz.ccbp.tech/login",
      image:
        "https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png",
      credentials: {
        username: "rahul",
        password: "rahul@2021",
      },
    },
    {
      title: "Password Manager",
      description:
        "Developed a Password Manager app that securely stores and manages user passwords, built with React, Node.js, and Express.",
      link: "https://shanks3412.ccbp.tech/",
      image: "https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png",
    },
 
    // Dynamic Projects
    
    // Jobby App
  
       {
      title: "Emoji Game",
      description:
        "Created an emoji game to test memory by matching emojis. Includes score tracking and React.js frontend.",
      link: "https://shanksmojigame.ccbp.tech/",
      image: "https://assets.ccbp.in/frontend/react-js/won-game-img.png",
    },
  ];

  return (
    <section id="section3" className="w-full px-6 py-16 bg-black text-white">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden shadow-lg hover:shadow-blue-900/40 transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-800 hover:text-white transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
