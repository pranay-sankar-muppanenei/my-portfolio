import { motion } from "framer-motion";
import { Briefcase, Code, BookOpen, Github, Linkedin } from "lucide-react";

export default function About() {
	return (
		<section id="section2" className="w-full mx-auto px-6 py-16 bg-black">
			{/* Container */}
			<motion.div
				className="max-w-5xl mx-auto bg-black/60 backdrop-blur-md border border-blue-600 rounded-2xl shadow-2xl p-8 md:p-12"
				initial={{ y: 50, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: true }}
			>
				{/* Heading */}
				<h2 className="text-4xl font-bold text-gray-100 mb-10 text-center">
					About Me
				</h2>

				{/* Intro */}
				<div className="mb-10 text-center">
					<p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
						<span className="font-semibold text-blue-400">Hi, I’m Pranay</span> 👋  
						An undergraduate at <span className="font-semibold text-gray-100">IIIT-AP</span> and a{" "}
						<span className="font-semibold text-gray-100">Full Stack Web Developer</span> passionate
						about building modern, scalable, and user-friendly applications.
					</p>
				</div>

				{/* Quick Highlights */}
				<div className="grid gap-6 md:grid-cols-2 mb-10">
					<div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-600 transition">
						<h3 className="text-xl font-semibold text-gray-100 mb-3">🎯 Current Focus</h3>
						<p className="text-gray-400">
							🌱 Learning <span className="font-medium text-gray-200">Data Structures & Algorithms</span>, 
							currently focusing on <span className="text-blue-400">Graphs</span>.
						</p>
					</div>
					<div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-600 transition">
						<h3 className="text-xl font-semibold text-gray-100 mb-3">🤝 Collaboration</h3>
						<p className="text-gray-400">
							Open to collaborating on{" "}
							<span className="font-medium text-gray-200">Open Source projects</span> and real-world
							organizations.
						</p>
					</div>
				</div>

				{/* Internship Experience */}
				<div className="mb-10">
					<h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
						<Briefcase className="w-6 h-6" /> Internship Experience
					</h3>
					<div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
						<h4 className="text-lg font-semibold text-gray-100">
							Frontend Developer Intern – Yashik Yadav & Co. (July – Aug 2025)
						</h4>
						<ul className="list-disc pl-6 mt-3 text-gray-400 space-y-2">
							<li>
								Built responsive web frontends using{" "}
								<span className="font-medium text-gray-200">Next.js</span> and{" "}
								<span className="font-medium text-gray-200">Tailwind CSS</span>.
							</li>
							<li>Developed reusable UI components and optimized performance.</li>
							<li>
								Collaborated with teams using{" "}
								<span className="font-medium text-gray-200">GitHub</span> for version control and code
								reviews.
							</li>
							<li>Delivered production-ready web solutions for real-world projects.</li>
						</ul>
					</div>
				</div>

				{/* Open Source Contributions */}
				<div className="mb-10">
					<h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
						<Code className="w-6 h-6" /> Open Source Contributions
					</h3>
					<p className="text-gray-400">
						Actively contributing to projects and preparing for{" "}
						<span className="font-medium text-gray-200">GSoC</span>.  
						💬 Ask me about <span className="text-blue-400">React</span>,{" "}
						<span className="text-blue-400">Node.js</span>,{" "}
						<span className="text-blue-400">Express</span>, web app deployment, or open source experience.
					</p>
				</div>

				{/* Contact / Links */}
				<div className="flex justify-center gap-6 mt-6">
					<a
						href="https://github.com/yourusername"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
					>
						<Github className="w-5 h-5" /> GitHub
					</a>
					<a
						href="https://linkedin.com/in/yourusername"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
					>
						<Linkedin className="w-5 h-5" /> LinkedIn
					</a>
				</div>
			</motion.div>
		</section>
	);
}
