import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sliders, Lightning, CheckCircle } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

export default function ExtensionWelcome() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <ShieldCheck weight="light" className="w-8 h-8 text-focus-primary" />,
      title: t('extWelcome.f1Title'),
      description: t('extWelcome.f1Desc'),
      span: "md:col-span-2"
    },
    {
      icon: <Sliders weight="light" className="w-8 h-8 text-pink-400" />,
      title: t('extWelcome.f2Title'),
      description: t('extWelcome.f2Desc'),
      span: "md:col-span-1"
    },
    {
      icon: <Lightning weight="light" className="w-8 h-8 text-yellow-400" />,
      title: t('extWelcome.f3Title'),
      description: t('extWelcome.f3Desc'),
      span: "md:col-span-3"
    }
  ];

  return (
    <div className="min-h-[100dvh] pt-32 pb-24 px-6 overflow-hidden relative">
      <div className="ambient-blob-1 opacity-50 mix-blend-screen" style={{ top: '25%', left: '25%' }} />
      <div className="ambient-blob-2 opacity-30 mix-blend-screen" style={{ top: 'auto', bottom: '25%', left: 'auto', right: '25%' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center justify-center p-6 bg-gradient-to-br from-focus-primary/20 to-pink-500/20 rounded-full mb-8 border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
            <CheckCircle weight="fill" className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.05]">
            {t('extWelcome.title1')} <span className="text-focus-primary">{t('extWelcome.title2')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            {t('extWelcome.subtitle')}
          </p>
        </motion.div>

        {/* Asymmetric grid for extension features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.03)] p-8 md:p-12 hover:border-focus-primary/40 transition-colors flex flex-col items-start rounded-3xl ${feature.span}`}
            >
              <div className="mb-6 bg-white/5 p-4 rounded-2xl border border-white/5">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light text-base md:text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-10 md:p-16 text-center overflow-hidden border border-white/10 group bg-black/40 backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-focus-primary/10 via-pink-500/5 to-focus-primary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('extWelcome.howTitle')}</h2>
            <p className="text-gray-300 mb-12 max-w-xl mx-auto font-light text-lg md:text-xl leading-relaxed">
              {t('extWelcome.howDesc')}
            </p>
            <button 
              onClick={() => window.open('aurora://', '_self')}
              className="pressable inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-100 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-primary focus-visible:ring-offset-2 focus-visible:ring-offset-focus-bg"
            >
              {t('extWelcome.openApp')}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
