import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const SocialSidebar = () => {
  return (
    <motion.div 
      className="social-sidebar"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a 
        href="https://www.instagram.com/starsdogsmedellin/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-sidebar__link"
      >
        <Instagram size={24} />
        <span className="social-sidebar__text">Síguenos en Instagram</span>
      </a>
    </motion.div>
  );
};

export default SocialSidebar;