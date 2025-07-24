import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from "gsap";
import figmaSVG from '../assets/figma-original.svg';
import dockerSVG from '../assets/docker-original.svg';
import gitSVG from '../assets/git-original.svg';
import html5SVG from '../assets/html5-original.svg';
import css3SVG from '../assets/css3-original.svg';
import javascriptSVG from '../assets/javascript-original.svg';
import reactSVG from '../assets/react-original.svg';
import reduxSVG from '../assets/redux-original.svg';
import typescriptSVG from '../assets/typescript-original.svg';
import nodejsSVG from '../assets/nodejs-original.svg';
import expressSVG from '../assets/express-original.svg';
import javaSVG from '../assets/java-original.svg';
import springSVG from '../assets/spring-original.svg';
import mongodbSVG from '../assets/mongodb-original.svg';

const bentoData = [
  {
    title: 'Tools',
    className: 'row-span-2',
    skills: [
      { name: 'Git', icon: gitSVG },
      { name: 'Docker', icon: dockerSVG },
      { name: 'Figma', icon: figmaSVG },
    ],
    bg: 'rgba(24, 25, 43, 0.70)',
    border: '1px solid rgba(255,255,255,0.20)',
  },
  {
    title: 'Frontend',
    className: 'col-span-2',
    skills: [
      { name: 'React', icon: reactSVG },
      { name: 'Redux', icon: reduxSVG },
      { name: 'JavaScript', icon: javascriptSVG },
      { name: 'TypeScript', icon: typescriptSVG },
      { name: 'HTML5', icon: html5SVG },
      { name: 'CSS3', icon: css3SVG },
    ],
    bg: 'rgba(24, 25, 43, 0.70)',
    border: '1px solid rgba(255,255,255,0.20)',
  },
  {
    title: 'Backend',
    className: '',
    skills: [
      { name: 'Node.js', icon: nodejsSVG },
      { name: 'Express', icon: expressSVG },
      { name: 'Java', icon: javaSVG },
      { name: 'Spring', icon: springSVG },
    ],
    bg: 'rgba(24, 25, 43, 0.70)',
    border: '1px solid rgba(255,255,255,0.20)',
  },
  {
    title: 'Databases',
    className: '',
    skills: [
      { name: 'MongoDB', icon: mongodbSVG },
    ],
    bg: 'rgba(24, 25, 43, 0.70)',
    border: '1px solid rgba(255,255,255,0.20)',
  },
];

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;

const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = (radius) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${relativeX}%`);
  card.style.setProperty("--glow-y", `${relativeY}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
};

