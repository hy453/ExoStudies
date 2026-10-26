import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import './Header.css';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'Teaching Methodology', href: '/teaching-methodology' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Why ExoStudies', href: '#why-exostudies' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

const isAnchorLink = (href: string) => href.startsWith('#');

const renderNavLink = ({
  item,
  location,
  isMobile,
  onClick,
}: {
  item: NavItem;
  location: ReturnType<typeof useLocation>;
  isMobile: boolean;
  onClick?: () => void;
}) => {
  const isActive = !isAnchorLink(item.href) && location.pathname === item.href;
  const className = isMobile
    ? `header__mobile-nav-link ${isActive ? 'header__mobile-nav-link--active' : ''}`
    : `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isAnchorLink(item.href)) {
      e.preventDefault();
      const targetId = item.href.slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      onClick?.();
    }
  };

  if (isAnchorLink(item.href)) {
    return (
      <a
        href={item.href}
        className={className}
        aria-current={isActive ? 'page' : undefined}
        onClick={handleClick}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link
      to={item.href}
      className={className}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
    >
      {item.label}
    </Link>
  );
};

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      setIsMobileMenuOpen(false);
    }
  }, [location.pathname]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      role="banner"
      onKeyDown={handleKeyDown}
    >
      <div className="header__container container">
        <Link
          to="/"
          className="header__logo"
          aria-label="ExoStudies - Home"
        >
          <img
            src="/images/EXO.png"
            alt=""
            className="header__logo-image"
            aria-hidden="true"
            width="40"
            height="40"
          />
          <span className="header__logo-text">ExoStudies</span>
        </Link>

        <nav className="header__nav" role="navigation" aria-label="Main navigation">
          <ul className="header__nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                {renderNavLink({ item, location, isMobile: false, onClick: closeMobileMenu })}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <Link
            to="/courses"
            className="btn btn-secondary header__cta-secondary"
            aria-label="Explore our courses"
          >
            <BookOpen size={18} aria-hidden="true" />
            Explore Courses
          </Link>

          <Link
            to="/contact"
            className="btn btn-primary header__cta-primary"
            aria-label="Book a free demo class"
          >
            Book a Free Demo
          </Link>

          <button
            type="button"
            className="header__mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-hidden="false"
          >
            {isMobileMenuOpen ? (
              <X size={24} strokeWidth={2.5} aria-hidden="true" />
            ) : (
              <Menu size={24} strokeWidth={2.5} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
        onKeyDown={handleKeyDown}
      >
        <div className="header__mobile-menu-inner">
          <nav className="header__mobile-nav">
            <ul className="header__mobile-nav-list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  {renderNavLink({ item, location, isMobile: true, onClick: closeMobileMenu })}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__mobile-actions">
            <Link
              to="/courses"
              className="btn btn-secondary btn--full-width"
            >
              <BookOpen size={18} aria-hidden="true" />
              Explore Courses
            </Link>
            <Link
              to="/contact"
              className="btn btn-primary btn--full-width"
            >
              Book a Free Demo
            </Link>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="header__backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}