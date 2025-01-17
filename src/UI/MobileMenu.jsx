import { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return isOpen ? (
    <div className="mobile-menu fixed inset-0 bg-black z-40 flex flex-col justify-center items-center space-y-12 nav-blur md:hidden pt-24">
      <a
        href="#"
        className="text-2xl tracking-[0.2em] hover:text-white/50 transition-colors"
        onClick={handleClose}
      >
        COLLECTIONS
      </a>
      <a
        href="#"
        className="text-2xl tracking-[0.2em] hover:text-white/50 transition-colors"
        onClick={handleClose}
      >
        BESPOKE
      </a>
      <a
        href="#"
        className="text-2xl tracking-[0.2em] hover:text-white/50 transition-colors"
        onClick={handleClose}
      >
        LOOKBOOK
      </a>
      <a
        href="#"
        className="text-2xl tracking-[0.2em] hover:text-white/50 transition-colors"
        onClick={handleClose}
      >
        CONTACT
      </a>
    </div>
  ) : null;
};

export default MobileMenu;
