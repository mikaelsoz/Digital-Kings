import { motion, useReducedMotion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Fechei meu primeiro job de tráfego aqui, valeu demais família 🙌",
    author: "Carlos M.",
    role: "Gestor de Tráfego",
  },
  {
    text: "Conheci meu atual sócio dentro da call do Discord",
    author: "Ana P.",
    role: "Designer & Dev",
  },
  {
    text: "Postei no canal de serviços e em menos de 1h já tinha resposta",
    author: "Rafael S.",
    role: "Programador",
  },
  {
    text: "A comunidade me ajudou a sair do zero e hoje faturo 5 dígitos",
    author: "Mariana L.",
    role: "Marketing Digital",
  },
  {
    text: "Aqui não é só networking, é uma família que se ajuda de verdade",
    author: "João V.",
    role: "E-commerce",
  },
  {
    text: "Consegui 3 clientes fixos através dos contatos que fiz aqui",
    author: "Beatriz R.",
    role: "Social Media",
  },
];

const TestimonialCard = ({ text, author, role }: { text: string; author: string; role: string }) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -8, rotateX: 3, rotateY: -3 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      style={shouldReduceMotion ? undefined : { transformStyle: 'preserve-3d', perspective: 1000 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="flex-shrink-0 w-[350px] md:w-[400px] p-6 rounded-3xl bg-gray-900/80 border border-white/10 backdrop-blur-sm mx-3 hover:border-[#2F9EEC]/40 transition-all duration-300 group shadow-lg shadow-black/15"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#2F9EEC]/8 via-transparent to-blue-500/10 pointer-events-none rounded-3xl" />
      <Quote className="w-8 h-8 text-[#2F9EEC]/40 mb-4 relative z-10" />
      <p className="text-gray-300 text-base leading-relaxed mb-6 group-hover:text-white transition-colors">
        "{text}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2F9EEC] to-blue-500 flex items-center justify-center text-white font-bold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{author}</p>
          <p className="text-gray-500 text-xs">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const Testimonials = () => {
  // Duplicate for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="depoimentos" className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/10 via-black to-black pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-6"
        >
          <p className="text-[#2F9EEC] text-sm font-medium uppercase tracking-widest mb-4">Depoimentos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Histórias de <span className="text-[#2F9EEC]">Sucesso</span>
          </h2>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Scrolling Row */}
          <motion.div
            className="flex"
            animate={{ x: [0, -50 * testimonials.length * 8.5] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 px-6"
        >
          <p className="text-gray-400 mb-4">Sua história de sucesso começa aqui</p>
          <a
            href="https://discord.gg/digital-kings-networking-1060925534583935037"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2F9EEC] hover:bg-blue-500 text-white font-semibold rounded-full transition-colors"
          >
            Fazer parte da comunidade
          </a>
        </motion.div>
      </div>
    </section>
  );
};