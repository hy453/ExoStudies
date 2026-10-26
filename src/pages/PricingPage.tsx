import { User, ArrowRight, Check } from 'lucide-react';
import { FACULTY_PROFILES } from '../data/faculty';
import './PricingPage.css';

interface PricingCard {
  id: string;
  category: string;
  title: string;
  price: number;
  description: string;
  features: string[];
  teacherIds: string[];
  ctaText: string;
}

const PRICING_CARDS: PricingCard[] = [
  {
    id: 'jee-target',
    category: 'ENTRANCE PREPARATION',
    title: 'JEE Target & Integrated Batches',
    price: 6000,
    description: 'Structured Physics, Chemistry and Mathematics preparation for JEE-oriented learners.',
    features: [
      'Maximum 10 students per batch',
      'Weekly assignments and recorded classes',
      'Doubt support and study materials',
      'Performance tracking and monthly reports',
    ],
    teacherIds: ['ankit-sir', 'anmol-maam', 'ashish-sir'],
    ctaText: 'Ask about enrolment',
  },
  {
    id: 'neet-target',
    category: 'ENTRANCE PREPARATION',
    title: 'NEET Target & Integrated Batches',
    price: 6000,
    description: 'Medical-entrance preparation covering Physics, Chemistry and Biology.',
    features: [
      'Maximum 10 students per batch',
      'Weekly assignments and recorded classes',
      'Doubt support and study materials',
      'Performance tracking and monthly reports',
    ],
    teacherIds: ['ankit-sir', 'arvind-sir', 'ashish-sir'],
    ctaText: 'Ask about enrolment',
  },
  {
    id: 'foundation',
    category: 'SCHOOL FOUNDATION',
    title: 'Foundation Batch',
    price: 4500,
    description: 'Academic foundation classes for Class 9 and 10, including Science, Mathematics and Social Studies.',
    features: [
      'Maximum 10 students per batch',
      'Weekly assignments and recorded classes',
      'Doubt support and study materials',
      'Performance tracking and monthly reports',
    ],
    teacherIds: ['arvind-sir', 'soniya-maam'],
    ctaText: 'Ask about enrolment',
  },
  {
    id: 'upsc-foundation',
    category: 'HUMANITIES PATHWAY',
    title: 'UPSC Foundation & CBSE Programme',
    price: 4500,
    description: 'Support for humanities-related CBSE learning and UPSC foundation study.',
    features: [
      'Maximum 10 students per batch',
      'Weekly assignments and recorded classes',
      'Doubt support and study materials',
      'Performance tracking and monthly reports',
    ],
    teacherIds: ['arjun-sir'],
    ctaText: 'Ask about enrolment',
  },
];

const WHATSAPP_NUMBER = '918398990913';

const getTeacherNames = (teacherIds: string[]): string => {
  const teachers = teacherIds
    .map(id => FACULTY_PROFILES.find(f => f.id === id)?.name)
    .filter((name): name is string => name !== undefined);
  return teachers.join(', ');
};

const buildWhatsAppMessage = (card: PricingCard): string => {
  const lines = [
    `Hello ExoStudies! I'm interested in the ${card.title}.`,
    '',
    `Batch: ${card.title}`,
    `Price: ₹${card.price.toLocaleString()}`,
    `Category: ${card.category}`,
  ];

  const teacherNames = getTeacherNames(card.teacherIds);
  if (teacherNames) {
    lines.push(`Teachers: ${teacherNames}`);
  }

  lines.push('', 'Please provide more details about enrolment.');

  return lines.join('\n');
};

const openWhatsApp = (card: PricingCard) => {
  const message = buildWhatsAppMessage(card);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};

export function PricingPage() {
  return (
    <div className="pricing-page">
      <header className="pricing-page__hero">
        <div className="pricing-page__hero-bg" aria-hidden="true">
          <div className="pricing-page__gradient-orb" />
        </div>
        <div className="container">
          <div className="pricing-page__hero-content">
            <h1 className="pricing-page__main-title">Simple, Transparent Pricing</h1>
            <p className="pricing-page__subtitle">
              Choose the batch that fits your goals. All batches are limited to 10 students
              for personalised attention and include weekly assignments, recorded classes,
              doubt support, and monthly progress reports.
            </p>
          </div>
        </div>
      </header>

      <main className="pricing-page__main">
        <div className="container">
          <div className="pricing-page__grid" role="list">
            {PRICING_CARDS.map((card, index) => (
              <article
                key={card.id}
                className="pricing-page__card card"
                role="listitem"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="pricing-page__card-header">
                  <span className="pricing-page__category">{card.category}</span>
                  <div className="pricing-page__price">
                    <span className="pricing-page__currency">₹</span>
                    <span className="pricing-page__amount">{card.price.toLocaleString()}</span>
                  </div>
                </div>

                <h3 className="pricing-page__card-title">{card.title}</h3>
                <p className="pricing-page__card-description">{card.description}</p>

                <ul className="pricing-page__features" role="list">
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="pricing-page__feature">
                      <Check size={18} aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {card.teacherIds.length > 0 && (
                  <div className="pricing-page__teachers">
                    <h4 className="pricing-page__teachers-title">Faculty for this batch</h4>
                    <div className="pricing-page__teachers-list">
                      {card.teacherIds
                        .map(id => FACULTY_PROFILES.find(f => f.id === id))
                        .filter((t): t is typeof FACULTY_PROFILES[0] => t !== undefined)
                        .map(teacher => (
                          <div key={teacher.id} className="pricing-page__teacher">
                            <div className="pricing-page__teacher-avatar" aria-hidden="true">
                              <User size={20} />
                            </div>
                            <div className="pricing-page__teacher-info">
                              <span className="pricing-page__teacher-name">{teacher.name}</span>
                              <span className="pricing-page__teacher-subject">{teacher.subject}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  className="btn btn-primary btn--full-width pricing-page__cta"
                  onClick={() => openWhatsApp(card)}
                >
                  <ArrowRight size={18} aria-hidden="true" />
                  {card.ctaText}
                </button>
              </article>
            ))}
          </div>

          <p className="pricing-page__note">
            All prices are per month. No hidden fees. Batch timings are shared upon enquiry.
          </p>
        </div>
      </main>
    </div>
  );
}