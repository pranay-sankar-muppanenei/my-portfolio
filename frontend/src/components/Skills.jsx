import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMysql, SiGit, SiPython, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact size={40} color="#61DBFB" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} color="white" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={40} color="#38BDF8" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} color="#3C873A" /> },
    { name: "Express", icon: <SiExpress size={40} color="white" /> },
    { name: "SQL", icon: <SiMysql size={40} color="#00758F" /> },
    { name: "Git", icon: <SiGit size={40} color="#F1502F" /> },
    { name: "Python", icon: <SiPython size={40} color="#FFD43B" /> },
    { name: "HTML", icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={40} color="#1572B6" /> },
  ];

  // Predefined random-ish positions
  const positions = [
    "top-10 left-1/4",
    "top-20 right-1/4",
    "bottom-10 left-1/3",
    "bottom-20 right-1/3",
    "top-1/2 left-10",
    "top-1/3 right-10",
    "bottom-1/3 left-80",
    "top-2/3 right-20",
    "top-1/4 left-1/5",
    "bottom-1/4 right-1/5",
  ];

  return (
    <section className="relative w-full h-[600px] bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Center Title */}
      <h2 className="text-4xl font-bold text-center z-10">
        My <span className="text-blue-500">Skills</span>
      </h2>

      {/* Floating Skill Icons */}
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`absolute ${positions[index % positions.length]} 
          flex flex-col items-center animate-float hover:rotate-10`}
        >
          <div className="bg-gray-900 p-3 rounded-xl shadow-lg hover:scale-110 transition">
            {skill.icon}
          </div>
          <span className="text-sm mt-2">{skill.name}</span>
        </div>
      ))}

      {/* Floating Animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
