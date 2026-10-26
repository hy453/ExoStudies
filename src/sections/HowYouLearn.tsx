import { BookOpen, Users, Target, Zap, Lightbulb, CheckCircle } from 'lucide-react';
import './HowYouLearn.css';

interface LearningFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
}

const LEARNING_FEATURES: LearningFeature[] = [
  {
    id: 'concept-building',
    title: 'Concept Building',
    description: 'Placeholder for concept-focused teaching approach.',
    icon: Lightbulb,
  },
  {
    id: 'expert-faculty',
    title: 'Expert Faculty',
    description: 'Placeholder for experienced faculty guidance.',
    icon: Users,
  },
  {
    id: 'personalized-attention',
    title: 'Personalized Attention',
    description: 'Placeholder for individual student support.',
    icon: Target,
  },
  {
    id: 'structured-practice',
    title: 'Structured Practice',
    description: 'Placeholder for systematic problem-solving practice.',
    icon: BookOpen,
  },
  {
    id: 'progress-tracking',
    title: 'Progress Tracking',
    description: 'Placeholder for continuous assessment and feedback.',
    icon: CheckCircle,
  },
  {
    id: 'modern-methods',
    title: 'Modern Learning Methods',
    description: 'Placeholder for technology-enhanced learning.',
    icon: Zap,
  },
];

export function HowYouLearn() {
  return (
    <section className="how-you-learn" aria-labelledby="how-you-learn-heading">
      <div className="how-you-learn__container container">
        <header className="how-you-learn__header">
          <h2 id="how-you-learn-heading" className="how-you-learn__title">
            How You'll Learn at ExoStudies
          </h2>
          <p className="how-you-learn__subtitle">
            Discover a learning experience designed to build strong concepts, boost confidence,
            and help you achieve your academic goals.
          </p>
        </header>

        <div className="how-you-learn__grid" role="list">
          {LEARNING_FEATURES.map((feature, index) => (
            <article
              key={feature.id}
              className="how-you-learn__card card"
              role="listitem"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="how-you-learn__icon-wrapper">
                <div className="how-you-learn__icon" aria-hidden="true">
                  <feature.icon size={24} strokeWidth={2} />
                </div>
              </div>

              <h3 className="how-you-learn__card-title">{feature.title}</h3>
              <p className="how-you-learn__card-desc">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}