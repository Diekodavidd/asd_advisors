import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PiArrowRight, PiCaretDown, PiCheck, PiCircleNotch, PiLockSimple } from 'react-icons/pi';
import Magnetic from '../../motion/Magnetic';
import { FORM_FIELDS, HELP_OPTIONS } from '../../../data/contact';
import { EASE } from '../../../lib/motion';
import './ContactForm.css';

const EMPTY = { firstName: '', lastName: '', email: '', phone: '', company: '', help: '', message: '' };
const isEmail = (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);

function validate(values) {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = true;
  if (!values.lastName.trim()) errors.lastName = true;
  if (!isEmail(values.email.trim())) errors.email = true;
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const update = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: false }));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    const errs = validate(values);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;
    setStatus('sending');
    // TODO: replace with a real request (Formspree, EmailJS, your API...)
    // await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
    await new Promise((r) => setTimeout(r, 1000));
    setStatus('sent');
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setStatus('idle');
  };

  const hasErrors = Object.values(errors).some(Boolean);

  return (
    <AnimatePresence mode="wait">
      {status === 'sent' ? (
        <motion.div
          key="sent"
          className="cform__sent"
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.7, ease: EASE }}
          role="status"
        >
          <motion.span
            className="cform__sent-icon"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.25, type: 'spring', stiffness: 260, damping: 16 }}
          >
            <PiCheck />
          </motion.span>
          <h3 className="cform__sent-title">Thank you, {values.firstName}.</h3>
          <p className="cform__sent-text">Your message is on its way. A member of our team will be in touch shortly to arrange a conversation.</p>
          <button type="button" className="cform__again" onClick={reset}>Send another message</button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          className="cform"
          onSubmit={submit}
          noValidate
          exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
        >
          <div className="cform__grid">
            {FORM_FIELDS.map((fl) => (
              <input
                key={fl.name}
                className={'cform__input' + (errors[fl.name] ? ' is-error' : '')}
                name={fl.name}
                type={fl.type}
                placeholder={fl.placeholder}
                aria-label={fl.placeholder}
                aria-invalid={!!errors[fl.name]}
                autoComplete={fl.autoComplete}
                value={values[fl.name]}
                onChange={update}
              />
            ))}
            <div className="cform__select">
              <select name="help" value={values.help} onChange={update} aria-label="How can we help you?" className="cform__input">
                <option value="">How can we help you?</option>
                {HELP_OPTIONS.map((o) => <option key={o}>{o}</option>)}
              </select>
              <PiCaretDown className="cform__caret" />
            </div>
          </div>
          <textarea
            className="cform__input cform__textarea"
            name="message"
            rows={5}
            placeholder="Tell us more about your goals or enquiry..."
            aria-label="Message"
            value={values.message}
            onChange={update}
          />
          <AnimatePresence>
            {hasErrors && (
              <motion.p
                className="cform__error"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                role="alert"
              >
                Please fill in your first name, last name and a valid business email.
              </motion.p>
            )}
          </AnimatePresence>
          <Magnetic strength={10} className="cform__submit-wrap">
            <button type="submit" className="cform__submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending\u2026' : 'Send Message'}
              <span className="pill__dot">
                {status === 'sending' ? (
                  <motion.span style={{ display: 'grid' }} animate={{ rotate: 360 }} transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}>
                    <PiCircleNotch />
                  </motion.span>
                ) : <PiArrowRight />}
              </span>
            </button>
          </Magnetic>
          <p className="cform__note"><PiLockSimple /> Your information is secure and will only be used to respond to your enquiry.</p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
