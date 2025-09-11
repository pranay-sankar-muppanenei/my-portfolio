import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
	return (
		<section
			id="section5"
			className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-black text-white"
		>
			{/* Heading */}
			<motion.h2
				className="text-4xl font-bold mb-10 text-center"
				initial={{ y: -50, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ once: true }}
			>
				Let’s Connect
			</motion.h2>

			{/* Contact Info */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
				{/* Email */}
				<motion.a
					href="mailto:pranaysankarmuppaneni@gmail.com"
					className="flex items-center gap-4 p-6 rounded-lg bg-gray-900 border border-gray-700 hover:bg-gray-800 transition"
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<FaEnvelope className="text-2xl text-blue-400" />
					<div>
						<p className="text-lg font-semibold">Email</p>
						<p className="text-gray-300">pranaysankarmuppaneni@gmail.com</p>
					</div>
				</motion.a>

				{/* Phone */}
				<motion.a
					href="tel:+919000530451"
					className="flex items-center gap-4 p-6 rounded-lg bg-gray-900 border border-gray-700 hover:bg-gray-800 transition"
					initial={{ x: 50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<FaPhoneAlt className="text-2xl text-green-400" />
					<div>
						<p className="text-lg font-semibold">Phone</p>
						<p className="text-gray-300">+91 90005 30451</p>
					</div>
				</motion.a>

				{/* LinkedIn */}
				<motion.a
					href="https://www.linkedin.com/in/pranay-sankar-muppaneni-05906025b/"
					target="_blank"
					className="flex items-center gap-4 p-6 rounded-lg bg-gray-900 border border-gray-700 hover:bg-gray-800 transition"
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
				>
					<FaLinkedin className="text-2xl text-blue-500" />
					<div>
						<p className="text-lg font-semibold">LinkedIn</p>
						<p className="text-gray-300">linkedin.com/in/pranay-sankar-muppaneni</p>
					</div>
				</motion.a>

				{/* GitHub */}
				<motion.a
					href="https://github.com/pranay-sankar-muppanenei"
					target="_blank"
					className="flex items-center gap-4 p-6 rounded-lg bg-gray-900 border border-gray-700 hover:bg-gray-800 transition"
					initial={{ x: 50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					viewport={{ once: true }}
				>
					<FaGithub className="text-2xl text-gray-300" />
					<div>
						<p className="text-lg font-semibold">GitHub</p>
						<p className="text-gray-300">github.com/pranay-sankar-muppanenei</p>
					</div>
				</motion.a>
			</div>

			{/* Footer Line */}
		
		</section>
	);
}
