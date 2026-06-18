import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Settings, Zap, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ExtensionWelcome() {
  const { t } = useTranslation();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-focus-primary" />,
      title: t('extWelcome.f1Title'),
      description: t('extWelcome.f1Desc')
    },
    {
      icon: <Settings className="w-6 h-6 text-pink-400" />,
      title: t('extWelcome.f2Title'),
      description: t('extWelcome.f2Desc')
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: t('extWelcome.f3Title'),
      description: t('extWelcome.f3Desc')
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 overflow-hidden relative">
      <div className="ambient-blob-1 opacity-50 mix-blend-screen" style={{ top: '25%', left: '25%' }} />
      <div className="ambient-blob-2 opacity-30 mix-blend-screen" style={{ top: 'auto', bottom: '25%', left: 'auto', right: '25%' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-5 bg-gradient-to-br from-focus-primary/20 to-pink-500/20 rounded-full mb-8 border border-white/10 shadow-glow-primary">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {t('extWelcome.title1')} <span className="text-gradient">{t('extWelcome.title2')}</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            {t('extWelcome.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.25, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="glass-card p-8 hover:bg-white/10 transition-colors flex flex-col items-start hover:border-focus-primary/30 group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-black/30 border border-white/5 group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.25, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden border border-white/10 group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-focus-primary/10 via-pink-500/5 to-focus-primary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t('extWelcome.howTitle')}</h2>
            <p className="text-gray-300 mb-10 max-w-xl mx-auto font-light text-lg">
              {t('extWelcome.howDesc')}
            </p>
            <button 
              onClick={() => window.open('aurora://', '_self')}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-[transform,background-color,box-shadow] shadow-glow-white hover:shadow-glow-white-lg hover:scale-105 active:scale-95 duration-150 ease-out"
            >
              {t('extWelcome.openApp')}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
