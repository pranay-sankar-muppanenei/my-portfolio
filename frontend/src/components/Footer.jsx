// src/components/Footer.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="w-full bg-black text-gray-400 py-6 border-t border-gray-800">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between  px-6">
				{/* Left - Copyright */}
				<p className="text-sm text-center md:text-center">
					© {new Date().getFullYear()} Pranay M. All rights reserved.
				</p>

				{/* Right - Social Links */}
				<div className="flex gap-4 mt-4 md:mt-0">
					<a
						href="https://www.linkedin.com/in/pranay-sankar-muppaneni-05906025b/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-400 hover:text-blue-500 transition"
					>
						<FaLinkedin size={22} />
					</a>
					<a
						href="https://github.com/pranay-sankar-muppanenei"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-400 hover:text-white transition"
					>
						<FaGithub size={22} />
					</a>
				</div>
			</div>
		</footer>
	);
}
