import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { usePerformanceMode } from './PerformanceContext';

export default function ScreenshotGallery() {
  const { t } = useTranslation();
  const { isPerformanceMode } = usePerformanceMode();

  const screenshots = [
    { id: 'login', img: '/app-login.png' },
    { id: 'dashboard', img: '/app-dashboard.png' },
    { id: 'timer', img: '/app-timer.png' },
    { id: 'settings', img: '/app-settings.png' },
  ];

  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto z-10 relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          {t('aboutGallery.title')}
        </h2>
        <p className="text-xl text-gray-400 font-light">
          {t('aboutGallery.subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {screenshots.map((s, idx) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="flex flex-col gap-6 group"
          >

            <div className={`relative overflow-hidden glass-card ${isPerformanceMode ? '' : 'shadow-2xl transition-all duration-500 group-hover:shadow-glow-primary'}`}>
              <div className="relative aspect-video w-full bg-black/20 overflow-hidden">
                <img 
                  src={s.img} 
                  alt={t(`aboutGallery.${s.id}`)} 
                  className={`w-full h-full object-cover object-center ${isPerformanceMode ? '' : 'transition-transform duration-700 group-hover:scale-105'}`}
                  loading="lazy"
                />
              </div>
            </div>


            <div>
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                <span className="w-8 h-px bg-focus-primary/50" />
                {t(`aboutGallery.${s.id}`)}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {t(`aboutGallery.${s.id}Desc`)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