const ParticleCard = ({
  children,
  className = "",
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
}) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(
        Math.random() * width,
        Math.random() * height,
        glowColor,
      ),
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        },
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" },
        );

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseMove = (e) => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleClick = (e) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height),
      );

      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1,
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => ripple.remove(),
        },
      );
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("click", handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("click", handleClick);
      clearAllParticles();
    };
  }, [
    animateParticles,
    clearAllParticles,
    disableAnimations,
    enableTilt,
    enableMagnetism,
    clickEffect,
    glowColor,
  ]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{ ...style, position: "relative", overflow: "hidden" }}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const spotlightRef = useRef(null);
  const isInsideSection = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement("div");
    spotlight.className = "global-spotlight";
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest(".bento-section");
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll(".card");

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        cards.forEach((card) => {
          card.style.setProperty("--glow-intensity", "0");
        });
        return;
      }

      const { proximity, fadeDistance } =
        calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach((card) => {
        const cardElement = card;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) -
          Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity =
            (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(
          cardElement,
          e.clientX,
          e.clientY,
          glowIntensity,
          spotlightRadius,
        );
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current?.querySelectorAll(".card").forEach((card) => {
        card.style.setProperty("--glow-intensity", "0");
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

const BentoCardGrid = ({ children, gridRef, className }) => (
    <div
      ref={gridRef}
      className={`bento-section relative ${className}`}
      style={{ fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.5rem)" }}
    >
      {children}
    </div>
  );

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const Skills = ({
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 px-4 md:px-10 lg:px-20 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-wider text-center mb-8">
          My Skills
        </h2>
        <>
          <style>
            {`
              .bento-section {
                --glow-x: 50%;
                --glow-y: 50%;
                --glow-intensity: 0;
                --glow-radius: 200px;
                --glow-color: ${glowColor};
                --border-color: #392e4e;
                --background-dark: #060010;
                --white: hsl(0, 0%, 100%);
                --purple-primary: rgba(132, 0, 255, 1);
                --purple-glow: rgba(132, 0, 255, 0.2);
                --purple-border: rgba(132, 0, 255, 0.8);
              }
              
              .card--border-glow::after {
                content: '';
                position: absolute;
                inset: 0;
                padding: 6px;
                background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                    rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                    rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                    transparent 60%);
                border-radius: inherit;
                mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                mask-composite: subtract;
                -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                pointer-events: none;
                transition: opacity 0.3s ease;
                z-index: 1;
              }
              
              .card--border-glow:hover::after {
                opacity: 1;
              }
              
              .card--border-glow:hover {
                box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${glowColor}, 0.2);
              }
              
              .particle::before {
                content: '';
                position: absolute;
                top: -2px;
                left: -2px;
                right: -2px;
                bottom: -2px;
                background: rgba(${glowColor}, 0.2);
                border-radius: 50%;
                z-index: -1;
              }
              
              .particle-container:hover {
                box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(${glowColor}, 0.2);
              }
            `}
          </style>

          {enableSpotlight && (
            <GlobalSpotlight
              gridRef={gridRef}
              disableAnimations={shouldDisableAnimations}
              enabled={enableSpotlight}
              spotlightRadius={spotlightRadius}
              glowColor={glowColor}
            />
          )}

          <BentoCardGrid gridRef={gridRef} className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-6 md:gap-8">
              {bentoData.map((bento, index) => {
                const baseClassName = `card rounded-2xl p-6 flex flex-col justify-between transition-transform duration-300 ${bento.className} ${
                  enableBorderGlow ? "card--border-glow" : ""
                }`;

                const cardStyle = {
                  background: bento.bg,
                  border: bento.border,
                  WebkitBackdropFilter: 'blur(20px)',
                  backdropFilter: 'blur(20px)',
                  minHeight: '220px',
                  color: "var(--white)",
                  "--glow-x": "50%",
                  "--glow-y": "50%",
                  "--glow-intensity": "0",
                  "--glow-radius": "200px",
                };

                if (enableStars) {
                  return (
                    <ParticleCard
                      key={index}
                      className={baseClassName}
                      style={cardStyle}
                      disableAnimations={shouldDisableAnimations}
                      particleCount={particleCount}
                      glowColor={glowColor}
                      enableTilt={enableTilt}
                      clickEffect={clickEffect}
                      enableMagnetism={enableMagnetism}
                    >
                      <h3 className="text-xl font-bold mb-4 text-white tracking-wide" style={{ letterSpacing: '0.04em' }}>{bento.title}</h3>
                      <div className="flex flex-wrap gap-4 items-center">
                        {bento.skills.map(skill => (
                          <div key={skill.name} className="flex flex-col items-center">
                            <img src={skill.icon} alt={skill.name} className="w-10 h-10 md:w-12 md:h-12 mb-2 drop-shadow-[0_2px_8px_rgba(80,180,255,0.15)]" />
                            <span className="text-gray-200 text-sm font-medium text-center">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </ParticleCard>
                  );
                }

                return (
                  <div
                    key={index}
                    className={baseClassName}
                    style={cardStyle}
                  >
                    <h3 className="text-xl font-bold mb-4 text-white tracking-wide" style={{ letterSpacing: '0.04em' }}>{bento.title}</h3>
                    <div className="flex flex-wrap gap-4 items-center">
                      {bento.skills.map(skill => (
                        <div key={skill.name} className="flex flex-col items-center">
                          <img src={skill.icon} alt={skill.name} className="w-10 h-10 md:w-12 md:h-12 mb-2 drop-shadow-[0_2px_8px_rgba(80,180,255,0.15)]" />
                          <span className="text-gray-200 text-sm font-medium text-center">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </BentoCardGrid>
        </>
      </div>
    </section>
  );
};

export default Skills;