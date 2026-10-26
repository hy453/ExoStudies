import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import './Footer.css';

const FOOTER_NAV = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Why ExoStudies', href: '/why-exostudies' },
    { label: 'Faculty', href: '/faculty' },
    { label: 'Contact', href: '/contact' },
  ],
  courses: [
    { label: 'JEE Preparation', href: '/courses/jee' },
    { label: 'NEET UG Preparation', href: '/courses/neet' },
    { label: 'Humanities (11–12)', href: '/courses/humanities' },
    { label: 'Foundation (9–10)', href: '/courses/foundation' },
    { label: 'CUET Preparation', href: '/courses/cuet' },
  ],
  support: [
    { label: 'Book a Demo', href: '/contact' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Refund Policy', href: '/refund-policy' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__background" aria-hidden="true">
        <div className="footer__gradient" />
        <div className="footer__pattern" />
      </div>

      <div className="footer__container container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="ExoStudies - Home">
              <img
                src="/images/EXO.png"
                alt=""
                className="footer__logo-image"
                aria-hidden="true"
                width="40"
                height="40"
              />
              <span className="footer__logo-text">ExoStudies</span>
            </Link>

            <p className="footer__tagline">
              Your Goals. Our Guidance. Your Future.
            </p>

            <p className="footer__company">
              Website Developed by Harsh Kumar Yadav
            </p>

            <div className="footer__cta">
              <Link to="/contact" className="btn btn-primary btn--sm footer__cta-btn">
                Book a Free Demo
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <nav className="footer__nav" aria-label="Quick links">
            <h3 className="footer__nav-title">Quick Links</h3>
            <ul className="footer__nav-list">
              {FOOTER_NAV.quickLinks.map(item => (
                <li key={item.href}>
                  <Link to={item.href} className="footer__nav-link">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__nav" aria-label="Course categories">
            <h3 className="footer__nav-title">Courses</h3>
            <ul className="footer__nav-list">
              {FOOTER_NAV.courses.map(item => (
                <li key={item.href}>
                  <Link to={item.href} className="footer__nav-link">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__nav" aria-label="Support links">
            <h3 className="footer__nav-title">Support</h3>
            <ul className="footer__nav-list">
              {FOOTER_NAV.support.map(item => (
                <li key={item.href}>
                  <Link to={item.href} className="footer__nav-link">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__contact">
            <h3 className="footer__nav-title">Get in Touch</h3>
            <p className="footer__contact-desc">
              Have questions? Our academic counsellors are here to help you
              choose the right path.
            </p>

            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <Phone size={18} strokeWidth={2} aria-hidden="true" />
                <div className="footer__contact-content">
                  <span className="footer__contact-label">Phone 1</span>
                  <a href="tel:+919991362621" className="footer__contact-link">+91 99913 62621</a>
                </div>
                <a href="tel:+919991362621" className="footer__contact-action" aria-label="Call Phone 1">
                  <span className="footer__contact-action-text">Call ↗</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </li>
              <li className="footer__contact-item">
                <Phone size={18} strokeWidth={2} aria-hidden="true" />
                <div className="footer__contact-content">
                  <span className="footer__contact-label">Phone 2</span>
                  <a href="tel:+918398990913" className="footer__contact-link">+91 83989 90913</a>
                </div>
                <a href="tel:+918398990913" className="footer__contact-action" aria-label="Call Phone 2">
                  <span className="footer__contact-action-text">Call ↗</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </li>
              <li className="footer__contact-item">
                <MessageSquare size={18} strokeWidth={2} aria-hidden="true" />
                <div className="footer__contact-content">
                  <span className="footer__contact-label">WhatsApp</span>
                  <a href="https://wa.me/918398990913" className="footer__contact-link" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                </div>
                <a href="https://wa.me/918398990913" className="footer__contact-action" target="_blank" rel="noopener noreferrer" aria-label="Message on WhatsApp">
                  <span className="footer__contact-action-text">Message ↗</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </li>
              <li className="footer__contact-item">
                <Mail size={18} strokeWidth={2} aria-hidden="true" />
                <div className="footer__contact-content">
                  <span className="footer__contact-label">Email</span>
                  <a href="mailto:jack.ms.zoo@outlook.com" className="footer__contact-link">jack.ms.zoo@outlook.com</a>
                </div>
                <a href="mailto:jack.ms.zoo@outlook.com" className="footer__contact-action" aria-label="Send Email">
                  <span className="footer__contact-action-text">Email ↗</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </li>
            </ul>

            <p className="footer__demo-cta">
              <Link to="/contact" className="btn btn-secondary btn--sm">
                Book a Free Demo
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>
              &copy; {currentYear} ExoStudies. All rights reserved.
            </p>
          </div>

          <div className="footer__legal">
            <Link to="/privacy" className="footer__legal-link">Privacy Policy</Link>
            <span className="footer__separator" aria-hidden="true">·</span>
            <Link to="/terms-of-service" className="footer__legal-link">Terms of Service</Link>
            <span className="footer__separator" aria-hidden="true">·</span>
            <Link to="/refund-policy" className="footer__legal-link">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}