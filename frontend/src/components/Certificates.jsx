import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const certifications = [
  {
    title: "Tata Imagination Challenge(Semi-Finalist)",
    issuer: "Tata Group",
    year: "2024",
    link: "https://drive.google.com/file/d/138rU-7HDfyKNBEXBSmsO7GzAc5cEn6Qq/view?usp=sharing",
  },
    {
    title: "Node.js Certification",
    issuer: "Nxt Wave",
    year: "2025",
    link: "https://drive.google.com/file/d/1ZUEhimIrUWC3eBOWX-NUpwUIr1MntwXw/view?usp=sharing",
  },
  {
    title: "Build Static Website",
    issuer: "Nxt Wave",
    year: "2023",
    link: "https://drive.google.com/file/d/1rYTR7DvVQW9DaLZ4PeTXL98Z-63ra25p/view?usp=sharing",
  },
  {
    title: "Responsive Website Certification",
    issuer: "Nxt Wave",
    year: "2023",
    link: "https://drive.google.com/file/d/1xMQI4-dUXyuwVpfuvTXvhBprYz0rRw_L/view?usp=sharing",
  },
];


export default function Certificates() {
  return (
    <section
      id="section4"
      className="w-full mx-auto px-6 md:px-12 py-12 md:py-20 bg-black"
    >
      {/* Heading */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 flex items-center justify-center gap-2">
          <FaAward className="text-blue-500 text-3xl" />
          Awards & Certifications
        </h2>
        <p className="text-gray-400 mt-3 text-lg">
          Recognitions and achievements along my developer journey
        </p>
      </motion.div>

      {/* Grid of Certifications */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-black/60 border border-blue-600 rounded-xl shadow-lg shadow-blue-800/40 p-6 hover:scale-105 hover:shadow-blue-500/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              {cert.title}
            </h3>
            <p className="text-gray-300">{cert.issuer}</p>
            <p className="text-gray-400 text-sm">{cert.year}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                className="inline-block mt-3 text-blue-400 hover:underline text-sm"
              >
                View Certificate →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
