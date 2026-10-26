import { Link } from 'react-router-dom';
import {
  Search,
  Calendar,
  BookOpen,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import './HowItWorks.css';

interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  iconBg: string;
  iconColor: string;
  details: string[];
}

const STEPS: Step[] = [
  {
    id: 'choose-course',
    number: '01',
    title: 'Choose Your Course',
    description: 'Browse our comprehensive course catalog and select the program that matches your goals.',
    icon: Search,
    iconBg: 'var(--color-blue-100)',
    iconColor: 'var(--color-blue-600)',
    details: [
      'Filter by exam: JEE, NEET, CUET, Boards',
      'View detailed curriculum and faculty',
      'Check schedules and batch timings',
      'Read course outcomes and prerequisites',
    ],
  },
  {
    id: 'book-demo',
    number: '02',
    title: 'Book a Free Demo',
    description: 'Experience our teaching methodology firsthand with a complimentary demo session or counselling.',
    icon: Calendar,
    iconBg: 'var(--color-emerald-100)',
    iconColor: 'var(--color-emerald-500)',
    details: [
      'Attend a live class with expert faculty',
      'Interact and ask questions in real-time',
      'Get personalized course recommendation',
      'No obligation — completely free',
    ],
  },
  {
    id: 'learn-structured',
    number: '03',
    title: 'Learn with Structure',
    description: 'Follow a structured learning path with live classes, recorded sessions, and comprehensive practice.',
    icon: BookOpen,
    iconBg: 'var(--color-violet-100)',
    iconColor: 'var(--color-violet-500)',
    details: [
      'Daily live classes with schedule',
      'Access recordings anytime for revision',
      'Download PDF notes and study material',
      'Solve DPPs and chapter-wise tests',
    ],
  },
  {
    id: 'track-progress',
    number: '04',
    title: 'Track Progress & Clear Doubts',
    description: 'Monitor your improvement with detailed analytics and get doubts resolved in dedicated sessions.',
    icon: TrendingUp,
    iconBg: 'var(--color-amber-100)',
    iconColor: 'var(--color-amber-500)',
    details: [
      'Weekly progress reports and analytics',
      'Identify strengths and weak areas',
      'Attend doubt-solving sessions',
      'Adjust study plan based on performance',
    ],
  },
];

export function HowItWorks() {
  return (
    <section className="how-it-works" aria-labelledby="how-it-works-heading">
      <div className="how-it-works__container container">
        <header className="how-it-works__header">
          <h2 id="how-it-works-heading" className="how-it-works__title">
            How It Works
          </h2>
          <p className="how-it-works__subtitle">
            Your learning journey in four simple steps. From discovery to mastery,
            we guide you at every stage.
          </p>
        </header>

        <div className="how-it-works__steps" role="list">
          {STEPS.map((step, index) => (
            <article
              key={step.id}
              className="how-it-works__step"
              role="listitem"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="how-it-works__step-number" aria-hidden="true">
                {step.number}
              </div>

              <div
                className="how-it-works__icon"
                style={{ backgroundColor: step.iconBg, color: step.iconColor }}
                aria-hidden="true"
              >
                <step.icon size={28} strokeWidth={2} />
              </div>

              <h3 className="how-it-works__step-title">{step.title}</h3>
              <p className="how-it-works__step-desc">{step.description}</p>

              <ul className="how-it-works__details" aria-label={`${step.title} details`}>
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="how-it-works__detail">
                    <CheckCircle2 size={16} strokeWidth={2.5} aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="how-it-works__connector" aria-hidden="true" />

        <div className="how-it-works__cta">
          <Link to="/contact" className="btn btn-primary btn--lg">
            Start Your Journey
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
          <p className="how-it-works__cta-note">
            Book a free demo class or counselling session to begin
          </p>
        </div>
      </div>
    </section>
  );
}