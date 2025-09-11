import { FaHouse, FaFile, FaAward } from "react-icons/fa6";
import { FaUser, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
		return (
			<nav className="sticky top-0 flex items-center justify-between w-full bg-black/90 shadow-md px-20 py-2 z-50">
				{/* Left: Name */}
				<div className="text-xl font-bold uppercase text-white tracking-wide">pranay sankar m</div>
				{/* Right: Nav elements */}
				<div className="flex justify-between w-3/5 max-w-lg">
					{[
						{ icon: <FaHouse />, text: "Home", link: "#section1" },
						{ icon: <FaUser />, text: "About", link: "#section2" },
						{ icon: <FaFile />, text: "Projects", link: "#section3" },
						{ icon: <FaAward />, text: "Awards", link: "#section4" },
						{ icon: <FaEnvelope />, text: "Contact", link: "#section5" },
					].map((item, idx) => (
						<a href={item.link} key={idx} className="mb-0 group">
							<button className="flex items-center h-12 w-12 md:w-auto md:px-2 rounded-xl  text-gray-200 focus:outline-none">
								{/* Show icon below md, text above md */}
								<span className="block md:hidden">{item.icon}</span>
								<span className="hidden md:block font-semibold text-base relative transition-colors duration-300">
									{item.text}
									<span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gray-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
								</span>
							</button>
						</a>
					))}
				</div>
			</nav>
		);
}
