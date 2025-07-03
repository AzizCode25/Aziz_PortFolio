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
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 100,
        
        interactivity: {
          events: {
            onClick: { enable: false },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: { enable: false }
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            }
          },
        },
        
        particles: {
          color: { 
            value: "#de9168 ", // Hauptfarbe Orange
          },
          links: {
            color: "#d8bc97", // Warmes Gold/Orange für Links
            distance: 150, 
            enable: true,
            opacity: 0.8, // Realistischer Opacity-Wert (0-1)
            width: 1
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: "bounce",
            random: false,
            straight: false
          },
          number: {
            density: { enable: true, area: 1000 },
            value: 80
          },
          opacity: {
            value: 1.8, // Korrigierter Opacity-Wert (0-1)
            animation: {
              enable: true,
              speed: 0.1,
              minimumValue: 1
            }
          },
          shape: { type: "circle" },
          size: {
            value: { min: 2, max: 6 }, // Leichte Variation für Natürlichkeit
          }
        },
        detectRetina: false,
        smooth: false,
        motion: { reduce: true }
      }}
    />
  );
};

export default AnimationContainer;