import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // 0s-1s: Light flare + Fragments assembling
    const t1 = setTimeout(() => setStage(1), 1000);
    // 1s-2s: Swirling film strips + Logo formation
    const t2 = setTimeout(() => setStage(2), 2000);
    // 2s-3s: Logo neon glow + Light streaks
    const t3 = setTimeout(() => setStage(3), 3000);
    // 3s-4s: "VNEW MOVIES" Title reveal
    const t4 = setTimeout(() => setStage(4), 4000);
    // 4s-5s: Tagline reveal (blur-to-focus)
    const t5 = setTimeout(() => setStage(5), 5000);
    // Completion skip
    const t6 = setTimeout(() => onComplete(), 6500);

    return () => [t1, t2, t3, t4, t5, t6].forEach(clearTimeout);
  }, [onComplete]);

  // Particle generation
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    duration: Math.random() * 2 + 3,
    delay: Math.random() * 1,
  }));

  // Film strip fragments
  const fragments = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    rotate: i * 30,
    delay: i * 0.1,
  }));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center cinematic-bg overflow-hidden cursor-none">
      <div className="film-grain" />
      
      {/* 0s-1s: Background Light Flare */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: stage >= 0 ? 0.4 : 0, scale: stage >= 0 ? 1 : 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none bg-radial-flare"
        style={{
          background: "radial-gradient(circle at center, rgba(142, 45, 226, 0.5) 0%, rgba(246, 55, 1, 0.1) 50%, transparent 70%)"
        }}
      />

      <div className="relative flex flex-col items-center justify-center h-full w-full">
        {/* Particle Simulations */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, x: `${p.x}vw`, y: `${p.y}vh` }}
              animate={{ 
                opacity: [0, 0.8, 0],
                x: [`${p.x}vw`, `${p.x + (Math.random() * 10 - 5)}vw`],
                y: [`${p.y}vh`, `${p.y + (Math.random() * 10 - 5)}vh`],
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: p.duration, 
                repeat: Infinity, 
                delay: p.delay,
                ease: "linear"
              }}
              className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
            />
          ))}
        </div>

        {/* 1s-2s: Swirling Film Strips morphing into Logo */}
        <div className="relative flex items-center justify-center">
          <AnimatePresence>
            {stage < 2 && (
              <div className="absolute inset-0 flex items-center justify-center">
                {fragments.map((f) => (
                  <motion.div
                    key={f.id}
                    initial={{ opacity: 0, rotate: f.rotate, scale: 2, filter: "blur(4px)" }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      rotate: f.rotate + 180,
                      scale: [2, 0.5],
                      filter: "blur(0px)"
                    }}
                    transition={{ 
                      duration: 2, 
                      delay: f.delay,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="absolute w-2 h-20 bg-gradient-to-t from-[#8E2DE2] to-transparent rounded-full opacity-30"
                  />
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* 1s-3s: Logo Formation & Scale Up */}
          <motion.div
            initial={{ scale: 0.2, opacity: 0, filter: "blur(20px)" }}
            animate={{ 
              scale: stage >= 1 ? (stage >= 3 ? 1.1 : 1) : 0.2, 
              opacity: stage >= 1 ? 1 : 0,
              filter: stage >= 1 ? "blur(0px)" : "blur(20px)",
              z: 0
            }}
            transition={{ 
              duration: 1.5, 
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative z-20"
          >
            <div className="relative">
              <img 
                src="/logo2.png" 
                alt="Vnew Logo" 
                className={`w-40 h-40 logo-circular transition-all duration-1000 ${stage >= 2 ? "shadow-[0_0_80px_rgba(142,45,226,0.6)]" : "shadow-none"}`} 
              />
              
              {/* Glowing Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-[#8E2DE2]/20 border-t-[#F63700] opacity-40 blur-[2px]"
              />

              {/* Light Streaks across Logo */}
              {stage >= 2 && (
                <div className="absolute inset-0 light-sweep rounded-full mix-blend-overlay" />
              )}
            </div>
          </motion.div>
        </div>

        {/* 3s-4s: Title "VNEW MOVIES" */}
        <div className="mt-12 text-center h-24 flex items-center justify-center">
          <AnimatePresence>
            {stage >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <h1 className="font-display text-7xl tracking-[0.2em] text-gradient drop-shadow-[0_0_20px_rgba(142,45,226,0.4)]">
                  VNEW MOVIES
                </h1>
                
                {/* 4s-5s: Tagline with blur-to-focus */}
                {stage >= 4 && (
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="mt-4"
                  >
                    <p className="text-muted-foreground tracking-[0.5em] text-xs uppercase font-medium glow-text">
                      Discover Telugu Cinema Like Never Before
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Camera Push-in effect */}
      <motion.div 
        animate={{ scale: [1, 1.05] }}
        transition={{ duration: 6, ease: "linear" }}
        className="absolute inset-0 pointer-events-none bg-transparent"
      />
    </div>
  );
};

export default IntroAnimation;
