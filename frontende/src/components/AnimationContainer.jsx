import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const AnimationContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="w-full h-full absolute translate-z-0"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fpsLimit: 0, // Reduziert für bessere Performance
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            repulse: { distance: 100 }
          }
        },
        particles: {
          color: { value: "#de9168" }, // Einfache Farbe
          links: {
            color: "#d8bc97",
            distance: 120,
            enable: true,
            opacity: 0.4
          },
          move: {
            enable: true,
            speed: 0.5, // Langsamere Bewegung
            outModes: "bounce"
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80 // Weniger Partikel
          },
          opacity: {
            value: { min: 0.3, max: 0.6 } // Einfacheres Opacity
          },
          size: {
            value: { min: 1, max: 3 } // Kleinere Partikel
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default AnimationContainer;