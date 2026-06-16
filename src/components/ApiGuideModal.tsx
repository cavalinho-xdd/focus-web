import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Key, User, Settings, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ApiGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApiGuideModal({ isOpen, onClose }: ApiGuideModalProps) {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      icon: User,
      title: t('apiGuide.step1.title'),
      desc: t('apiGuide.step1.desc'),
      visual: (
        <div className="w-full h-48 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-6 gap-4">
          <User className="w-12 h-12 text-white/40" />
          <a 
            href="https://aistudio.google.com/app/apikey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold flex items-center gap-2 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          >
            {t('apiGuide.step1.btn')} <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )
    },
    {
      id: 2,
      icon: Key,
      title: t('apiGuide.step2.title'),
      desc: t('apiGuide.step2.desc'),
      visual: (
        <div className="w-full h-48 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-6 relative overflow-hidden">
          {/* Mockup of Google AI Studio Button */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black p-4 flex flex-col">
            <div className="h-8 w-full border-b border-white/10 flex items-center mb-4">
              <div className="text-xs text-gray-500 font-mono">Google AI Studio</div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <button className="px-5 py-2.5 bg-blue-500 text-white text-sm font-medium rounded-lg flex items-center gap-2 shadow-lg shadow-blue-500/20">
                <Key className="w-4 h-4" />
                Create API Key
              </button>
            </div>
            {/* Mock tooltip */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 right-1/2 translate-x-1/2 bg-focus-primary text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap"
            >
              {t('apiGuide.step2.tooltip')}
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      icon: Settings,
      title: t('apiGuide.step3.title'),
      desc: t('apiGuide.step3.desc'),
      visual: (
        <div className="w-full h-48 bg-[#0B0A15] border border-white/10 rounded-2xl p-4 flex flex-col relative overflow-hidden">
          <div className="flex gap-2 items-center mb-4">
            <Settings className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">{t('apiGuide.step3.settings')}</span>
          </div>
          <div className="space-y-2">
            <label className="text-xs text-focus-primary font-bold uppercase tracking-wider">
              {t('apiGuide.step3.apiKey')}
            </label>
            <div className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
              <Key className="text-gray-500 w-4 h-4" />
              <span className="text-gray-300 text-sm font-mono truncate">AIzaSyB...</span>
              <CheckCircle className="text-green-500 w-4 h-4 ml-auto" />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {t('apiGuide.step3.tip')}
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 pointer-events-none z-[101] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              className="w-full max-w-2xl bg-[#0F0D1B] border border-white/10 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto relative"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-white/5 flex">
                {steps.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`flex-1 h-full transition-all duration-300 ${idx <= currentStep ? 'bg-focus-primary shadow-[0_0_10px_rgba(139,92,246,0.8)]' : 'bg-transparent'}`}
                  />
                ))}
              </div>

              {/* Header */}
              <div className="p-8 pb-4 text-center">
                <h2 className="text-2xl font-bold tracking-tight mb-2">{t('apiGuide.title')}</h2>
                <p className="text-gray-400 text-sm">{t('apiGuide.subtitle')}</p>
              </div>

              {/* Content Carousel */}
              <div className="relative px-8 py-6 overflow-hidden">
                <AnimatePresence mode="wait" custom={currentStep}>
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-focus-primary/20 border border-focus-primary/30 flex items-center justify-center text-focus-primary">
                        {(() => {
                          const Icon = steps[currentStep].icon;
                          return <Icon className="w-6 h-6" />;
                        })()}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{steps[currentStep].title}</h3>
                        <p className="text-gray-400 text-sm">{steps[currentStep].desc}</p>
                      </div>
                    </div>

                    {/* Visual Section */}
                    {steps[currentStep].visual}

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer Controls */}
              <div className="px-8 py-6 bg-white/5 border-t border-white/5 flex justify-between items-center">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${currentStep === 0 ? 'text-gray-600 cursor-not-allowed' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  <ChevronLeft className="w-4 h-4" /> {t('apiGuide.back')}
                </button>
                
                <div className="flex gap-2">
                  {steps.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentStep ? 'bg-focus-primary w-4' : 'bg-white/20'}`}
                    />
                  ))}
                </div>

                {currentStep < steps.length - 1 ? (
                  <button
                    onClick={nextStep}
                    className="flex items-center gap-2 px-6 py-2.5 bg-focus-primary hover:bg-focus-secondary text-white rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
                  >
                    {t('apiGuide.next')} <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={onClose}
                    className="flex items-center gap-2 px-6 py-2.5 bg-green-500 hover:bg-green-400 text-white rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]"
                  >
                    {t('apiGuide.done')} <CheckCircle className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
