import { useState } from 'react';
import { Crown, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { WhatsAppModal } from './WhatsAppModal';
import { motion } from 'framer-motion';

export const Footer = () => {
  const [isNetworkingModalOpen, setIsNetworkingModalOpen] = useState(false);

  const links = {
    navegação: [
      { label: 'Início', href: '#' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Recursos', href: '#recursos' },
      { label: 'Depoimentos', href: '#depoimentos' },
    ],
    legal: [
      { label: 'Regras', href: '/regras' },
      { label: 'Privacidade', href: '#' },
      { label: 'Termos', href: '#' },
    ],
  };

  return (
    <footer className="bg-black relative overflow-hidden border-t border-white/5">
      {/* Large Background Text - Zoomed */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden">
        <span className="text-[25vw] md:text-[18vw] font-black text-white/[0.04] whitespace-nowrap block translate-y-1/3">
          DIGITAL KINGS
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Crown className="w-7 h-7 text-[#2F9EEC]" />
              <span className="text-xl font-bold text-white">Digital Kings</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs mb-6 leading-relaxed">
              A maior comunidade de networking gratuito da América Latina. Conecte-se com quem faz acontecer.
            </p>
            <div className="flex gap-3">
              <a
                href="https://discord.gg/digital-kings-networking-1060925534583935037"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#2F9EEC] hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsNetworkingModalOpen(true)}
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#2F9EEC] hover:text-white transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-3">
              {links.navegação.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-500 text-sm hover:text-[#2F9EEC] transition-colors flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-500 text-sm hover:text-[#2F9EEC] transition-colors flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2024 Digital Kings. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <span className="text-[#2F9EEC]">♥</span> pela comunidade
          </p>
        </div>
      </div>

      <WhatsAppModal
        isOpen={isNetworkingModalOpen}
        onClose={() => setIsNetworkingModalOpen(false)}
        type="networking"
      />
    </footer>
  );
};