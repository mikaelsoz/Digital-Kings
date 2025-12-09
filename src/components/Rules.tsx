
import { Crown, Shield, MessageCircle, Smartphone, AlertTriangle, Users, Megaphone } from 'lucide-react';
import { Card } from './ui/Card';

export const Rules = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#2F9EEC] to-blue-500 rounded-lg flex items-center justify-center">
                <Crown className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-lg sm:text-2xl font-bold text-white">Digital Kings</span>
            </a>
            <a
              href="/"
              className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-gray-800 hover:bg-[#2F9EEC] rounded-lg transition-colors duration-300"
            >
              Voltar ao início
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Shield className="w-8 h-8 sm:w-12 sm:h-12 text-[#2F9EEC]" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Regras da Comunidade
            </h1>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Para manter nossa comunidade saudável e produtiva, seguimos algumas diretrizes importantes
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2F9EEC] to-blue-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Discord Rules */}
        <section className="mb-12 sm:mb-16">
          <Card className="mb-6 sm:mb-8 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700/50">
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#2F9EEC]" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                🤬 Ofensas e Conteúdos Proibidos (Discord)
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>É proibido qualquer conteúdo racista, LGBTfóbico, xenofóbico, de intolerância religiosa ou que incentive o suicídio.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Não é permitido o envio de imagens, gifs ou vídeos pornográficos ou perturbadores.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Assédio, perseguição ou ofensas a membros são estritamente proibidos.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Palavrões são permitidos com moderação. Comentários grosseiros, perturbadores ou reações inapropriadas podem resultar em punição.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Discussões sobre política, religião, futebol ou rivalidades entre chats são proibidas.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Evite menções ou marcações desnecessárias.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>É terminantemente proibido aplicar golpes, enganar ou roubar membros.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Plágio de qualquer conteúdo no servidor não será tolerado.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Não solicite nem compartilhe dados pessoais de outros usuários.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Atividades ilegais ou ilícitas são proibidas.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Modificadores de voz e áudios estourados são permitidos apenas na sala 🥂・Resenha.</p>
              </div>
            </div>
          </Card>

          {/* Discord Promotion Rules */}
          <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700/50">
            <div className="flex items-center space-x-3 mb-6">
              <Megaphone className="w-6 h-6 sm:w-8 sm:h-8 text-[#2F9EEC]" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                📢 Regras de Divulgação (Discord)
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Utilize o canal 💼・serviços apenas para divulgar serviços. Venda de produtos é proibida.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Spam ou divulgação indevida, inclusive por DM, resultará em punição.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Não divulgue conteúdo que concorra com os serviços oferecidos pela comunidade.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>É permitido compartilhar número de WhatsApp ou @ de redes sociais, mas nunca dados sensíveis.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>A divulgação de outros servidores é proibida e resulta em banimento imediato.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Mensagens do tipo "quem for novo no drop chama pv" são proibidas.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Qualquer tentativa de burlar as regras será punida.</p>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
                <p className="text-sm sm:text-base text-red-300 font-medium">
                  🚨 Se você presenciar qualquer infração, denuncie imediatamente à moderação.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* WhatsApp Rules */}
        <section className="mb-12 sm:mb-16">
          <Card className="mb-6 sm:mb-8 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700/50">
            <div className="flex items-center space-x-3 mb-6">
              <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-[#2F9EEC]" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                ⚠ Regras dos Grupos de WhatsApp
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Respeite todos os membros.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>É proibido qualquer tipo de conteúdo pornográfico.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Não chame ninguém no privado, a menos que seja algo urgente.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Não reclame da quantidade de mensagens.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Mantenha o foco do grupo, evite desviar o assunto.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>É proibido qualquer tipo de divulgação, exceto redes sociais.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Mensagens "iscas" são terminantemente proibidas.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>É proibido cometer qualquer tipo de crime.</p>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                <p className="text-sm sm:text-base text-yellow-300 font-medium">
                  O descumprimento de qualquer regra resultará em banimento sem aviso prévio.
                </p>
              </div>
            </div>
          </Card>

          {/* Service Promotion WhatsApp Rules */}
          <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700/50">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#2F9EEC]" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                📋 Regras do Grupo de Divulgação de Serviços (WhatsApp)
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Proibida a divulgação de outros grupos.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Não é permitido vender cursos ou conteúdos semelhantes.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Proibida a revenda de rateios de terceiros, pacotes, apps de notificação etc.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>É proibido divulgar jogos de azar ou conteúdo black/igaming.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Não é permitido marcar todos os membros sem autorização da administração.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#2F9EEC] rounded-full mt-2 flex-shrink-0"></div>
                <p>Atos criminosos ou quebra de regras levarão ao banimento sem aviso.</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-3xl p-6 sm:p-8 border border-gray-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2F9EEC]/5 via-transparent to-[#2F9EEC]/5 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 px-2">
                Pronto para fazer parte da <span className="text-[#2F9EEC]">comunidade</span>?
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 max-w-2xl mx-auto px-4">
                Agora que você conhece nossas regras, venha se conectar com milhares de profissionais digitais
              </p>
              <a
                href="https://discord.gg/digital-kings-networking-1060925534583935037"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-[#2F9EEC] to-blue-500 rounded-full shadow-2xl hover:shadow-[#2F9EEC]/25 transform hover:scale-105 transition-all duration-300 max-w-full"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                <span className="whitespace-nowrap">Entrar na Digital Kings</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};