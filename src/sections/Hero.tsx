import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Monitor, Heart } from 'lucide-react';
import './Hero.css';

const HERO_HIGHLIGHTS = [
  { icon: Users, label: 'Expert Faculty', description: 'Learn from experienced educators' },
  { icon: Target, label: 'Small Batches', description: 'Personalized attention for every student' },
  { icon: Monitor, label: 'Online Learning', description: 'Flexible classes from anywhere' },
  { icon: Heart, label: 'Personalized Attention', description: 'Doubt solving & progress tracking' },
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__background" aria-hidden="true">
        <div className="hero__gradient-orb hero__gradient-orb--1" />
        <div className="hero__gradient-orb hero__gradient-orb--2" />
        <div className="hero__pattern" />
      </div>

      <div className="hero__container container">
        <div className="hero__grid">
          <div className="hero__content">
            <div className="hero__badge animate-fade-in">
              <span className="hero__badge-dot" aria-hidden="true" />
              <span>Your Future. Our Focus.</span>
            </div>

            <h1 id="hero-heading" className="hero__title animate-slide-up stagger-1">
              Smarter Learning.<br />
              <span className="hero__title-accent">Brighter Futures.</span>
            </h1>

            <p className="hero__subtitle animate-slide-up stagger-2">
              At ExoStudies, we provide expert-led coaching for JEE, NEET, Humanities and Foundation
              courses — with personalized attention, small batches and modern learning methods to help
              you achieve your dreams.
            </p>

            <div className="hero__ctas animate-slide-up stagger-3">
              <Link
                to="/courses"
                className="btn btn-primary btn--lg hero__cta-primary"
              >
                Explore Courses
                <ArrowRight size={20} aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="btn btn-secondary btn--lg hero__cta-secondary"
              >
                Book a Free Demo
              </Link>
            </div>
          </div>

          <div className="hero__visual animate-scale-in stagger-4" aria-hidden="true">
            <div className="hero__illustration">
              <svg className="hero__illustration-svg" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Academic illustration with books, graduation cap, geometric shapes, formulas, atom and DNA">
                <defs>
                  <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--hero-electric-blue)" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="var(--hero-cyan)" stopOpacity="0.08" />
                  </linearGradient>
                  <linearGradient id="heroGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--hero-cyan)" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="var(--hero-electric-blue)" stopOpacity="0.06" />
                  </linearGradient>
                  <filter id="heroGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="heroGlowSoft" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <g className="hero__illustration-group">
                  <g className="hero__books-group">
                    <rect x="110" y="285" width="280" height="22" rx="2" fill="var(--hero-navy-2)" opacity="0.95" className="hero__book-cover" />
                    <rect x="115" y="263" width="270" height="22" rx="2" fill="var(--hero-navy-3)" opacity="0.9" className="hero__book-cover" />
                    <rect x="120" y="241" width="260" height="22" rx="2" fill="var(--hero-navy-4)" opacity="0.85" className="hero__book-cover" />
                    <rect x="125" y="219" width="250" height="22" rx="2" fill="var(--hero-navy-5)" opacity="0.8" className="hero__book-cover" />
                    <rect x="130" y="197" width="240" height="22" rx="2" fill="var(--hero-electric-blue)" opacity="0.25" className="hero__book-cover" />
                    <path d="M130 197 Q160 160 250 160 Q340 160 370 197" fill="var(--hero-electric-blue)" opacity="0.2" className="hero__book-top" />
                    <rect x="215" y="150" width="70" height="50" rx="3" fill="var(--hero-navy-2)" className="hero__cap-base" />
                    <path d="M210 170 Q250 130 290 170" fill="var(--hero-electric-blue)" className="hero__cap-top" />
                    <rect x="235" y="128" width="30" height="18" rx="1.5" fill="var(--hero-gold)" className="hero__cap-tassel" />
                  </g>

                  <g className="hero__triangle-group" filter="url(#heroGlowSoft)">
                    <path
                      className="hero__triangle-stroke"
                      d="M370 160 L445 310 L295 310 Z"
                      fill="none"
                      stroke="var(--hero-electric-blue)"
                      strokeWidth="2.5"
                      strokeDasharray="320"
                      strokeDashoffset="320"
                      opacity="0.9"
                    />
                    <path
                      className="hero__triangle-fill"
                      d="M370 160 L445 310 L295 310 Z"
                      fill="var(--hero-electric-blue)"
                      fillOpacity="0"
                    />
                    <text x="370" y="285" textAnchor="middle" fontSize="15" fontWeight="600" fill="var(--hero-electric-blue)" className="hero__triangle-label hero__triangle-angle">∠A = 60°</text>
                    <text x="435" y="300" textAnchor="middle" fontSize="13" fontWeight="500" fill="var(--hero-text-secondary)" className="hero__triangle-label hero__triangle-side">a = 10</text>
                    <text x="305" y="300" textAnchor="middle" fontSize="13" fontWeight="500" fill="var(--hero-text-secondary)" className="hero__triangle-label hero__triangle-side">b = 10</text>
                    <text x="370" y="150" textAnchor="middle" fontSize="13" fontWeight="500" fill="var(--hero-text-secondary)" className="hero__triangle-label hero__triangle-side">c = 10</text>
                  </g>

                  <g className="hero__formulas-group">
                    <text x="90" y="110" fontSize="17" fontFamily="var(--font-mono)" fill="var(--hero-electric-blue)" fontWeight="500" className="hero__formula hero__formula-1">sin²θ + cos²θ = 1</text>
                    <text x="70" y="80" fontSize="15" fontFamily="var(--font-mono)" fill="var(--hero-cyan)" fontWeight="500" className="hero__formula hero__formula-2">F = m·a</text>
                    <text x="410" y="90" fontSize="15" fontFamily="var(--font-mono)" fill="var(--hero-electric-blue)" fontWeight="500" className="hero__formula hero__formula-3">E = m·c²</text>
                    <text x="390" y="60" fontSize="13" fontFamily="var(--font-mono)" fill="var(--hero-cyan)" fontWeight="500" className="hero__formula hero__formula-4">P·V = n·R·T</text>
                    <text x="60" y="370" fontSize="14" fontFamily="var(--font-mono)" fill="var(--hero-electric-blue)" fontWeight="500" className="hero__formula hero__formula-5">a² + b² = c²</text>
                    <text x="380" y="380" fontSize="14" fontFamily="var(--font-mono)" fill="var(--hero-cyan)" fontWeight="500" className="hero__formula hero__formula-6">Δx·Δp ≥ ħ/2</text>
                  </g>

                  <g className="hero__atom-group" filter="url(#heroGlowSoft)">
                    <circle cx="130" cy="425" r="48" fill="none" stroke="var(--hero-electric-blue)" strokeWidth="1.5" strokeDasharray="6 6" className="hero__atom-orbit hero__atom-orbit-1" />
                    <circle cx="130" cy="425" r="33" fill="none" stroke="var(--hero-cyan)" strokeWidth="1.5" strokeDasharray="6 6" className="hero__atom-orbit hero__atom-orbit-2" />
                    <circle cx="130" cy="425" r="18" fill="none" stroke="var(--hero-electric-blue)" strokeWidth="1.5" strokeDasharray="6 6" className="hero__atom-orbit hero__atom-orbit-3" />
                    <circle cx="130" cy="425" r="9" fill="var(--hero-navy-2)" stroke="var(--hero-electric-blue)" strokeWidth="1.5" className="hero__atom-nucleus" />
                    <circle cx="130" cy="377" r="5.5" fill="var(--hero-electric-blue)" className="hero__atom-electron hero__atom-electron-1" />
                    <circle cx="160" cy="425" r="5.5" fill="var(--hero-cyan)" className="hero__atom-electron hero__atom-electron-2" />
                    <circle cx="100" cy="425" r="5.5" fill="var(--hero-electric-blue)" className="hero__atom-electron hero__atom-electron-3" />
                    <circle cx="130" cy="400" r="4.5" fill="var(--hero-cyan)" className="hero__atom-electron hero__atom-electron-4" />
                    <circle cx="150" cy="440" r="4.5" fill="var(--hero-electric-blue)" className="hero__atom-electron hero__atom-electron-5" />
                  </g>

                  <g className="hero__dna-group">
                    <path
                      className="hero__dna-strand hero__dna-strand-1"
                      d="M370 400 Q415 380 415 335 Q415 290 370 270 Q325 250 325 205 Q325 160 370 140 Q415 120 415 80"
                      fill="none"
                      stroke="var(--hero-electric-blue)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      className="hero__dna-strand hero__dna-strand-2"
                      d="M370 400 Q325 380 325 335 Q325 290 370 270 Q415 250 415 205 Q415 160 370 140 Q325 120 325 80"
                      fill="none"
                      stroke="var(--hero-cyan)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <g className="hero__dna-rungs">
                      <line x1="345" y1="390" x2="395" y2="390" stroke="var(--hero-cyan)" strokeWidth="2" className="hero__dna-rung" />
                      <line x1="345" y1="350" x2="395" y2="350" stroke="var(--hero-cyan)" strokeWidth="2" className="hero__dna-rung" />
                      <line x1="345" y1="310" x2="395" y2="310" stroke="var(--hero-cyan)" strokeWidth="2" className="hero__dna-rung" />
                      <line x1="345" y1="270" x2="395" y2="270" stroke="var(--hero-cyan)" strokeWidth="2" className="hero__dna-rung" />
                      <line x1="345" y1="230" x2="395" y2="230" stroke="var(--hero-cyan)" strokeWidth="2" className="hero__dna-rung" />
                      <line x1="345" y1="190" x2="395" y2="190" stroke="var(--hero-cyan)" strokeWidth="2" className="hero__dna-rung" />
                      <line x1="345" y1="150" x2="395" y2="150" stroke="var(--hero-cyan)" strokeWidth="2" className="hero__dna-rung" />
                    </g>
                  </g>

                  <g className="hero__doodles-group">
                    <circle cx="55" cy="55" r="20" fill="none" stroke="var(--hero-electric-blue)" strokeWidth="1.5" strokeDasharray="4 4" className="hero__doodle hero__doodle-circle" />
                    <polygon points="55,28 69,55 55,82 41,55" fill="none" stroke="var(--hero-cyan)" strokeWidth="1.5" className="hero__doodle hero__doodle-diamond" />
                    <path d="M415 45 L445 75" stroke="var(--hero-electric-blue)" strokeWidth="2" strokeLinecap="round" className="hero__doodle hero__doodle-arrow" />
                    <path d="M445 45 L415 75" stroke="var(--hero-electric-blue)" strokeWidth="2" strokeLinecap="round" className="hero__doodle hero__doodle-arrow" />
                    <text x="25" y="290" fontSize="26" fontFamily="var(--font-mono)" fill="var(--hero-electric-blue)" fontWeight="600" opacity="0.7" className="hero__doodle hero__doodle-pi">π</text>
                    <text x="455" y="290" fontSize="22" fontFamily="var(--font-mono)" fill="var(--hero-cyan)" fontWeight="600" opacity="0.7" className="hero__doodle hero__doodle-integral">∫</text>
                    <circle cx="25" cy="445" r="14" fill="none" stroke="var(--hero-cyan)" strokeWidth="1.5" strokeDasharray="3 3" className="hero__doodle hero__doodle-circle-2" />
                    <polygon points="465,445 479,472 451,472" fill="none" stroke="var(--hero-gold)" strokeWidth="1.5" className="hero__doodle hero__doodle-triangle" />
                    <path d="M35 415 Q52 398 70 415" fill="none" stroke="var(--hero-electric-blue)" strokeWidth="1.5" strokeDasharray="4 4" className="hero__doodle hero__doodle-wave" />
                    <text x="15" y="140" fontSize="20" fontFamily="var(--font-mono)" fill="var(--hero-cyan)" fontWeight="500" opacity="0.6" className="hero__doodle hero__doodle-sqrt">√</text>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="hero__highlights animate-slide-up stagger-5" role="list" aria-label="Key features">
          {HERO_HIGHLIGHTS.map((highlight, index) => (
            <div key={highlight.label} className="hero__highlight-item" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="hero__highlight-icon" aria-hidden="true">
                <highlight.icon size={22} strokeWidth={2} />
              </div>
              <div className="hero__highlight-text">
                <span className="hero__highlight-label">{highlight.label}</span>
                <span className="hero__highlight-desc">{highlight.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14" />
          <path d="M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}