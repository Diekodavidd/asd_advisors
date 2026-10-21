
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  PiArrowRight,
  PiCaretDown,
  PiCheck,
  PiCircleNotch,
  PiLockSimple,
} from 'react-icons/pi';
import { useForm, ValidationError } from '@formspree/react';

import Magnetic from '../../motion/Magnetic';
import { FORM_FIELDS, HELP_OPTIONS } from '../../../data/contact';
import { EASE } from '../../../lib/motion';
import './ContactForm.css';

const EMPTY = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  help: '',
  message: '',
};

const isEmail = (value) =>
  /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);

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
  const [state, handleFormspreeSubmit] = useForm('mkjodzyz');

  const status = state.succeeded
    ? 'sent'
    : state.submitting
      ? 'sending'
      : 'idle';

  const update = (e) => {
    const { name, value } = e.target;

    setValues((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: false,
      }));
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    if (state.submitting) return;

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.values(validationErrors).some(Boolean)) return;

    const formData = new FormData(e.currentTarget);

    try {
      await handleFormspreeSubmit(formData);
    } catch {
      // The error message below handles failed submissions.
    }
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
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
            transition={{
              delay: 0.25,
              type: 'spring',
              stiffness: 260,
              damping: 16,
            }}
          >
            <PiCheck />
          </motion.span>

          <h3 className="cform__sent-title">
            Thank you, {values.firstName}.
          </h3>

          <p className="cform__sent-text">
            Your message has been submitted. A member of our team
            will be in touch about your enquiry.
          </p>

          <button
            type="button"
            className="cform__again"
            onClick={reset}
          >
            Send another message
          </button>
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
            {FORM_FIELDS.map((field) => (
              <div key={field.name}>
                <input
                  className={
                    'cform__input' +
                    (errors[field.name] ? ' is-error' : '')
                  }
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  aria-label={field.placeholder}
                  aria-invalid={!!errors[field.name]}
                  aria-required={
                    ['firstName', 'lastName', 'email'].includes(field.name)
                  }
                  autoComplete={field.autoComplete}
                  value={values[field.name] ?? ''}
                  onChange={update}
                  required={
                    ['firstName', 'lastName', 'email'].includes(field.name)
                  }
                />

                {errors[field.name] && (
                  <p className="cform__error" role="alert">
                    {field.name === 'email'
                      ? 'Please enter a valid email address.'
                      : 'This field is required.'}
                  </p>
                )}

                <ValidationError
                  field={field.name}
                  errors={state.errors}
                />
              </div>
            ))}

            <div className="cform__select">
              <select
                name="help"
                value={values.help}
                onChange={update}
                aria-label="How can we help you?"
                className="cform__input"
              >
                <option value="">How can we help you?</option>
                {HELP_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
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

          <ValidationError
            field="message"
            errors={state.errors}
          />

          <AnimatePresence>
            {(hasErrors || state.errors) && (
              <motion.p
                className="cform__error"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                role="alert"
              >
                {hasErrors
                  ? 'Please provide your first name, last name and a valid email.'
                  : 'We could not send your message. Please check your details and try again.'}
              </motion.p>
            )}
          </AnimatePresence>

          <Magnetic strength={10} className="cform__submit-wrap">
            <button
              type="submit"
              className="cform__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}

              <span className="pill__dot">
                {status === 'sending' ? (
                  <motion.span
                    style={{ display: 'grid' }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <PiCircleNotch />
                  </motion.span>
                ) : (
                  <PiArrowRight />
                )}
              </span>
            </button>
          </Magnetic>

          <p className="cform__note">
            <PiLockSimple />
            Your information is secure and will only be used to
            respond to your enquiry.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
