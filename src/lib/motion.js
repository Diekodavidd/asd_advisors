export const EASE = [0.16, 1, 0.3, 1];

export const VIEWPORT = { once: true, margin: '0px 0px -8% 0px' };

export const fadeUpOnMount = (delay = 0, y = 44) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease: EASE },
});

export const fadeOnMount = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, delay, ease: EASE },
});

export const staggerContainer = (stagger = 0.12, delayChildren = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

export const fadeUpItem = {
  hidden: { opacity: 0, y: 44 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};
