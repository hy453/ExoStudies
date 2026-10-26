import { User, ArrowRight, Check } from 'lucide-react';
import { FACULTY_PROFILES } from '../data/faculty';
import './Pricing.css';

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

export function Pricing() {
  return (
    <section id="pricing" className="pricing" aria-labelledby="pricing-heading">
      <div className="pricing__container container">
        <header className="pricing__header">
          <h2 id="pricing-heading" className="pricing__title">
            Simple, Transparent Pricing
          </h2>
          <p className="pricing__subtitle">
            Choose the batch that fits your goals. All batches are limited to 10 students
            for personalised attention and include weekly assignments, recorded classes,
            doubt support, and monthly progress reports.
          </p>
        </header>

        <div className="pricing__grid" role="list">
          {PRICING_CARDS.map((card, index) => (
            <article
              key={card.id}
              className="pricing__card card"
              role="listitem"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="pricing__card-header">
                <span className="pricing__category">{card.category}</span>
                <div className="pricing__price">
                  <span className="pricing__currency">₹</span>
                  <span className="pricing__amount">{card.price.toLocaleString()}</span>
                </div>
              </div>

              <h3 className="pricing__card-title">{card.title}</h3>
              <p className="pricing__card-description">{card.description}</p>

              <ul className="pricing__features" role="list">
                {card.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="pricing__feature">
                    <Check size={18} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {card.teacherIds.length > 0 && (
                <div className="pricing__teachers">
                  <h4 className="pricing__teachers-title">Faculty for this batch</h4>
                  <div className="pricing__teachers-list">
                    {card.teacherIds
                      .map(id => FACULTY_PROFILES.find(f => f.id === id))
                      .filter((t): t is typeof FACULTY_PROFILES[0] => t !== undefined)
                      .map(teacher => (
                        <div key={teacher.id} className="pricing__teacher">
                          <div className="pricing__teacher-avatar" aria-hidden="true">
                            <User size={20} />
                          </div>
                          <div className="pricing__teacher-info">
                            <span className="pricing__teacher-name">{teacher.name}</span>
                            <span className="pricing__teacher-subject">{teacher.subject}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              <button
                type="button"
                className="btn btn-primary btn--full-width pricing__cta"
                onClick={() => openWhatsApp(card)}
              >
                <ArrowRight size={18} aria-hidden="true" />
                {card.ctaText}
              </button>
            </article>
          ))}
        </div>

        <p className="pricing__note">
          All prices are per month. No hidden fees. Batch timings are shared upon enquiry.
        </p>
      </div>
    </section>
  );
}