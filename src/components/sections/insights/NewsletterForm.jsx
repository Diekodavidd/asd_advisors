import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PiArrowRight, PiCheckCircleFill } from 'react-icons/pi';
import { EASE } from '../../../lib/motion';
import './NewsletterForm.css';

const isEmail = (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | error | done

  const submit = (e) => {
    e.preventDefault();
    if (!isEmail(email.trim())) return setStatus('error');
    // TODO: send to your newsletter provider (Mailchimp, ConvertKit, etc.)
    setStatus('done');
  };

  return (
    <AnimatePresence mode="wait">
      {status === 'done' ? (
        <motion.div
          key="done"
          className="newsletter__done"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          role="status"
        >
          <PiCheckCircleFill /> Thank you \u2014 you\u2019re on the list.
        </motion.div>
      ) : (
        <motion.form
          key="form"
          className={'newsletter' + (status === 'error' ? ' is-error' : '')}
          onSubmit={submit}
          noValidate
          exit={{ opacity: 0, y: -8, transition: { duration: 0.25 } }}
          animate={status === 'error' ? { x: [0, -8, 8, -5, 5, 0] } : { x: 0 }}
          transition={{ duration: 0.45 }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
            placeholder="Enter your email address"
            aria-label="Email address"
            aria-invalid={status === 'error'}
          />
          <motion.button type="submit" aria-label="Subscribe" whileHover={{ x: 3 }} whileTap={{ scale: 0.92 }}>
            <PiArrowRight />
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
