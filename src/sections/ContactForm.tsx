import { useState, type FormEvent, type ChangeEvent } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Phone, User, MessageSquare } from 'lucide-react';
import './ContactForm.css';

interface FormData {
  name: string;
  phone: string;
  targetExam: string;
  preferredCourse: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  targetExam?: string;
  preferredCourse?: string;
  message?: string;
  consent?: string;
}

type FormDataKey = keyof FormData;

const TARGET_EXAMS = [
  { value: '', label: 'Select your target exam / class' },
  { value: 'jee-main', label: 'JEE Main' },
  { value: 'jee-advanced', label: 'JEE Advanced' },
  { value: 'neet-ug', label: 'NEET UG' },
  { value: 'cuet', label: 'CUET' },
  { value: 'class-12', label: 'Class 12 (Boards)' },
  { value: 'class-11', label: 'Class 11' },
  { value: 'class-10', label: 'Class 10 (Foundation)' },
  { value: 'class-9', label: 'Class 9 (Foundation)' },
  { value: 'other', label: 'Other' },
];

const PREFERRED_COURSES = [
  { value: '', label: 'Select preferred course (optional)' },
  { value: 'jee-comprehensive', label: 'JEE Comprehensive (2-Year)' },
  { value: 'jee-crash', label: 'JEE Crash Course' },
  { value: 'neet-comprehensive', label: 'NEET Comprehensive (2-Year)' },
  { value: 'neet-crash', label: 'NEET Crash Course' },
  { value: 'humanities', label: 'Humanities (Classes 11–12)' },
  { value: 'foundation-9-10', label: 'Foundation Classes 9–10' },
  { value: 'cuet-prep', label: 'CUET Preparation' },
  { value: 'custom', label: 'Custom / Counselling Required' },
];

const INITIAL_FORM_DATA: FormData = {
  name: '',
  phone: '',
  targetExam: '',
  preferredCourse: '',
  message: '',
  consent: false,
};

const WHATSAPP_NUMBER = '918398990913';

const getEventValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): string | boolean => {
  const target = event.target;
  if (target instanceof HTMLInputElement && target.type === 'checkbox') {
    return target.checked;
  }
  return target.value;
};

const getLabelFromValue = (options: { value: string; label: string }[], value: string): string => {
  const found = options.find(opt => opt.value === value);
  return found ? found.label : value;
};

