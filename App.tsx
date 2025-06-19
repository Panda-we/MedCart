import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/contexts/ThemeContext';
import LoaderScreen from '@/components/LoaderScreen';
import Navbar from '@/components/Navbar';
import WaterWaveHero from '@/components/WaterWaveHero';
import ProductGallery from '@/components/ProductGallery';
import FeatureCards from '@/components/FeatureCards';
import InteractiveFeatures from '@/components/InteractiveFeatures';
import PartnerLogos from '@/components/PartnerLogos';
import GraphSection from '@/components/GraphSection';
import ParallaxSection from '@/components/ParallaxSection';
import ShowcasePortfolio from '@/components/ShowcasePortfolio';
import StatsCounter from '@/components/StatsCounter';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import NewsletterPopup from '@/components/NewsletterPopup';
import Footer from '@/components/Footer';
import CursorEffect from '@/components/CursorEffect';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000 // 10 minutes
    }
  }
});

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const newsletterTimer = setTimeout(() => {
      setShowNewsletter(true);
    }, 10000);

    return () => clearTimeout(newsletterTimer);
  }, []);

  return (
    <QueryClientProvider client={queryClient} data-id="ulrvessk3" data-path="src/App.tsx">
      <ThemeProvider data-id="hkmz0pqfe" data-path="src/App.tsx">
        <TooltipProvider data-id="ntygb5bim" data-path="src/App.tsx">
          <div className="relative min-h-screen" data-id="ud6axdbf1" data-path="src/App.tsx">
            {/* Enhanced Background Effects */}
            <div className="parallax-bg" data-id="2qmwgqufx" data-path="src/App.tsx" />
            
            {/* Cursor Effects */}
            <CursorEffect data-id="omkvifwb3" data-path="src/App.tsx" />
            
            <AnimatePresence mode="wait" data-id="i73xe2kpu" data-path="src/App.tsx">
              {isLoading ?
              <motion.div
                key="loader"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }} data-id="u23y5ag9q" data-path="src/App.tsx">

                  <LoaderScreen data-id="m7aqbavg5" data-path="src/App.tsx" />
                </motion.div> :

              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10" data-id="jzsdotyim" data-path="src/App.tsx">

                  {/* Navigation */}
                  <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="nav-enhanced fixed top-0 left-0 right-0 z-50" data-id="hee4p3r0w" data-path="src/App.tsx">

                    <Navbar data-id="w7zlegdvw" data-path="src/App.tsx" />
                  </motion.div>

                  {/* Main Content */}
                  <main className="relative" data-id="n6duaeknn" data-path="src/App.tsx">
                    {/* Hero Section with Enhanced Styling */}
                    <motion.section
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative overflow-hidden" data-id="mquyxcpz6" data-path="src/App.tsx">

                      <WaterWaveHero data-id="wpnadvm7j" data-path="src/App.tsx" />
                    </motion.section>

                    {/* Product Gallery */}
                    <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-20 relative" data-id="1xorintts" data-path="src/App.tsx">

                      <ProductGallery data-id="344nw5jb5" data-path="src/App.tsx" />
                    </motion.section>

                    {/* Feature Cards */}
                    <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-20 relative" data-id="77sz722xq" data-path="src/App.tsx">

                      <FeatureCards data-id="hut6aabzz" data-path="src/App.tsx" />
                    </motion.section>

                    {/* Interactive Features */}
                    <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-20 relative" data-id="fzdghjec2" data-path="src/App.tsx">

                      <InteractiveFeatures data-id="w6tyok7lc" data-path="src/App.tsx" />
                    </motion.section>

                    {/* Stats Counter */}
                    <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-20 relative" data-id="sznwtp8lk" data-path="src/App.tsx">

                      <StatsCounter data-id="fo49uc86c" data-path="src/App.tsx" />
                    </motion.section>

                    {/* Partner Logos */}
                    <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-20 relative" data-id="vsfvpq7f0" data-path="src/App.tsx">

                      <PartnerLogos data-id="x8z74ra84" data-path="src/App.tsx" />
                    </motion.section>

                    {/* Graph Section */}
                    <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-20 relative" data-id="viai7nv9z" data-path="src/App.tsx">

                      <GraphSection data-id="t26j6o9f5" data-path="src/App.tsx" />
                    </motion.section>

                    {/* Parallax Section */}
                    <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative" data-id="a9a42glc6" data-path="src/App.tsx">

                      <ParallaxSection data-id="5scah4f08" data-path="src/App.tsx" />
                    </motion.section>

                    {/* Showcase Portfolio */}
                    <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-20 relative" data-id="wvz2jz906" data-path="src/App.tsx">

                      <ShowcasePortfolio data-id="0evtb2l63" data-path="src/App.tsx" />
                    </motion.section>

                    {/* Testimonials */}
                    <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-20 relative" data-id="t3qqcelzi" data-path="src/App.tsx">

                      <TestimonialsSlider data-id="yzgxufak5" data-path="src/App.tsx" />
                    </motion.section>
                  </main>

                  {/* Footer */}
                  <motion.footer
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative" data-id="75in0w713" data-path="src/App.tsx">

                    <Footer data-id="vw7a6wlyl" data-path="src/App.tsx" />
                  </motion.footer>

                  {/* Newsletter Popup */}
                  <AnimatePresence data-id="055hw85wv" data-path="src/App.tsx">
                    {showNewsletter &&
                  <NewsletterPopup onClose={() => setShowNewsletter(false)} data-id="qa5kho5xv" data-path="src/App.tsx" />
                  }
                  </AnimatePresence>

                  {/* Toast Notifications */}
                  <Toaster data-id="9oswnk683" data-path="src/App.tsx" />
                </motion.div>
              }
            </AnimatePresence>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>);

};

export default App;