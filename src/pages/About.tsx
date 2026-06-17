import PhilosophyScroll from '../components/PhilosophyScroll';
import ScreenshotGallery from '../components/ScreenshotGallery';

export default function About() {
  return (
    <div className="pt-20">
      <PhilosophyScroll />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
      <ScreenshotGallery />
    </div>
  );
}
