import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Info, DownloadSimple } from '@phosphor-icons/react';
import { WindowsIcon, AppleIcon, LinuxIcon } from '../components/OSIcons';

const initialDownloadLinks = [
  {
    os: "Windows",
    arch: "x64",
    type: ".exe",
    Icon: WindowsIcon,
    iconColor: "text-blue-400",
    url: "https://github.com/cavalinho-xdd/aurora/releases/download/v1.0.10-alpha.4/Aurora-Setup-1.0.10-alpha.4.exe",
    featured: true
  },
  {
    os: "macOS",
    arch: "Arm64",
    type: ".dmg",
    Icon: AppleIcon,
    iconColor: "text-gray-200",
    url: "https://github.com/cavalinho-xdd/aurora/releases/download/v1.0.10-alpha.4/Aurora-1.0.10-alpha.4-arm64.dmg",
    featured: true
  },
  {
    os: "Linux",
    arch: "Universal",
    type: ".AppImage",
    Icon: LinuxIcon,
    iconColor: "text-yellow-500",
    url: "https://github.com/cavalinho-xdd/aurora/releases/download/v1.0.10-alpha.4/Aurora-1.0.10-alpha.4.AppImage",
    featured: false
  },
  {
    os: "Linux",
    arch: "Debian/Ubuntu",
    type: ".deb",
    Icon: LinuxIcon,
    iconColor: "text-yellow-500",
    url: "https://github.com/cavalinho-xdd/aurora/releases/download/v1.0.10-alpha.4/aurora_1.0.10-alpha.4_amd64.deb",
    featured: false
  }
];

export default function Download() {
  const { t } = useTranslation();
  const [links, setLinks] = useState(initialDownloadLinks);

  useEffect(() => {
    fetch("https://api.github.com/repos/cavalinho-xdd/aurora/releases/latest")
      .then(res => res.json())
      .then(data => {
        if (!data.assets) return;
        
        setLinks(prevLinks => prevLinks.map(link => {
          const matchedAsset = data.assets.find((asset: { name: string; browser_download_url: string }) => asset.name.endsWith(link.type));
          if (matchedAsset) {
            return { ...link, url: matchedAsset.browser_download_url };
          }
          return link;
        }));
      })
      .catch(err => console.error("Failed to fetch latest release:", err));
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto w-full"
      >
        <div className="mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
            <span className="text-focus-primary">{t('downloadPage.title')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            {t('downloadPage.subtitle')}
          </p>
        </div>

        {/* Asymmetric layout: Featured OSes prominent, Linux grouped below */}
        <div className="flex flex-col gap-6 mb-24 max-w-4xl mx-auto">
          {/* Featured OSes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {links.filter(l => l.featured).map((link, idx) => (
              <motion.a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="pressable flex flex-col items-center p-10 md:p-14 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 hover:bg-focus-primary/10 hover:border-focus-primary/50 group relative overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.05)]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col items-center">
                  <link.Icon className={`w-16 h-16 mb-8 ${link.iconColor}`} />
                  <h3 className="text-3xl font-bold mb-2 text-white">{link.os}</h3>
                  <p className="text-gray-400 text-base mb-8">{link.arch}</p>
                  <div className="flex items-center gap-2 text-focus-primary font-bold text-sm bg-focus-primary/10 px-6 py-3 rounded-full border border-focus-primary/20 group-hover:bg-focus-primary group-hover:text-white transition-colors duration-300">
                    <DownloadSimple weight="bold" className="w-5 h-5" /> {link.type}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Secondary OSes */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {links.filter(l => !l.featured).map((link) => (
              <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pressable flex items-center justify-between p-6 rounded-2xl bg-black/20 border border-white/5 hover:bg-white/5 hover:border-white/20 group"
              >
                <div className="flex items-center gap-4">
                  <link.Icon className={`w-8 h-8 ${link.iconColor}`} />
                  <div className="text-left">
                    <h4 className="font-bold text-white text-lg">{link.os}</h4>
                    <span className="text-xs text-gray-500">{link.arch}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm font-medium group-hover:text-white transition-colors">
                  {link.type} <DownloadSimple weight="bold" className="w-4 h-4" />
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 text-left max-w-4xl mx-auto shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-focus-primary/10 rounded-full">
              <Info weight="fill" className="w-6 h-6 text-focus-primary" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white">{t('downloadWarning.title')}</h3>
          </div>
          <p className="text-gray-400 mb-8 leading-relaxed text-base max-w-3xl">
            {t('downloadWarning.desc')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <h4 className="font-bold text-white mb-2">{t('downloadWarning.winTitle')}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{t('downloadWarning.winDesc')}</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <h4 className="font-bold text-white mb-2">{t('downloadWarning.macTitle')}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{t('downloadWarning.macDesc')}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
