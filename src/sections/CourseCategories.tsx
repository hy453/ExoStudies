import { Link } from 'react-router-dom';
import {
  Atom,
  FlaskConical,
  Users,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import './CourseCategories.css';

interface CourseCategory {
  id: string;
  title: string;
  description: string;
  subjects: string[];
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  href: string;
}

const COURSE_CATEGORIES: CourseCategory[] = [
  {
    id: 'jee',
    title: 'JEE Preparation',
    description: 'Comprehensive preparation for JEE Main & Advanced with expert faculty and structured curriculum.',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    icon: Atom,
    href: '/courses/jee',
  },
  {
    id: 'neet',
    title: 'NEET UG Preparation',
    description: 'Medical entrance preparation covering the complete NEET syllabus with focused practice.',
    subjects: ['Physics', 'Chemistry', 'Biology'],
    icon: FlaskConical,
    href: '/courses/neet',
  },
  {
    id: 'humanities',
    title: 'Humanities (Classes 11–12)',
    description: 'In-depth coverage of humanities subjects for board exams and CUET domain preparation.',
    subjects: ['History', 'Political Science', 'Psychology', 'Geography'],
    icon: Users,
    href: '/courses/humanities',
  },
  {
    id: 'foundation',
    title: 'Foundation Classes (9–10)',
    description: 'Strong conceptual foundation for Classes 9–10 with Olympiad and NTSE preparation.',
    subjects: ['Science', 'Mathematics', 'Social Studies'],
    icon: GraduationCap,
    href: '/courses/foundation',
  },
  {
    id: 'physics',
    title: 'Physics',
    description: 'Deep conceptual understanding of physical principles with extensive problem-solving practice.',
    subjects: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Modern Physics'],
    icon: Atom,
    href: '/courses/physics',
  },
  {
    id: 'chemistry',
    title: 'Chemistry',
    description: 'Physical, Organic, and Inorganic Chemistry with practical and experimental learning approach.',
    subjects: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry'],
    icon: FlaskConical,
    href: '/courses/chemistry',
  },
];

export function CourseCategories() {
  return (
    <section className="course-categories" aria-labelledby="course-categories-heading">
      <div className="course-categories__container container">
        <header className="course-categories__header">
          <h2 id="course-categories-heading" className="course-categories__title">
            Explore Our Course Categories
          </h2>
          <p className="course-categories__subtitle">
            Structured programs designed for every academic goal — from competitive
            entrance exams to school board excellence.
          </p>
        </header>

        <div className="course-categories__grid" role="list">
          {COURSE_CATEGORIES.map((category, index) => (
            <article
              key={category.id}
              className="course-categories__card card"
              role="listitem"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="course-categories__icon" aria-hidden="true">
                <category.icon size={28} strokeWidth={2} />
              </div>

              <div className="course-categories__content">
                <h3 className="course-categories__card-title">{category.title}</h3>
                <p className="course-categories__card-desc">{category.description}</p>

                <ul className="course-categories__subjects" aria-label="Subjects covered">
                  {category.subjects.map((subject) => (
                    <li key={subject}>
                      <span className="course-categories__subject-tag">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={category.href}
                className="course-categories__link"
                aria-label={`Explore ${category.title}`}
              >
                <span>Explore Courses</span>
                <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <div className="course-categories__cta">
          <Link to="/courses" className="btn btn-secondary btn--lg">
            View All Courses
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}