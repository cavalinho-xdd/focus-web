import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Scales } from '@phosphor-icons/react';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[100dvh] pt-32 pb-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto space-y-16"
      >
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 text-focus-primary font-bold tracking-widest text-sm uppercase">
            <Scales weight="bold" className="w-5 h-5" />
            <span>Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white text-balance">{t('legal.termsTitle')}</h1>
          <p className="text-lg text-gray-500 font-medium">{t('legal.termsEffective')}</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white prose-p:text-gray-400 prose-p:leading-relaxed prose-li:text-gray-400">
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-12">
            {t('legal.termsIntro')}
          </p>

          <section className="mt-16 space-y-6">
            <h2 className="text-2xl border-b border-white/10 pb-4">{t('legal.tSection1Title')}</h2>
            <p>{t('legal.tSection1Desc')}</p>
          </section>

          <section className="mt-16 space-y-6">
            <h2 className="text-2xl border-b border-white/10 pb-4">{t('legal.tSection2Title')}</h2>
            <p>{t('legal.tSection2Desc')}</p>
          </section>

          <section className="mt-16 space-y-6">
            <h2 className="text-2xl border-b border-white/10 pb-4">{t('legal.tSection3Title')}</h2>
            <p>{t('legal.tSection3Desc')}</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
