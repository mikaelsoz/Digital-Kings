import { motion } from 'framer-motion';
import { Zap, Users, Target, Crown } from 'lucide-react';
import { Card } from './ui/Card';

export const About = () => {

  const stats = [
    { value: '17K+', label: 'Membros' },
    { value: '24/7', label: 'Ativos' },
    { value: '100%', label: 'Gratuito' },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Comunidade Gratuita',
      desc: 'A Digital Kings é uma comunidade 100% gratuita voltada para networking, troca de experiências e crescimento profissional.'
    },
    {
      icon: Users,
      title: 'Hub Principal no Discord',
      desc: 'Nosso principal hub é o Discord, onde rolam conversas diárias em texto e áudio, criando uma experiência imersiva.'
    },
    {
      icon: Target,
      title: 'Canais Especializados',
      desc: 'Temos canais dedicados para prospecção de clientes, busca e oferta de serviços como design, programação e tráfego.'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-950/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#2F9EEC] text-sm font-medium uppercase tracking-widest mb-4">Sobre nós</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            A Digital <span className="text-[#2F9EEC]">Kings</span>
          </h2>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-2 md:gap-4 mb-16 max-w-xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i}>
              <Card className="text-center p-4 bg-white/5 border-white/10 hover:border-[#2F9EEC]/40" spotlight={false}>
                <div className="text-2xl md:text-3xl font-bold text-[#2F9EEC] group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
              </Card>
            </div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Feature List */}
          <div className="space-y-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="flex gap-5 p-4 bg-white/5 hover:bg-white/10 border-white/10 hover:border-[#2F9EEC]/30">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2F9EEC]/10 rounded-xl flex items-center justify-center group-hover:bg-[#2F9EEC]/20 transition-colors border border-[#2F9EEC]/20">
                    <item.icon className="w-5 h-5 text-[#2F9EEC]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#2F9EEC] transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right: Discord Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-[#2F9EEC]/20 blur-3xl rounded-full opacity-50" />

            {/* Card */}
            <Card className="bg-gray-900/80 backdrop-blur-xl p-6 border-white/10 hover:border-[#2F9EEC]/30">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2F9EEC] to-blue-500 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Digital Kings</h4>
                  <p className="text-green-400 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    17.245 membros online
                  </p>
                </div>
              </div>

              {/* Channels */}
              <div className="space-y-2">
                {[
                  { emoji: '🎯', name: 'prospecção-clientes' },
                  { emoji: '💼', name: 'ofertas-de-trabalho' },
                  { emoji: '🚀', name: 'divulgação-serviços' },
                  { emoji: '🎙️', name: 'call-networking' },
                ].map((channel, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-[#2F9EEC]/10 transition-colors cursor-pointer group/channel"
                  >
                    <span className="text-lg">{channel.emoji}</span>
                    <span className="text-gray-300 text-sm group-hover/channel:text-[#2F9EEC] transition-colors">
                      {channel.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};