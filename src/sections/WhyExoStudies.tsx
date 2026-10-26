import {
  Coins,
  Users,
  BookOpen,
  GraduationCap,
  Globe,
  FileText,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import './WhyExoStudies.css';

interface ComparisonPoint {
  id: string;
  title: string;
  averageTeacher: string;
  exostudies: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
}

const COMPARISONS: ComparisonPoint[] = [
  {
    id: 'affordable-learning',
    title: 'Affordable Learning',
    averageTeacher: 'A normal tuition teacher charges 1000–3000 Rs per subject, plus commuting time and cost.',
    exostudies: 'Affordable online learning with no commuting cost.',
    icon: Coins,
  },
  {
    id: 'small-class-sizes',
    title: 'Small Class Sizes',
    averageTeacher: 'Batch size can vary and may be large. One teacher tackling 20–30 students of different batches all at the same time.',
    exostudies: 'At ExoStudies, we have a maximum limit of 10 students per class at a given time. Our One on One classes offer all one teacher to one student.',
    icon: Users,
  },
  {
    id: 'structured-learning',
    title: 'Structured Learning',
    averageTeacher: 'Often dependent on individual teacher and locally available resources.',
    exostudies: 'Structured platform with organized courses and learning support.',
    icon: BookOpen,
  },
  {
    id: 'subject-experts',
    title: 'Subject Experts',
    averageTeacher: 'Usually limited to teachers available locally.',
    exostudies: 'Every subject is covered by different In House Experts, making the learning process much easier.',
    icon: GraduationCap,
  },
  {
    id: 'learn-anywhere',
    title: 'Learn Anywhere',
    averageTeacher: 'Sometimes good teachers are not available locally and even if they are, availability is always a question.',
    exostudies: 'Learn from anywhere, anytime, with online access.',
    icon: Globe,
  },
  {
    id: 'digital-study-material',
    title: 'Digital Study Material',
    averageTeacher: 'Often dependent on limited classroom notes and textbooks, in the long term this can be a hindrance in learning.',
    exostudies: 'Digital notes, practice material and technology-enabled learning.',
    icon: FileText,
  },
];

export function WhyExoStudies() {
  return (
    <section id="why-exostudies" className="why-exostudies" aria-labelledby="why-exostudies-heading">
      <div className="why-exostudies__container container">
        <header className="why-exostudies__header">
          <h2 id="why-exostudies-heading" className="why-exostudies__title">
            Why ExoStudies?
          </h2>
          <p className="why-exostudies__subtitle">
            See how ExoStudies compares to traditional tuition and why thousands of students choose us for their academic journey.
          </p>
        </header>

        <div className="why-exostudies__comparison" role="list">
          {COMPARISONS.map((comparison, index) => (
            <article
              key={comparison.id}
              className="why-exostudies__comparison-card card"
              role="listitem"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="why-exostudies__comparison-header">
                <div className="why-exostudies__icon-wrapper" aria-hidden="true">
                  <div className="why-exostudies__icon">
                    <comparison.icon size={24} strokeWidth={2} />
                  </div>
                </div>
                <h3 className="why-exostudies__comparison-title">{comparison.title}</h3>
              </div>

              <div className="why-exostudies__comparison-content">
                <div className="why-exostudies__column why-exostudies__column--average">
                  <div className="why-exostudies__column-header">
                    <span className="why-exostudies__column-badge why-exostudies__column-badge--average">
                      Average Tuition Teacher
                    </span>
                    <XCircle size={18} strokeWidth={2} aria-hidden="true" className="why-exostudies__column-icon" />
                  </div>
                  <p className="why-exostudies__column-text">{comparison.averageTeacher}</p>
                </div>

                <div className="why-exostudies__column why-exostudies__column--exostudies">
                  <div className="why-exostudies__column-header">
                    <span className="why-exostudies__column-badge why-exostudies__column-badge--exostudies">
                      ExoStudies
                    </span>
                    <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" className="why-exostudies__column-icon" />
                  </div>
                  <p className="why-exostudies__column-text">{comparison.exostudies}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}