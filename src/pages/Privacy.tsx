/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShieldCheck } from '@phosphor-icons/react';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto space-y-16"
      >
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 text-focus-primary font-bold tracking-widest text-sm uppercase">
            <ShieldCheck weight="bold" className="w-5 h-5" />
            <span>Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white text-balance">{t('legal.privacyTitle')}</h1>
          <p className="text-lg text-gray-500 font-medium">{t('legal.privacyEffective')}</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white prose-p:text-gray-400 prose-p:leading-relaxed prose-li:text-gray-400">
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-12">
            {t('legal.privacyIntro')}
          </p>

          <section className="mt-16 space-y-6">
            <h2 className="text-2xl border-b border-white/10 pb-4">{t('legal.section1Title')}</h2>
            <p>{t('legal.section1Desc')}</p>
            <ul className="space-y-4 list-disc pl-6 marker:text-focus-primary">
              {[1, 2, 3].map((item) => (
                <li key={item} className="pl-2">
                  <span className="font-bold text-gray-200">{t(`legal.s1Item${item}` as any)}</span>{' '}
                  <span className="text-gray-400">{t(`legal.s1Item${item}Desc` as any)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 space-y-6">
            <h2 className="text-2xl border-b border-white/10 pb-4">{t('legal.section2Title')}</h2>
            <ul className="space-y-4 list-disc pl-6 marker:text-red-400">
              {[1, 2, 3].map((item) => (
                <li key={item} className="pl-2">
                  <span className="font-bold text-gray-200">{t(`legal.s2Item${item}` as any)}</span>{' '}
                  <span className="text-gray-400">{t(`legal.s2Item${item}Desc` as any)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 space-y-6">
            <h2 className="text-2xl border-b border-white/10 pb-4">{t('legal.section3Title')}</h2>
            <p>{t('legal.section3Desc')}</p>
            <ul className="space-y-4 list-disc pl-6 marker:text-blue-400">
              {[1, 2].map((item) => (
                <li key={item} className="pl-2">
                  <span className="font-bold text-gray-200">{t(`legal.s3Item${item}` as any)}</span>{' '}
                  <span className="text-gray-400">{t(`legal.s3Item${item}Desc` as any)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 space-y-6">
            <h2 className="text-2xl border-b border-white/10 pb-4">{t('legal.section4Title')}</h2>
            <p>{t('legal.section4Desc')}</p>
          </section>

          <section className="mt-16 space-y-6">
            <h2 className="text-2xl border-b border-white/10 pb-4">{t('legal.section5Title')}</h2>
            <p>{t('legal.section5Desc')}</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
