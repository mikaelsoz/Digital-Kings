import type React from 'react';
import { useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { ArrowRight, Smartphone } from 'lucide-react';
import { WhatsAppModal } from './WhatsAppModal';

interface TiltCardProps {
  title: string;
  description: string;
  badge?: string;
}

const TiltCard = ({ title, description, badge }: TiltCardProps) => {
  const shouldReduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 160, damping: 15 });
  const springY = useSpring(rotateY, { stiffness: 160, damping: 15 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    rotateX.set(y);
    rotateY.set(x);
  }

  function handleMouseLeave() {
    if (shouldReduceMotion) return;
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        shouldReduceMotion
          ? undefined
          : { rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }
      }
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-950/80 p-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(47,158,236,0.12),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 space-y-3">
        {badge && (
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2F9EEC]/10 px-3 py-1 text-xs font-semibold text-[#2F9EEC] border border-[#2F9EEC]/30">
            {badge}
          </span>
        )}
        <h3 className="text-lg font-semibold text-white group-hover:text-[#2F9EEC] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const CTA = () => {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const faqs = [
    {
      title: 'É realmente grátis?',
      description: 'Sim. A comunidade é 100% gratuita, sem mensalidade ou pegadinhas.',
      badge: 'FAQ'
    },
    {
      title: 'Posso divulgar serviços?',
      description: 'Pode. Use o canal de serviços no Discord ou o grupo dedicado de Divulgação seguindo as regras.',
      badge: 'FAQ'
    },
    {
      title: 'Como evitam golpes?',
      description: 'Moderação ativa + verificação de links. Violação ou golpe resulta em ban imediato.',
      badge: 'Segurança'
    },
    {
      title: 'Posso convidar clientes?',
      description: 'Sim. Traga clientes para fechar negócios nos canais corretos e com transparência.',
      badge: 'FAQ'
    },
  ];

  return (
    <section id="comunidade" className="py-32 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/30 via-black to-black pointer-events-none" />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2F9EEC]/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-white/10 backdrop-blur-xl"
        >
          {/* Inner Glow */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#2F9EEC]/10 via-transparent to-transparent opacity-50" />

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#2F9EEC] text-sm font-medium uppercase tracking-widest mb-6"
            >
              Junte-se à comunidade
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Pronto para se conectar?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg max-w-xl mx-auto mb-10"
            >
              Milhares de profissionais já fazem parte da maior comunidade de networking digital do Brasil.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="https://discord.gg/digital-kings-networking-1060925534583935037"
                className="group flex items-center gap-3 px-8 py-4 bg-[#2F9EEC] hover:bg-blue-500 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(47,158,236,0.4)]"
              >
                Entrar na Comunidade
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => setIsWhatsAppModalOpen(true)}
                className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Smartphone className="w-5 h-5" />
                Grupos WhatsApp
              </button>
            </motion.div>

            <p className="mt-3 text-xs sm:text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-1">
              <span className="text-[#2F9EEC] font-semibold">Entradas liberadas esta semana.</span>
              <span>Lotes de vagas para grupos WhatsApp quase cheios.</span>
            </p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-500"
            >
              {['100% Gratuito', 'Sem mensalidades', 'Entre quando quiser'].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

            {/* FAQ + Segurança com parallax/3D tilt */}
            <div className="mt-12 space-y-6">
              <p className="text-[#2F9EEC] text-sm font-semibold uppercase tracking-[0.3em] text-center">
                FAQ Rápido & Confiança
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ perspective: '1200px' }}>
                {faqs.map((item, index) => (
                  <TiltCard key={index} title={item.title} description={item.description} badge={item.badge} />
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-gray-300 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-white">Segurança primeiro:</span>
                  <span className="text-gray-400">Moderação ativa, links verificados e banimento imediato para golpes.</span>
                </div>
                <a
                  href="/regras"
                  className="text-[#2F9EEC] font-semibold hover:text-blue-400 transition-colors underline underline-offset-4"
                >
                  Ver regras completas
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        type="all"
      />
    </section>
  );
};