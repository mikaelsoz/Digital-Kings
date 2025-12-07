import { useState, useRef } from 'react';
import { motion, useTransform, useSpring, useMotionValue, useReducedMotion } from 'framer-motion';
import { Users, MessageCircle, Phone, ArrowRight, Crown } from 'lucide-react';
import { WhatsAppModal } from './WhatsAppModal';

export const Hero = () => {
  const [isNetworkingModalOpen, setIsNetworkingModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const springConfig = { damping: 25, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Parallax transforms
  const moveX1 = useTransform(springX, [-0.5, 0.5], [-50, 50]);
  const moveY1 = useTransform(springY, [-0.5, 0.5], [-50, 50]);

  const moveX2 = useTransform(springX, [-0.5, 0.5], [30, -30]);
  const moveY2 = useTransform(springY, [-0.5, 0.5], [30, -30]);

  // Subtle container tilt (disabled when prefers-reduced-motion)
  const tiltX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const tiltY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black py-20"
    >
      {/* Background Gradient Spot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-50 pointer-events-none" />

      {/* Floating Elements (Parallax) */}
      <motion.div
        style={{ x: moveX1, y: moveY1 }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        style={{ x: moveX2, y: moveY2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2F9EEC]/10 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Content Container */}
      <motion.div
        style={{
          rotateX: shouldReduceMotion ? 0 : tiltX,
          rotateY: shouldReduceMotion ? 0 : tiltY,
          transformStyle: 'preserve-3d',
          perspective: 1200,
        }}
        className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center"
      >

        {/* Crown Icon / Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
          <Crown className="w-16 h-16 text-[#2F9EEC] relative z-10 drop-shadow-[0_0_15px_rgba(47,158,236,0.5)]" />
        </motion.div>

        {/* Main Title */}
        <div className="relative mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-7xl lg:text-8xl leading-[0.9] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tighter select-none"
          >
            DIGITAL
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-7xl lg:text-8xl leading-[0.9] font-black text-transparent bg-clip-text bg-gradient-to-t from-[#2F9EEC] to-blue-400/80 tracking-tighter select-none relative z-20"
          >
            KINGS
          </motion.h1>

          {/* Decorative small text positioned absolutely */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="hidden md:block absolute top-[10%] -left-8 text-xs text-gray-400 rotate-[-90deg] origin-right tracking-widest uppercase"
          >
            Est. 2024
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="hidden md:block absolute bottom-[20%] -right-12 text-xs text-gray-400 rotate-[90deg] origin-left tracking-widest uppercase"
          >
            Networking
          </motion.p>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 font-light tracking-wide"
        >
          Conecte-se com <span className="text-[#2F9EEC] font-semibold">quem faz acontecer</span>. <br className="hidden md:block" />
          A maior comunidade de networking gratuito da América Latina.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 w-full max-w-3xl">
          {[
            { icon: Users, label: "Membros Discord", value: "17.2K+" },
            { icon: MessageCircle, label: "Grupos WhatsApp", value: "2.3K+" },
            { icon: Phone, label: "Networking", value: "24/7" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -8, rotateX: 4, rotateY: -4, scale: 1.02 }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#2F9EEC]/50 transition-all duration-400 shadow-lg shadow-black/20"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-white/5 via-transparent to-[#2F9EEC]/10 pointer-events-none rounded-xl" />
              <div className="flex flex-col items-center relative z-10">
                <stat.icon className="w-6 h-6 text-[#2F9EEC] mb-2 group-hover:scale-125 transition-transform duration-300 will-change-transform" />
                <span className="text-2xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col md:flex-row gap-4 items-center"
        >
          <a
            href="https://discord.gg/digital-kings-networking-1060925534583935037"
            className="group relative px-8 py-4 bg-[#2F9EEC] rounded-full overflow-hidden text-white font-bold tracking-wide hover:pr-12 transition-all duration-300"
          >
            <span className="relative z-10">ENTRAR NO DISCORD</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>

          <div className="flex gap-4">
            <button
              onClick={() => setIsNetworkingModalOpen(true)}
              className="px-6 py-4 rounded-full border border-white/10 hover:bg-white/5 text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
            >
              Networking WhatsApp
            </button>
          </div>
        </motion.div>

      </motion.div>

      <WhatsAppModal
        isOpen={isNetworkingModalOpen}
        onClose={() => setIsNetworkingModalOpen(false)}
        type="networking"
      />
    </section>
  );
};