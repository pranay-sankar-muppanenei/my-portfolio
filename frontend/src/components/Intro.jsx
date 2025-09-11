import { motion } from "framer-motion";

import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Intro() {
	return (
		<section className="flex flex-col min-h-screen md:flex-row items-center justify-around w-full px-3 mx-auto py-16 bg-black shadow-lg" id="section1">
			{/* Left Text with slide-in */}
			<motion.div
				className="flex flex-col mb-8 md:mb-0"
				initial={{ x: -100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ once: true }}
			>
				<p className="text-4xl mb-2 text-white">Hello, I am</p>
				<h1 className="text-5xl font-bold text-white">Pranay M</h1>

				<div className="flex items-center gap-4 mt-4">
					<hr className="w-16 h-[3px] bg-gray-700 border-0" />
					<p className="text-gray-300 text-3xl font-bold">MERN Developer</p>
				</div>

				{/* Resume Download */}
				<a href="/resumelure.pdf" download className="mt-6 w-auto flex items-center justify-center py-2 border border-gray-700 rounded text-gray-200 hover:bg-gray-800 hover:text-white transition">
					<span className="mr-2 text-[20px]">Resume</span>
					<FaDownload />
				</a>

				{/* Social Icons */}
				<div className="flex gap-4 mt-6">
					<a href="https://linkedin.com" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700 border border-gray-700 transition">
						<FaLinkedin />
					</a>
					<a href="https://github.com" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700 border border-gray-700 transition">
						<FaGithub />
					</a>
				</div>
			</motion.div>

			{/* Right Profile with slide-in */}
			<motion.div
				className="w-90 h-100 rounded-full border-4 border-gray-800 overflow-hidden bg-gray-900"
				initial={{ x: 100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
				viewport={{ once: true }}
			>
				<img src="/profile.jpg" alt="Pranay" className="w-full h-full object-cover object-center" />
			</motion.div>
		</section>
	);
}
