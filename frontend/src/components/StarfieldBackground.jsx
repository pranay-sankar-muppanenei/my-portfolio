import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function StarfieldBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#000" },
        fullScreen: { enable: true, zIndex: 0 },
        particles: {
          number: { value: 120, density: { enable: true, area: 800 } },
          color: { value: "#fff" },
          shape: { type: "circle" },
          opacity: { value: 0.8, random: true },
          size: { value: 1.5, random: true },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
            trail: { enable: true, length: 5, fillColor: "#000" }
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
