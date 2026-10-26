import { Link } from 'react-router-dom';
import { ArrowRight, Check, Users, BookOpen, Clock, Target, Award } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { getCourseBySlug, getCourseFaculty, type CourseDetail } from '../data/courses';
import './CourseDetailPage.css';

const JEEIllustration = lazy(() => import('../components/Illustrations3D/JEEIllustration').then(m => ({ default: m.JEEIllustration })));
const NEETIllustration = lazy(() => import('../components/Illustrations3D/NEETIllustration').then(m => ({ default: m.NEETIllustration })));
const HumanitiesIllustration = lazy(() => import('../components/Illustrations3D/HumanitiesIllustration').then(m => ({ default: m.HumanitiesIllustration })));
const FoundationIllustration = lazy(() => import('../components/Illustrations3D/FoundationIllustration').then(m => ({ default: m.FoundationIllustration })));
const PhysicsIllustration = lazy(() => import('../components/Illustrations3D/PhysicsIllustration').then(m => ({ default: m.PhysicsIllustration })));
const ChemistryIllustration = lazy(() => import('../components/Illustrations3D/ChemistryIllustration').then(m => ({ default: m.ChemistryIllustration })));

function CourseIllustration3D({ type }: { type: CourseDetail['illustrationType'] }) {
  const illustrations = {
    jee: <JEEIllustration />,
    neet: <NEETIllustration />,
    humanities: <HumanitiesIllustration />,
    foundation: <FoundationIllustration />,
    physics: <PhysicsIllustration />,
    chemistry: <ChemistryIllustration />,
  };

  return (
    <Suspense fallback={<div className="illustration-loading" aria-hidden="true" />}>
      {illustrations[type]}
    </Suspense>
  );
}

