import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Info } from 'lucide-react';

export default function Download() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gradient">Coming Soon</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-light mb-12">
          We are currently preparing the initial release. Check back soon for the download link.
        </p>
        <button 
          disabled
          className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-gray-500 font-bold text-lg cursor-not-allowed mb-16"
        >
          {t('nav.download')}
        </button>

        {/* Installation Warning */}
        <div className="bg-focus-primary/10 border border-focus-primary/20 rounded-2xl p-6 md:p-8 backdrop-blur-md text-left shadow-[0_0_30px_rgba(139,92,246,0.1)]">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-focus-primary" />
            <h3 className="text-xl font-bold text-white">{t('downloadWarning.title')}</h3>
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
            {t('downloadWarning.desc')}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/30 rounded-xl p-4 border border-white/5">
              <h4 className="font-bold text-gray-200 text-sm mb-1">{t('downloadWarning.winTitle')}</h4>
              <p className="text-gray-400 text-sm">{t('downloadWarning.winDesc')}</p>
            </div>
            <div className="bg-black/30 rounded-xl p-4 border border-white/5">
              <h4 className="font-bold text-gray-200 text-sm mb-1">{t('downloadWarning.macTitle')}</h4>
              <p className="text-gray-400 text-sm">{t('downloadWarning.macDesc')}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
