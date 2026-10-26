import { Link } from 'react-router-dom';
import { Calendar, Video, UserCheck, Sparkles, ArrowRight } from 'lucide-react';
import './FreeDemoCTA.css';

interface DemoBenefit {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  description: string;
}

const DEMO_BENEFITS: DemoBenefit[] = [
  {
    icon: Calendar,
    title: 'Live Demo Class',
    description: 'Attend a real class with our expert faculty and experience our teaching methodology.',
  },
  {
    icon: Video,
    title: 'Counselling Session',
    description: 'Get personalized guidance on course selection and preparation strategy.',
  },
  {
    icon: UserCheck,
    title: 'No Obligation',
    description: 'Completely free with no commitment. Experience before you decide.',
  },
  {
    icon: Sparkles,
    title: 'Instant Access',
    description: 'Receive demo class recording and sample study material immediately.',
  },
];

export function FreeDemoCTA() {
  return (
    <section className="free-demo-cta" aria-labelledby="free-demo-heading">
      <div className="free-demo-cta__background" aria-hidden="true">
        <div className="free-demo-cta__gradient" />
        <div className="free-demo-cta__pattern" />
      </div>

      <div className="free-demo-cta__container container">
        <div className="free-demo-cta__grid">
          <div className="free-demo-cta__content">
            <div className="free-demo-cta__badge">
              <span className="free-demo-cta__badge-dot" aria-hidden="true" />
              <span>Complimentary Session</span>
            </div>

            <h2 id="free-demo-heading" className="free-demo-cta__title">
              Book Your Free Demo Class
            </h2>

            <p className="free-demo-cta__subtitle">
              Experience the ExoStudies difference with a complimentary live class
              or personalized counselling session. No commitment required.
            </p>

            <ul className="free-demo-cta__benefits" role="list">
              {DEMO_BENEFITS.map((benefit, index) => (
                <li key={benefit.title} className="free-demo-cta__benefit" style={{ animationDelay: `${index * 100}ms` }}>
                  <div
                    className="free-demo-cta__benefit-icon"
                    aria-hidden="true"
                  >
                    <benefit.icon size={20} strokeWidth={2} />
                  </div>
                  <div className="free-demo-cta__benefit-text">
                    <span className="free-demo-cta__benefit-title">{benefit.title}</span>
                    <span className="free-demo-cta__benefit-desc">{benefit.description}</span>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="btn btn-primary btn--lg free-demo-cta__btn"
            >
              Book Free Demo Now
              <ArrowRight size={20} aria-hidden="true" />
            </Link>

            <p className="free-demo-cta__disclaimer">
              This is a demo form. Submissions are not sent to any backend.
              A backend integration would be required for production use.
            </p>
          </div>

          <div className="free-demo-cta__visual" aria-hidden="true">
            <div className="free-demo-cta__card-stack">
              <div className="free-demo-cta__card free-demo-cta__card--1 card">
                <div className="free-demo-cta__card-icon" style={{ backgroundColor: 'var(--color-blue-100)', color: 'var(--color-blue-600)' }}>
                  <Video size={28} strokeWidth={2} />
                </div>
                <div className="free-demo-cta__card-content">
                  <h3 className="free-demo-cta__card-title">Live Interactive Class</h3>
                  <p className="free-demo-cta__card-desc">60-minute session with expert faculty</p>
                </div>
              </div>

              <div className="free-demo-cta__card free-demo-cta__card--2 card">
                <div className="free-demo-cta__card-icon" style={{ backgroundColor: 'var(--color-emerald-100)', color: 'var(--color-emerald-500)' }}>
                  <Calendar size={28} strokeWidth={2} />
                </div>
                <div className="free-demo-cta__card-content">
                  <h3 className="free-demo-cta__card-title">Personalised Counselling</h3>
                  <p className="free-demo-cta__card-desc">30-minute guidance session</p>
                </div>
              </div>

              <div className="free-demo-cta__card free-demo-cta__card--3 card">
                <div className="free-demo-cta__card-icon" style={{ backgroundColor: 'var(--color-violet-100)', color: 'var(--color-violet-500)' }}>
                  <Sparkles size={28} strokeWidth={2} />
                </div>
                <div className="free-demo-cta__card-content">
                  <h3 className="free-demo-cta__card-title">Study Material Access</h3>
                  <p className="free-demo-cta__card-desc">Sample notes & practice questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}