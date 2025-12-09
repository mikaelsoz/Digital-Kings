import { motion } from 'framer-motion';
import { MessageCircle, Phone, Search, Megaphone, Handshake, Smartphone, LucideIcon } from 'lucide-react';
import { Card } from './ui/Card';

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  size?: 'normal' | 'large';
}

const FeatureItem = ({ icon: Icon, title, description, index, size = 'normal' }: FeatureItemProps) => {
  const isLarge = size === 'large';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`h-full ${isLarge ? 'md:col-span-2' : ''}`}
    >
      <Card className={`h-full ${isLarge ? 'p-6 md:p-8' : 'p-5 md:p-6'}`}>
        <div className="flex flex-col h-full">
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
      </Card>
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
            <FeatureItem key={index} {...feature} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};