export function CourseDetailPage({ courseSlug }: { courseSlug: string }) {
  const course = getCourseBySlug(courseSlug);
  const faculty = course ? getCourseFaculty(course) : [];

  if (!course) {
    return (
      <div className="course-detail-page">
        <div className="container">
          <div className="course-detail__not-found">
            <h1>Course Not Found</h1>
            <p>The course you're looking for doesn't exist.</p>
            <Link to="/courses" className="btn btn-primary">
              <ArrowRight size={18} aria-hidden="true" />
              Back to Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      <section className="course-detail__hero" aria-labelledby="course-detail-title">
        <div className="course-detail__hero-background" aria-hidden="true">
          <div className="course-detail__gradient-orb course-detail__gradient-orb--1" />
          <div className="course-detail__gradient-orb course-detail__gradient-orb--2" />
          <div className="course-detail__pattern" />
        </div>

        <div className="course-detail__hero-container container">
          <div className="course-detail__hero-grid">
            <div className="course-detail__hero-content">
              <div className="course-detail__badge">
                <span className="course-detail__badge-dot" aria-hidden="true" />
                <span>{course.badge}</span>
              </div>

              <h1 id="course-detail-title" className="course-detail__title">
                {course.title}
              </h1>

              <p className="course-detail__description">
                {course.fullDescription}
              </p>

              <div className="course-detail__highlights">
                <div className="course-detail__highlight">
                  <Users size={20} aria-hidden="true" />
                  <span>{faculty.length} Expert Faculty</span>
                </div>
                <div className="course-detail__highlight">
                  <BookOpen size={20} aria-hidden="true" />
                  <span>{course.subjects.length} Subjects</span>
                </div>
                <div className="course-detail__highlight">
                  <Target size={20} aria-hidden="true" />
                  <span>Focused Preparation</span>
                </div>
              </div>

              <div className="course-detail__hero-cta">
                <Link to={course.ctaHref} className="btn btn-primary btn--lg">
                  {course.ctaText}
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>
                <Link to="/courses" className="btn btn-secondary btn--lg">
                  <ArrowRight size={20} aria-hidden="true" />
                  Back to All Courses
                </Link>
              </div>
            </div>

            <div className="course-detail__hero-visual" aria-hidden="true">
              <div className="course-detail__illustration">
                <CourseIllustration3D type={course.illustrationType} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="course-detail__subjects" aria-labelledby="subjects-heading">
        <div className="container">
          <div className="course-detail__section-header">
            <h2 id="subjects-heading" className="course-detail__section-title">Subjects Covered</h2>
            <p className="course-detail__section-subtitle">Comprehensive coverage of all essential topics</p>
          </div>

          <div className="course-detail__subjects-grid" role="list">
            {course.subjects.map((subject, index) => (
              <article key={subject} className="course-detail__subject-card card" role="listitem" style={{ animationDelay: `${index * 100}ms` }}>
                <Check className="course-detail__subject-icon" size={24} aria-hidden="true" />
                <h3 className="course-detail__subject-name">{subject}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="course-detail__features" aria-labelledby="features-heading">
        <div className="container">
          <div className="course-detail__section-header">
            <h2 id="features-heading" className="course-detail__section-title">Key Features</h2>
            <p className="course-detail__section-subtitle">Everything you need to succeed</p>
          </div>

          <div className="course-detail__features-grid" role="list">
            {course.keyFeatures.map((feature, index) => (
              <article key={feature} className="course-detail__feature-item card" role="listitem" style={{ animationDelay: `${index * 50}ms` }}>
                <Check className="course-detail__feature-icon" size={20} aria-hidden="true" />
                <span className="course-detail__feature-text">{feature}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="course-detail__teaching-approach" aria-labelledby="teaching-heading">
        <div className="container">
          <div className="course-detail__approach-card card card-elevated">
            <div className="course-detail__approach-icon" aria-hidden="true">
              <Award size={32} />
            </div>
            <h2 id="teaching-heading" className="course-detail__section-title">Our Teaching Approach</h2>
            <p className="course-detail__approach-text">{course.teachingApproach}</p>
          </div>
        </div>
      </section>

      {faculty.length > 0 && (
        <section className="course-detail__faculty" aria-labelledby="faculty-heading">
          <div className="container">
            <div className="course-detail__section-header">
              <h2 id="faculty-heading" className="course-detail__section-title">Expert Faculty</h2>
              <p className="course-detail__section-subtitle">Learn from experienced educators</p>
            </div>

            <div className="course-detail__faculty-grid" role="list">
              {faculty.map((member, index) => (
                <article key={member.id} className="course-detail__faculty-card card" role="listitem" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="course-detail__faculty-image">
                    <img
                      src={member.photoPath}
                      alt={member.photoAlt}
                      className="course-detail__faculty-photo"
                    />
                  </div>
                  <div className="course-detail__faculty-info">
                    <h3 className="course-detail__faculty-name">{member.name}</h3>
                    <p className="course-detail__faculty-title">{member.title}</p>
                    <p className="course-detail__faculty-subject">{member.subject}</p>

                    {member.qualifications.length > 0 && (
                      <div className="course-detail__faculty-qualifications">
                        <h4 className="course-detail__faculty-qual-label">Qualifications</h4>
                        <ul className="course-detail__qual-list">
                          {member.qualifications.map((qual, i) => (
                            <li key={i}><Check size={14} aria-hidden="true" /> {qual}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {member.experience && (
                      <div className="course-detail__faculty-experience">
                        <Clock size={16} aria-hidden="true" />
                        <span>{member.experience} Experience</span>
                      </div>
                    )}

                    {member.credentials.length > 0 && (
                      <div className="course-detail__faculty-credentials">
                        {member.credentials.map((cred, i) => (
                          <span key={i} className="badge badge-blue">{cred}</span>
                        ))}
                      </div>
                    )}

                    {member.additionalRoles.length > 0 && (
                      <div className="course-detail__faculty-roles">
                        <h4 className="course-detail__faculty-roles-label">Additional Roles</h4>
                        <ul className="course-detail__roles-list">
                          {member.additionalRoles.map((role, i) => (
                            <li key={i}><Check size={14} aria-hidden="true" /> {role}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Link
                      to="/faculty"
                      className="course-detail__faculty-link"
                    >
                      View Full Profile
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="course-detail__target-audience" aria-labelledby="audience-heading">
        <div className="container">
          <div className="course-detail__section-header">
            <h2 id="audience-heading" className="course-detail__section-title">Who Should Enroll</h2>
            <p className="course-detail__section-subtitle">This course is designed for</p>
          </div>

          <ul className="course-detail__audience-list" role="list">
            {course.targetAudience.map((audience, index) => (
              <li key={index} className="course-detail__audience-item">
                <Check size={20} aria-hidden="true" />
                <span>{audience}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="course-detail__cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="course-detail__cta-card card card-elevated">
            <h2 id="cta-heading" className="course-detail__cta-title">Ready to Start Your Journey?</h2>
            <p className="course-detail__cta-text">Book a free demo class and experience our teaching methodology firsthand.</p>
            <Link to={course.ctaHref} className="btn btn-primary btn--lg">
              {course.ctaText}
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}