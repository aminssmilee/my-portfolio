import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const CursorHoverImage = ({ imageSrc, children }) => {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      <AnimatePresence>
        {visible && (
          <motion.img
            key="hover-img"
            src={imageSrc}
            alt=""
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              top: pos.y,
              left: pos.x,
            }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed z-[9999] w-44 rounded-lg pointer-events-none shadow-xl"
            style={{
              transform: 'translate(-50%, -50%)',
              position: 'fixed',
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CursorHoverImage;

