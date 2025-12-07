import { motion, useMotionTemplate, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { MessageCircle, Phone, Search, Megaphone, Handshake, Smartphone, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  size?: 'normal' | 'large';
}

const FeatureCard = ({ icon: Icon, title, description, index, size = 'normal' }: FeatureCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const tiltX = useSpring(rotateX, { stiffness: 160, damping: 15 });
  const tiltY = useSpring(rotateY, { stiffness: 160, damping: 15 });
  const shouldReduceMotion = useReducedMotion();

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    if (shouldReduceMotion) return;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    const rotateAmountX = ((clientY - top) / height - 0.5) * -12;
    const rotateAmountY = ((clientX - left) / width - 0.5) * 12;
    rotateX.set(rotateAmountX);
    rotateY.set(rotateAmountY);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const isLarge = size === 'large';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        shouldReduceMotion
          ? undefined
          : { rotateX: tiltX, rotateY: tiltY, transformStyle: 'preserve-3d' }
      }
      className={`group relative rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm overflow-hidden hover:border-[#2F9EEC]/30 hover:shadow-[0_25px_80px_-40px_rgba(47,158,236,0.6)] transition-all duration-500 ${isLarge ? 'p-8 md:col-span-2' : 'p-6'
        }`}
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(47, 158, 236, 0.1),
              transparent 70%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className={`mb-4 ${isLarge ? 'w-14 h-14' : 'w-12 h-12'} rounded-2xl bg-[#2F9EEC]/10 flex items-center justify-center border border-[#2F9EEC]/20 group-hover:bg-[#2F9EEC]/20 group-hover:scale-110 transition-all duration-300`}>
          <Icon className={`${isLarge ? 'w-7 h-7' : 'w-5 h-5'} text-[#2F9EEC] group-hover:drop-shadow-[0_5px_20px_rgba(47,158,236,0.7)] transition-all duration-300`} />
        </div>
        <h3 className={`${isLarge ? 'text-xl' : 'text-lg'} font-bold text-white mb-2 group-hover:text-[#2F9EEC] transition-colors duration-300`}>
          {title}
        </h3>
        <p className={`${isLarge ? 'text-base' : 'text-sm'} text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed flex-grow`}>
          {description}
        </p>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F9EEC]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Chats ativos 24h',
      description: 'Conversas que nunca param. Sempre tem alguém online para trocar ideias e fazer networking.',
    },
    {
      icon: Phone,
      title: 'Calls frequentes',
      description: 'Participe de calls diárias para conhecer pessoas e discutir projetos em tempo real.',
    },
    {
      icon: Search,
      title: 'Busca de Profissionais',
      description: 'Encontre ou ofereça serviços: design, programação, marketing e tráfego.',
    },
    {
      icon: Megaphone,
      title: 'Divulgação de Serviços',
      description: 'Promova seus trabalhos e conquiste novos clientes na comunidade ativa.',
    },
    {
      icon: Handshake,
      title: 'Networking Real',
      description: 'Conecte-se com profissionais que realmente trabalham no digital, não apenas teóricos.',
    },
    {
      icon: Smartphone,
      title: 'Grupos WhatsApp',
      description: 'Para quem prefere o mobile, temos grupos ativos para networking rápido.',
    },
  ];

  return (
    <section id="recursos" className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-black to-black pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#2F9EEC] text-sm font-medium uppercase tracking-widest mb-4">Recursos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ecossistema Completo
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Uma comunidade desenhada para impulsionar seu crescimento no mercado digital.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};