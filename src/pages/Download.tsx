import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Info, Download as DownloadIcon } from 'lucide-react';

const WindowsIcon = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" className="w-12 h-12 text-blue-400"><path d="M0 93.7l210.6-29.7v167.4L0 231.4V93.7zm210.6 273.8l-210.6-29.7v-137.4l210.6 0v167.1zm24.5-300.6L448 32v199.4H235.1V66.9zm212.9 224.2L448 480l-212.9-30V291.1H448z"/></svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 384 512" fill="currentColor" className="w-12 h-12 text-gray-200"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
);

const LinuxIcon = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" className="w-12 h-12 text-yellow-500"><path d="M220.8 123.3c1.3-4.5 5.5-7.4 10.2-7.4h11.2c5.1 0 9.5 3.3 10.7 8.3 2.6 11 12 25.4 28 35.5 16 10.1 36.1 15.3 58.7 15.3 22.5 0 42.6-5.2 58.6-15.3 15.9-10.1 25.3-24.5 27.9-35.5 1.2-5 5.6-8.3 10.7-8.3h11.2c4.7 0 8.9 2.9 10.2 7.4 6.1 21.6-1.5 50.1-23.7 70.8-22.1 20.7-52.9 32.2-87 32.2s-64.9-11.5-87-32.2c-22.1-20.7-29.7-49.2-23.7-70.8zm-119.5 70.8c-22.1-20.7-29.7-49.2-23.7-70.8 1.3-4.5 5.5-7.4 10.2-7.4h11.2c5.1 0 9.5 3.3 10.7 8.3 2.6 11 12 25.4 28 35.5 16 10.1 36.1 15.3 58.7 15.3 22.5 0 42.6-5.2 58.6-15.3 15.9-10.1 25.3-24.5 27.9-35.5 1.2-5 5.6-8.3 10.7-8.3h11.2c4.7 0 8.9 2.9 10.2 7.4 6.1 21.6-1.5 50.1-23.7 70.8-22.1 20.7-52.9 32.2-87 32.2s-64.9-11.5-87-32.2zm148.6 44.8l-15.4-38.6c-4.4-11-20.1-11-24.5 0l-15.4 38.6c-19.1 47.9-16.1 102.1 8.2 147.9l7.3 13.8c7.8 14.7 26.5 14.7 34.3 0l7.3-13.8c24.3-45.8 27.3-100 8.2-147.9zm194.5 117c-8 30.6-25.2 57.6-49.5 78.4-24.2 20.7-54.8 33-87.3 35.2l-23 1.5c-9.8.6-18.4 6.5-22.6 15.4-6.3 13.4-20 22.2-35.4 22.2s-29.1-8.8-35.4-22.2c-4.2-8.9-12.8-14.8-22.6-15.4l-23-1.5c-32.5-2.2-63-14.5-87.3-35.2-24.3-20.8-41.5-47.8-49.5-78.4-5.5-20.8 1.4-42.9 17.6-56.1 8.6-7.1 20-10.2 31.4-8.8l38.8 4.7c15.1 1.8 29.5-6.2 35.9-20.1l11.7-25.5c4.7-10.1 15-16.7 26.2-16.7h47.2c11.2 0 21.5 6.5 26.2 16.7l11.7 25.5c6.4 13.9 20.8 21.9 35.9 20.1l38.8-4.7c11.4-1.4 22.8 1.7 31.4 8.8 16.2 13.2 23.1 35.3 17.6 56.1z"/></svg>
);

const downloadLinks = [
  {
    os: "Windows",
    arch: "x64",
    type: ".exe",
    icon: WindowsIcon,
    url: "https://github.com/cavalinho-xdd/focus/releases/download/untagged-77904c4afeca59a9b578/Focus-Setup-1.0.1.exe"
  },
  {
    os: "macOS",
    arch: "Arm64",
    type: ".dmg",
    icon: AppleIcon,
    url: "https://github.com/cavalinho-xdd/focus/releases/download/untagged-b1eb751664294d823e33/Focus-1.0.1-arm64.dmg"
  },
  {
    os: "Linux",
    arch: "Universal",
    type: ".AppImage",
    icon: LinuxIcon,
    url: "https://github.com/cavalinho-xdd/focus/releases/download/untagged-b1eb751664294d823e33/Focus-1.0.1.AppImage"
  },
  {
    os: "Linux",
    arch: "Debian/Ubuntu",
    type: ".deb",
    icon: LinuxIcon,
    url: "https://github.com/cavalinho-xdd/focus/releases/download/untagged-b1eb751664294d823e33/focus_1.0.1_amd64.deb"
  }
];

export default function Download() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto w-full"
      >
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Alpha Release</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
            Focus is in active development. Try out the initial release on your platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {downloadLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-focus-primary/10 hover:border-focus-primary/50 transition-all duration-300 group relative overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center">
                <link.icon />
                <h3 className="text-xl font-bold mt-6 mb-1 text-white">{link.os}</h3>
                <p className="text-gray-400 text-sm mb-6">{link.arch}</p>
                <div className="flex items-center gap-2 text-focus-primary font-bold text-sm bg-focus-primary/20 px-4 py-2 rounded-full border border-focus-primary/20 group-hover:bg-focus-primary group-hover:text-white transition-colors">
                  <DownloadIcon className="w-4 h-4" /> {link.type}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Installation Warning */}
        <div className="bg-focus-primary/10 border border-focus-primary/20 rounded-2xl p-6 md:p-8 backdrop-blur-md text-left shadow-[0_0_30px_rgba(139,92,246,0.1)] max-w-3xl mx-auto">
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
