import React from 'react';
import { X, MessageCircle, Megaphone, Users, Bell } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'networking' | 'all';
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const networkingGroups = [
    {
      name: 'Networking Grupo 1',
      url: 'https://chat.whatsapp.com/LcnTWDKX1ipGTsHzz8TAVD',
      icon: Users,
      description: 'Primeiro grupo de networking',
      emoji: '🤝'
    },
    {
      name: 'Networking Grupo 2', 
      url: 'https://chat.whatsapp.com/I6EQbUgFMe31SPVIdOMWQQ',
      icon: Users,
      description: 'Segundo grupo de networking',
      emoji: '🤝'
    }
  ];

  const allGroups = [
    {
      name: 'Grupo de Avisos',
      url: 'https://chat.whatsapp.com/IQSgX2GLhDq525Li78r315',
      icon: Bell,
      description: 'Receba avisos importantes da comunidade',
      emoji: '📢'
    },
    {
      name: 'Networking Grupo 1',
      url: 'https://chat.whatsapp.com/LcnTWDKX1ipGTsHzz8TAVD',
      icon: Users,
      description: 'Primeiro grupo de networking',
      emoji: '🤝'
    },
    {
      name: 'Networking Grupo 2',
      url: 'https://chat.whatsapp.com/I6EQbUgFMe31SPVIdOMWQQ',
      icon: Users,
      description: 'Segundo grupo de networking',
      emoji: '🤝'
    },
    {
      name: 'Divulgação de Serviços',
      url: 'https://chat.whatsapp.com/FKXyCZoSqTC2MMc72V4ysi',
      icon: Megaphone,
      description: 'Divulgue seus serviços e encontre oportunidades',
      emoji: '💼'
    }
  ];

  const groups = type === 'networking' ? networkingGroups : allGroups;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gray-900 rounded-2xl border border-gray-700 max-w-sm sm:max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 hover:scale-105">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#2F9EEC] animate-bounce-subtle" />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {type === 'networking' ? 'Grupos de Networking' : 'Grupos do WhatsApp'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 flex-shrink-0"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            </button>
          </div>

          <div className="space-y-3">
            {groups.map((group, index) => {
              const Icon = group.icon;
              return (
                <a
                  key={index}
                  href={group.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full p-3 sm:p-4 bg-gray-800/50 hover:bg-[#2F9EEC]/10 border border-gray-700 hover:border-[#2F9EEC]/50 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#2F9EEC] to-blue-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#2F9EEC]/25 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <span className="text-lg sm:text-xl">{group.emoji}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-[#2F9EEC] transition-colors duration-300">
                        {group.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">
                        {group.description}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-700">
            <p className="text-center text-gray-400 text-xs sm:text-sm">
              Clique em qualquer grupo para entrar via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};