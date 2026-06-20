import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Lock,
  Brain,
  Timer,
  TrendUp,
  Globe,
  Coffee,
  GithubLogo,
  ArrowRight,
} from '@phosphor-icons/react';
import { usePerformanceMode } from '../components/PerformanceContext';

const FLOW_STEPS = [
  { key: 'flowStep1' as const, color: 'from-focus-primary/30 to-focus-primary/10' },
  { key: 'flowStep2' as const, color: 'from-pink-500/30 to-pink-500/10' },
  { key: 'flowStep3' as const, color: 'from-focus-accent/30 to-focus-accent/10' },
  { key: 'flowStep4' as const, color: 'from-green-500/30 to-green-500/10' },
];

const FEATURES = [
  { key: 'feat1', Icon: ShieldCheck, img: '/app-dashboard.png', span: 'md:col-span-2 md:row-span-2' },
  { key: 'feat2', Icon: Lock, img: null, span: '' },
  { key: 'feat3', Icon: Brain, img: null, span: '' },
  { key: 'feat4', Icon: Timer, img: '/app-timer.png', span: 'md:col-span-2' },
  { key: 'feat5', Icon: TrendUp, img: null, span: '' },
  { key: 'feat6', Icon: Globe, img: null, span: '' },
];

const TECH_STACK = [
  { name: 'Electron', slug: 'electron' },
  { name: 'React', slug: 'react' },
  { name: 'Vite', slug: 'vite' },
  { name: 'Firebase', slug: 'firebase' },
  { name: 'Google Gemini', slug: 'googlegemini' },
  { name: 'TypeScript', slug: 'typescript' },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const { t } = useTranslation();
  const { isPerformanceMode } = usePerformanceMode();
  const philosophyRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: philosophyRef,
    offset: ['start center', 'end center'],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative z-10">
      {/* ─── 1. HERO ─── Asymmetric split, left-aligned editorial */}
      <section className="min-h-[100dvh] flex items-center px-6 md:px-16 pt-28 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 flex flex-col gap-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-white text-balance">
              {t('aboutPage.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-[55ch]">
              {t('aboutPage.heroSub')}
            </p>
            <Link to="/download">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-max px-8 py-4 rounded-full bg-focus-primary/20 border border-focus-primary/50 text-white font-bold text-base flex items-center gap-3 transition-colors duration-200 hover:bg-focus-primary hover:border-focus-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-primary focus-visible:ring-offset-2 focus-visible:ring-offset-focus-bg"
              >
                {t('nav.download')}
                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <ArrowRight weight="bold" className="w-4 h-4" />
                </span>
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <img
              src="/app-login.png"
              alt="Aurora login screen"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-focus-bg/80 via-transparent to-transparent" />
            {!isPerformanceMode && (
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-focus-primary/20 rounded-full blur-[80px] pointer-events-none" />
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── 2. PHILOSOPHY ─── Typographic moment with animated line */}
      <section
        ref={philosophyRef}
        className="relative py-32 md:py-48 px-6 md:px-16 max-w-5xl mx-auto"
      >
        <div className="absolute left-6 md:left-0 top-0 bottom-0 w-px overflow-hidden">
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: 'top' }}
            className="w-full h-full bg-gradient-to-b from-focus-primary via-focus-secondary to-transparent"
          />
        </div>

        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={reveal}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pl-8 md:pl-16 text-2xl md:text-4xl lg:text-5xl font-light text-gray-200 leading-relaxed tracking-tight"
        >
          {t('aboutPage.philosophy')}
        </motion.blockquote>
      </section>

      {/* ─── 3. FLOW ─── Horizontal scroll-snap strip */}
      <section className="py-24 md:py-32">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white px-6 md:px-16 max-w-7xl mx-auto mb-12 md:mb-16"
        >
          {t('aboutPage.flowTitle')}
        </motion.h2>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 px-6 md:px-16 pb-4 snap-x snap-mandatory" style={{ minWidth: 'max-content' }}>
            {FLOW_STEPS.map((step, i) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="snap-start shrink-0 w-[280px] md:w-[320px] flex flex-col gap-5"
              >
                <div className={`h-48 rounded-2xl bg-gradient-to-br ${step.color} border border-white/5 flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-6xl md:text-7xl font-black text-white/10 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {!isPerformanceMode && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t(`aboutPage.${step.key}`)}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed text-sm">
                    {t(`aboutPage.${step.key}Desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. FEATURES ─── Asymmetric bento grid with real screenshots */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-12 md:mb-16"
        >
          {t('aboutPage.featuresTitle')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group rounded-2xl border border-white/10 overflow-hidden ${feat.span} ${
                feat.img
                  ? 'min-h-[280px] md:min-h-[360px]'
                  : 'p-8 md:p-10 flex flex-col justify-end bg-white/[0.03]'
              } transition-colors duration-300 hover:border-focus-primary/40`}
            >
              {feat.img && (
                <>
                  <img
                    src={feat.img}
                    alt={t(`aboutPage.${feat.key}Title`)}
                    className={`absolute inset-0 w-full h-full object-cover object-center ${
                      isPerformanceMode ? '' : 'transition-transform duration-700 group-hover:scale-[1.03]'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-focus-bg via-focus-bg/60 to-transparent" />
                </>
              )}

              <div className={`relative z-10 ${feat.img ? 'absolute bottom-0 left-0 right-0 p-8 md:p-10' : 'flex-1 flex flex-col justify-end'}`}>
                <feat.Icon
                  weight="light"
                  className="w-8 h-8 text-focus-primary mb-4"
                />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {t(`aboutPage.${feat.key}Title`)}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm max-w-md">
                  {t(`aboutPage.${feat.key}Desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── 5. TECH STACK / OPEN SOURCE ─── Split: text left, logos right */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              {t('aboutPage.stackTitle')}
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-lg mb-8">
              {t('aboutPage.stackDesc')}
            </p>
            <a
              href="https://github.com/cavalinho-xdd/aurora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-focus-primary font-bold hover:text-white transition-colors group"
            >
              <GithubLogo weight="fill" className="w-5 h-5" />
              {t('aboutPage.soloGithub')}
              <ArrowRight
                weight="bold"
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-3 gap-4"
          >
            {TECH_STACK.map((tech) => (
              <div
                key={tech.slug}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-colors duration-200"
              >
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/ffffff`}
                  alt={tech.name}
                  className="w-8 h-8 opacity-70"
                  loading="lazy"
                />
                <span className="text-xs text-gray-500 font-medium">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 6. SOLO DEV ─── Full-width CTA with personality */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-5xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            {t('aboutPage.soloTitle')}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
            {t('aboutPage.soloDesc')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <a
              href="https://ko-fi.com/cavalinhoxdd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-full bg-focus-primary text-white font-bold text-base flex items-center gap-3 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.4)] transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-primary focus-visible:ring-offset-2 focus-visible:ring-offset-focus-bg"
              >
                <Coffee weight="fill" className="w-5 h-5" />
                {t('aboutPage.soloCta')}
              </motion.button>
            </a>
            <a
              href="https://github.com/cavalinho-xdd/aurora"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-bold text-base flex items-center gap-3 hover:bg-white/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-primary focus-visible:ring-offset-2 focus-visible:ring-offset-focus-bg"
              >
                <GithubLogo weight="fill" className="w-5 h-5" />
                {t('aboutPage.soloGithub')}
              </motion.button>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
