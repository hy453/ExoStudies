import { ContactForm } from '../sections/ContactForm';
import { Phone, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import './ContactPage.css';

interface ContactItem {
  label: string;
  value: string;
  href: string;
  actionLabel: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
}

const CONTACT_ITEMS: ContactItem[] = [
  {
    label: 'Phone 1',
    value: '+91 99913 62621',
    href: 'tel:+919991362621',
    actionLabel: 'Call ↗',
    icon: Phone,
  },
  {
    label: 'Phone 2',
    value: '+91 83989 90913',
    href: 'tel:+918398990913',
    actionLabel: 'Call ↗',
    icon: Phone,
  },
  {
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/918398990913',
    actionLabel: 'Message ↗',
    icon: MessageSquare,
  },
  {
    label: 'Email',
    value: 'jack.ms.zoo@outlook.com',
    href: 'mailto:jack.ms.zoo@outlook.com',
    actionLabel: 'Email ↗',
    icon: Mail,
  },
];

export function ContactPage() {
  return (
    <div className="contact-page">
      <header className="contact-page__hero">
        <div className="contact-page__hero-bg" aria-hidden="true">
          <div className="contact-page__gradient-orb" />
        </div>
        <div className="container">
          <div className="contact-page__hero-content">
            <h1 className="contact-page__main-title">Contact Us</h1>
            <p className="contact-page__subtitle">
              Have questions? Our academic counsellors are here to help you
              choose the right path.
            </p>
          </div>
        </div>
      </header>

      <main className="contact-page__main">
        <div className="container">
          <ContactForm />

          <section className="contact-page__info" aria-labelledby="contact-info-heading">
            <p className="contact-page__developer-credit">
              Website Developed by Harsh Kumar Yadav
            </p>

            <div className="contact-page__card card" role="region" aria-labelledby="contact-info-heading">
              <h2 id="contact-info-heading" className="contact-page__card-title">
                CONTACT EXOSTUDIES
              </h2>

              <ul className="contact-page__list" role="list">
                {CONTACT_ITEMS.map((item, index) => (
                  <li key={item.label} className="contact-page__list-item">
                    <div className="contact-page__item-content">
                      <span className="contact-page__item-label">{item.label}</span>
                      <span className="contact-page__item-value">{item.value}</span>
                    </div>
                    <a
                      href={item.href}
                      className="contact-page__action"
                      target={item.href.startsWith('https://') ? '_blank' : undefined}
                      rel={item.href.startsWith('https://') ? 'noopener noreferrer' : undefined}
                      aria-label={`${item.actionLabel} for ${item.label}`}
                    >
                      <span className="contact-page__action-text">{item.actionLabel}</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                    {index < CONTACT_ITEMS.length - 1 && (
                      <div className="contact-page__divider" aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}