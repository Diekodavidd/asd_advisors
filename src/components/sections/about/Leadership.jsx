
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PiArrowRight, PiX } from 'react-icons/pi';
import Eyebrow from '../../ui/Eyebrow';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import Magnetic from '../../motion/Magnetic';
import { ABOUT_IMAGES } from '../../../data/content';
import { EASE, VIEWPORT } from '../../../lib/motion';
import './Leadership.css';

// Replace these with the actual leadership team details.
const TEAM_MEMBERS = [
  {
    name: 'Team Member Name',
    role: 'Managing Director',
    bio: 'Add a short professional introduction for this team member.',
    image: '',
  },
  {
    name: 'Team Member Name',
    role: 'Strategy Director',
    bio: 'Add a short professional introduction for this team member.',
    image: '',
  },
  {
    name: 'Team Member Name',
    role: 'Senior Consultant',
    bio: 'Add a short professional introduction for this team member.',
    image: '',
  },
];

export default function Leadership() {
  const [isTeamOpen, setIsTeamOpen] = useState(false);

  useEffect(() => {
    if (!isTeamOpen) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsTeamOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isTeamOpen]);

  return (
    <>
      <section id="leadership" className="leadership">
        <div className="leadership__copy">
          <Eyebrow rule={false}>Our Leadership</Eyebrow>

          <SplitLines
            className="display leadership__title"
            delay={0.1}
            lines={['Experienced', 'Minds. A Shared', 'Commitment.']}
          />

          <Reveal as="p" className="lead leadership__lead" delay={0.35}>
            Our leadership team brings together diverse expertise across strategy,
            operations, finance and growth. United by a shared commitment to client
            success, we work closely with businesses to navigate challenges and
            seize new opportunities.
          </Reveal>

          <Reveal delay={0.45} className="leadership__action">
            <Magnetic strength={10}>
              <button
              id="dsws"
                type="button"
                className="pill pill--dark pill--compact"
                onClick={() => setIsTeamOpen(true)}
              >
                Meet Our Team
                <span className="pill__dot">
                  <PiArrowRight />
                </span>
              </button>
            </Magnetic>
          </Reveal>
        </div>

        <div className="leadership__visual">
          <motion.div
            className="leadership__corner"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 1.4, ease: EASE }}
          />

          <ParallaxImage
            className="leadership__image"
            src={ABOUT_IMAGES.leadership}
            alt="Boardroom overlooking the skyline at sunset"
            reveal="left"
            strength={0.45}
          />
        </div>
      </section>

      <AnimatePresence>
        {isTeamOpen && (
          <motion.div
            className="team-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsTeamOpen(false);
              }
            }}
          >
            <motion.div
              className="team-modal__panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="team-modal-title"
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <button
                type="button"
                className="team-modal__close"
                onClick={() => setIsTeamOpen(false)}
                aria-label="Close team modal"
              >
                <PiX />
              </button>

              <div className="team-modal__header">
                <span className="team-modal__eyebrow">The People Behind ASD</span>
                <h2 id="team-modal-title">
                  Meet Our <em>Leadership.</em>
                </h2>
                <p>
                  The experience, perspective and people driving our commitment
                  to meaningful business transformation.
                </p>
              </div>

              <div className="team-modal__grid">
                {TEAM_MEMBERS.map((member, index) => (
                  <motion.article
                    className="team-modal__member"
                    key={`${member.name}-${index}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + index * 0.08 }}
                  >
                    <div className="team-modal__portrait">
                      {member.image ? (
                        <img src={member.image} alt={member.name} />
                      ) : (
                        <span>{member.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span>
                      )}
                    </div>

                    <div className="team-modal__details">
                      <h3>{member.name}</h3>
                      <span>{member.role}</span>
                      <p>{member.bio}</p>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="team-modal__footer">
                <span>ASD Advisors Ltd.</span>
                <span>Experience. Insight. Impact.</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
