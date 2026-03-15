import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // 0s-1s: Dim circular spotlight + Orbiting particles
    const timer1 = setTimeout(() => setStage(1), 1000);
    // 1s-2s: 3D Logo formation from particles
    const timer2 = setTimeout(() => setStage(2), 2000);
    // 2s-3s: Logo stabilization + Title reveal
    const timer3 = setTimeout(() => setStage(3), 3000);
    // 3s-4s: Light sweep + Cinematic zoom
    const timer4 = setTimeout(() => setStage(4), 4000);
    // 4s-5s: Transition to Navbar
    const timer5 = setTimeout(() => onComplete(), 5500);

    return () => {
      [timer1, timer2, timer3, timer4, timer5].forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center cinematic-bg overflow-hidden cursor-none">
      <div className="film-grain" />
      <div className="absolute inset-0 projector-beam opacity-30" />
      
      {/* 0s-1s: Circular Spotlight */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(142, 45, 226, 0.15) 0%, rgba(246, 55, 0, 0.05) 50%, transparent 70%)"
        }}
      />

      <div className="relative flex flex-col items-center justify-center h-full w-full">
        {/* Orbiting Particles */}
        {stage >= 0 && stage < 2 && (
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  rotate: 360,
                  scale: [0, 1, 0],
                  x: Math.cos(i * 12) * (150 + Math.random() * 50),
                  y: Math.sin(i * 12) * (150 + Math.random() * 50)
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "linear"
                }}
                className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8E2DE2] to-[#F63700] blur-[1px]"
              />
            ))}
          </div>
        )}

        {/* 1s-3s: Logo 3D formation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
          animate={{ 
            scale: stage >= 1 ? 1 : 0.5, 
            opacity: stage >= 1 ? 1 : 0,
            rotateY: stage >= 2 ? 0 : 90,
            y: 0
          }}
          transition={{ 
            duration: 1.2,
            ease: "easeOut"
          }}
          className={`relative group ${stage >= 4 ? "scale-110" : ""}`}
        >
          <div className="relative">
            <img 
              src="/logo2.png" 
              alt="Vnew Logo" 
              className="w-40 h-40 logo-circular shadow-[0_0_50px_rgba(142,45,226,0.5)] transition-all duration-1000" 
            />
            <div className="absolute inset-0 rounded-full glow-purple-orange opacity-30 animate-pulse" />
            {stage >= 3 && <div className="absolute inset-0 light-sweep rounded-full" />}
          </div>
        </motion.div>

        {/* 2s-3s: Title Reveal */}
        <div className="mt-12 text-center overflow-hidden">
          <AnimatePresence>
            {stage >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="font-display text-7xl tracking-[0.15em] text-gradient drop-shadow-[0_0_15px_rgba(142,45,226,0.3)]">
                  VNEW MOVIES
                </h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-muted-foreground tracking-[0.4em] text-sm uppercase mt-2 font-medium"
                >
                  Discover Telugu Cinema Like Never Before
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
