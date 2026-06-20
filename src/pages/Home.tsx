import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Target, ShieldCheck, Brain, Trophy, Timer, Users, DownloadSimple } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppDemo from '../components/AppDemo';
import ApiGuideModal from '../components/ApiGuideModal';
import { usePerformanceMode } from '../components/PerformanceContext';

let isFirstLoad = true;

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [initialLoad] = useState(isFirstLoad);
  const { isPerformanceMode } = usePerformanceMode();
  
  const [isApiGuideOpen, setIsApiGuideOpen] = useState(false);

  const [wordIndex, setWordIndex] = useState(0);
  const words = ["focused", "calm", "organized", "unstoppable"];

  useEffect(() => {
    isFirstLoad = false;
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-20">
        <motion.div 
          style={{ y, opacity }}
          className="text-center z-10 flex flex-col items-center max-w-5xl px-4 -translate-y-24 md:-translate-y-32"
        >
          <motion.div
            initial={initialLoad ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: initialLoad ? 0.2 : 0, duration: initialLoad ? 0.8 : 0, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 md:mb-12"
          >
            <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-black tracking-tighter leading-[1.05] mb-4 flex flex-col items-center overflow-hidden py-4">
              <motion.div layout className="text-white flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 md:gap-x-5 gap-y-1 sm:gap-y-2">
                <motion.span layout>Stay</motion.span> 
                <AnimatePresence mode="popLayout">
                  <motion.span
                    layout
                    key={wordIndex}
                    initial={{ y: 30, opacity: 0, filter: isPerformanceMode ? "none" : "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: isPerformanceMode ? "none" : "blur(0px)" }}
                    exit={{ y: -30, opacity: 0, filter: isPerformanceMode ? "none" : "blur(8px)" }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="text-focus-primary inline-block"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
                <motion.span layout>with</motion.span>
              </motion.div>
              <motion.span layout className={`text-focus-primary mt-1 md:mt-0 text-[3.5rem] sm:text-[4.5rem] md:text-[9rem] lg:text-[11rem] leading-none ${isPerformanceMode ? '' : 'drop-shadow-[0_0_50px_rgba(139,92,246,0.3)]'}`}>
                aurora.
              </motion.span>
            </h1>
            <p className="text-lg sm:text-xl md:text-3xl text-gray-400 font-light tracking-wide mt-4 sm:mt-6 mb-8 sm:mb-10 md:mb-12">
              "Light up your mind."
            </p>
            <motion.div
              initial={initialLoad ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: initialLoad ? 1.0 : 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                to="/download"
                className="pressable inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full bg-focus-primary/20 text-white font-bold text-lg md:text-xl border border-focus-primary/50 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] hover:bg-focus-primary transition-[transform,background-color,box-shadow,border-color] focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0A15]"
              >
                <DownloadSimple weight="bold" className="w-6 h-6 md:w-7 md:h-7" />
                {t('nav.download')}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── FEATURES ─── Asymmetric Bento Grid */}
      <section className="relative min-h-screen py-16 md:py-32 px-6 md:px-16 max-w-7xl mx-auto z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={reveal}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            {t('features.title')} <span className="text-focus-primary">{t('features.titleHighlight')}</span>.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* 1. Blocker - Large square */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 md:row-span-2 relative group rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 hover:border-focus-primary/40 transition-colors duration-500 overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.05)] p-10 md:p-16 flex flex-col justify-end min-h-[400px] md:min-h-[500px]"
          >
            <div className="absolute top-10 right-10 w-48 h-48 lg:w-64 lg:h-64 flex items-center justify-center rounded-full bg-focus-primary/5 blur-[80px] pointer-events-none group-hover:bg-focus-primary/10 transition-colors duration-700" />
            <Target weight="light" className="w-16 h-16 text-focus-primary mb-8" />
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              {t('features.blocker')}
            </h3>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-lg">
              {t('features.blockerDesc')}
            </p>
          </motion.div>

          {/* 2. Hardcore Mode - Standard card */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 hover:border-focus-primary/40 transition-colors duration-500 p-8 flex flex-col items-start shadow-[0_0_40px_rgba(139,92,246,0.03)]"
          >
            <ShieldCheck weight="light" className="w-12 h-12 text-focus-primary mb-6" />
            <h3 className="text-2xl font-bold tracking-tight mb-3 text-white">{t('features.hardcore')}</h3>
            <p className="text-base text-gray-400 font-light leading-relaxed">{t('features.hardcoreDesc')}</p>
          </motion.div>

          {/* 3. AI Evaluation - Interactive standard card */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 hover:border-focus-primary/40 transition-colors duration-500 p-8 flex flex-col items-start shadow-[0_0_40px_rgba(139,92,246,0.03)]"
          >
            <Brain weight="light" className="w-12 h-12 text-focus-primary mb-6" />
            <h3 className="text-2xl font-bold tracking-tight mb-3 text-white">{t('features.ai')}</h3>
            <p className="text-base text-gray-400 font-light leading-relaxed flex-1 mb-6">{t('features.aiDesc')}</p>
            <button
              onClick={() => setIsApiGuideOpen(true)}
              className="pressable w-full py-3 bg-focus-primary/10 border border-focus-primary/30 text-white rounded-xl font-bold hover:bg-focus-primary transition-colors flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-primary focus-visible:ring-offset-2 focus-visible:ring-offset-focus-bg"
            >
              <Target weight="bold" className="w-4 h-4" />
              {t('apiGuide.button')}
            </button>
          </motion.div>

          {/* 4. Gamification */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 hover:border-focus-primary/40 transition-colors duration-500 p-8 flex flex-col items-start shadow-[0_0_40px_rgba(139,92,246,0.03)]"
          >
            <Trophy weight="light" className="w-12 h-12 text-focus-primary mb-6" />
            <h3 className="text-2xl font-bold tracking-tight mb-3 text-white">{t('features.gamification')}</h3>
            <p className="text-base text-gray-400 font-light leading-relaxed">{t('features.gamificationDesc')}</p>
          </motion.div>

          {/* 5. Social Contracts */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 hover:border-focus-primary/40 transition-colors duration-500 p-8 flex flex-col items-start shadow-[0_0_40px_rgba(139,92,246,0.03)]"
          >
            <Users weight="light" className="w-12 h-12 text-focus-primary mb-6" />
            <h3 className="text-2xl font-bold tracking-tight mb-3 text-white">{t('features.social')}</h3>
            <p className="text-base text-gray-400 font-light leading-relaxed">{t('features.socialDesc')}</p>
          </motion.div>

          {/* 6. Pomodoro - Wide rectangle */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 hover:border-focus-primary/40 transition-colors duration-500 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-[0_0_40px_rgba(139,92,246,0.03)]"
          >
            <Timer weight="light" className="w-16 h-16 text-focus-primary shrink-0" />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-white">{t('features.pomodoro')}</h3>
              <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-xl">{t('features.pomodoroDesc')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <ApiGuideModal isOpen={isApiGuideOpen} onClose={() => setIsApiGuideOpen(false)} />

      <section className="relative w-full z-20 py-20">
        <AppDemo />
      </section>
    </>
  );
}