const buildWhatsAppMessage = (data: FormData): string => {
  const lines = [
    'Hello ExoStudies! I would like to book a demo class.',
    '',
    `Student Name: ${data.name}`,
    `Contact Number: ${data.phone}`,
    `Class / Target Exam: ${getLabelFromValue(TARGET_EXAMS, data.targetExam)}`,
  ];

  if (data.preferredCourse) {
    lines.push(`Preferred Course: ${getLabelFromValue(PREFERRED_COURSES, data.preferredCourse)}`);
  }

  if (data.message.trim()) {
    lines.push(`Additional Message: ${data.message.trim()}`);
  }

  return lines.join('\n');
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [touched, setTouched] = useState<Record<FormDataKey, boolean>>({
    name: false,
    phone: false,
    targetExam: false,
    preferredCourse: false,
    message: false,
    consent: false,
  });

  const validateField = (name: string, value: string | boolean): string | undefined => {
    switch (name) {
      case 'name':
        if (!value || (value as string).trim().length < 2) {
          return 'Please enter your full name (at least 2 characters)';
        }
        break;
      case 'phone':
        if (!value || !(value as string).trim().match(/^[\d\s\-+()]{10,}$/)) {
          return 'Please enter a valid phone number (10+ digits)';
        }
        break;
      case 'targetExam':
        if (!value) {
          return 'Please select your target exam or class';
        }
        break;
      case 'preferredCourse':
        break;
      case 'message':
        break;
      case 'consent':
        if (!(value as boolean)) {
          return 'You must consent to be contacted';
        }
        break;
    }
    return undefined;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = event.target;
    const newValue = getEventValue(event);

    setFormData(prev => ({ ...prev, [name]: newValue }));

    if (touched[name as FormDataKey]) {
      const error = validateField(name, newValue);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = event.target;
    const newValue = getEventValue(event);

    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, newValue);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTouched: Record<FormDataKey, boolean> = {
      name: true,
      phone: true,
      targetExam: true,
      preferredCourse: true,
      message: true,
      consent: true,
    };
    setTouched(newTouched);

    const newErrors: FormErrors = {};
    let hasErrors = false;

    (Object.keys(formData) as FormDataKey[]).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);

    if (hasErrors) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const message = buildWhatsAppMessage(formData);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData(INITIAL_FORM_DATA);
    setTouched({
      name: false,
      phone: false,
      targetExam: false,
      preferredCourse: false,
      message: false,
      consent: false,
    });
    setErrors({});
  };

  const renderInput = (
    name: FormDataKey,
    label: string,
    type: 'text' | 'tel' | 'email' = 'text',
    placeholder: string = '',
    icon?: React.ReactNode
  ) => {
    const error = touched[name] && errors[name];
    const value = formData[name] as string;

    return (
      <div className="contact-form__field">
        <label htmlFor={name} className="label">
          {label}
          {name !== 'preferredCourse' && <span className="contact-form__required" aria-hidden="true">*</span>}
        </label>
        <div className="contact-form__input-wrapper">
          {icon && <span className="contact-form__icon" aria-hidden="true">{icon}</span>}
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`input ${error ? 'input-error' : ''}`}
            placeholder={placeholder}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${name}-error` : undefined}
            disabled={isSubmitting}
          />
        </div>
        {error && (
          <p id={`${name}-error`} className="error-message" role="alert">
            <AlertCircle size={14} aria-hidden="true" />
            {error}
          </p>
        )}
      </div>
    );
  };

  const renderSelect = (name: FormDataKey, label: string, options: { value: string; label: string }[]) => {
    const error = touched[name] && errors[name];
    const value = formData[name] as string;

    return (
      <div className="contact-form__field">
        <label htmlFor={name} className="label">
          {label}
          {name !== 'preferredCourse' && <span className="contact-form__required" aria-hidden="true">*</span>}
        </label>
        <div className="contact-form__select-wrapper">
          <select
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`input ${error ? 'input-error' : ''}`}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${name}-error` : undefined}
            disabled={isSubmitting}
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {error && (
          <p id={`${name}-error`} className="error-message" role="alert">
            <AlertCircle size={14} aria-hidden="true" />
            {error}
          </p>
        )}
      </div>
    );
  };

  const renderTextarea = (name: FormDataKey, label: string, placeholder: string) => {
    const error = touched[name] && errors[name];
    const value = formData[name] as string;

    return (
      <div className="contact-form__field">
        <label htmlFor={name} className="label">{label}</label>
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`input ${error ? 'input-error' : ''}`}
          placeholder={placeholder}
          rows={4}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${name}-error` : undefined}
          disabled={isSubmitting}
        />
        {error && (
          <p id={`${name}-error`} className="error-message" role="alert">
            <AlertCircle size={14} aria-hidden="true" />
            {error}
          </p>
        )}
      </div>
    );
  };

  if (submitStatus === 'success') {
    return (
      <section className="contact-form contact-form--success" aria-labelledby="contact-success-heading">
        <div className="contact-form__container container">
          <div className="contact-form__success-card card">
            <div className="contact-form__success-icon" aria-hidden="true">
              <CheckCircle2 size={48} strokeWidth={2.5} />
            </div>
            <h2 id="contact-success-heading" className="contact-form__success-title">
              WhatsApp Opened
            </h2>
            <p className="contact-form__success-desc">
              WhatsApp has opened with your demo request details pre-filled.
              <strong>Please press Send in WhatsApp to submit your request.</strong>
            </p>
            <div className="contact-form__success-note">
              <p>
                <span className="contact-form__disclaimer-label">Note:</span>
                Your request is not sent until you press Send in WhatsApp.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setSubmitStatus('idle')}
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-form" aria-labelledby="contact-form-heading">
      <div className="contact-form__container container">
        <header className="contact-form__header">
          <h2 id="contact-form-heading" className="contact-form__title">
            Book a Free Demo / Counselling
          </h2>
          <p className="contact-form__subtitle">
            Fill in your details and our academic counsellors will contact you
            to schedule a complimentary session.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="contact-form__form" noValidate>
          <div className="contact-form__grid">
            {renderInput('name', 'Full Name', 'text', 'Enter your full name', <User size={20} strokeWidth={2} />)}
            {renderInput('phone', 'Phone Number', 'tel', 'Enter 10-digit mobile number', <Phone size={20} strokeWidth={2} />)}
          </div>

          <div className="contact-form__grid">
            {renderSelect('targetExam', 'Target Exam / Class', TARGET_EXAMS)}
            {renderSelect('preferredCourse', 'Preferred Course', PREFERRED_COURSES)}
          </div>

          {renderTextarea('message', 'Additional Message (Optional)', 'Any specific requirements, preferred timings, or questions...')}

          <div className="contact-form__field contact-form__field--consent">
            <div className="contact-form__checkbox-wrapper">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                onBlur={handleBlur}
                className="contact-form__checkbox"
                aria-invalid={touched.consent && errors.consent ? 'true' : 'false'}
                disabled={isSubmitting}
              />
              <label htmlFor="consent" className="contact-form__checkbox-label">
                I consent to be contacted by ExoStudies
                via phone, WhatsApp, or email for course information and demo
                scheduling. <a href="/privacy" className="contact-form__policy-link">Privacy Policy</a>
              </label>
            </div>
            {touched.consent && errors.consent && (
              <p className="error-message" role="alert">
                <AlertCircle size={14} aria-hidden="true" />
                {errors.consent}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary btn--lg btn--full-width contact-form__submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="contact-form__spinner" aria-hidden="true" />
                Opening WhatsApp...
              </>
            ) : (
              <>
                <MessageSquare size={20} aria-hidden="true" />
                Open in WhatsApp
              </>
            )}
          </button>

          <p className="contact-form__disclaimer">
            <MessageSquare size={14} aria-hidden="true" />
            <span>
              Opens WhatsApp with your details pre-filled. Press Send in WhatsApp to submit.
            </span>
          </p>
        </form>
      </div>
    </section>
  );
}