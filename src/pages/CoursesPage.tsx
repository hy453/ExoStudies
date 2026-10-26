import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { COURSE_DETAILS, type CourseDetail } from '../data/courses';
import './CoursesPage.css';

const JEEIllustration = lazy(() => import('../components/Illustrations3D/JEEIllustration').then(m => ({ default: m.JEEIllustration })));
const NEETIllustration = lazy(() => import('../components/Illustrations3D/NEETIllustration').then(m => ({ default: m.NEETIllustration })));
const HumanitiesIllustration = lazy(() => import('../components/Illustrations3D/HumanitiesIllustration').then(m => ({ default: m.HumanitiesIllustration })));
const FoundationIllustration = lazy(() => import('../components/Illustrations3D/FoundationIllustration').then(m => ({ default: m.FoundationIllustration })));
const PhysicsIllustration = lazy(() => import('../components/Illustrations3D/PhysicsIllustration').then(m => ({ default: m.PhysicsIllustration })));
const ChemistryIllustration = lazy(() => import('../components/Illustrations3D/ChemistryIllustration').then(m => ({ default: m.ChemistryIllustration })));
const CoursesHeroLogo = lazy(() => import('../components/Illustrations3D/CoursesHeroLogo').then(m => ({ default: m.CoursesHeroLogo })));

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

function HeroIllustration3D() {
  return (
    <Suspense fallback={<div className="illustration-loading" aria-hidden="true" />}>
      <CoursesHeroLogo />
    </Suspense>
  );
}

export function CoursesPage() {
  return (
    <>
      <section className="courses-hero" aria-labelledby="courses-hero-heading">
        <div className="courses-hero__background" aria-hidden="true">
          <div className="courses-hero__gradient-orb courses-hero__gradient-orb--1" />
          <div className="courses-hero__gradient-orb courses-hero__gradient-orb--2" />
          <div className="courses-hero__pattern" />
        </div>

        <div className="courses-hero__container container">
          <div className="courses-hero__grid">
            <div className="courses-hero__content">
              <div className="courses-hero__badge animate-fade-in">
                <span className="courses-hero__badge-dot" aria-hidden="true" />
                <span>Your Future. Our Focus.</span>
              </div>

              <h1 id="courses-hero-heading" className="courses-hero__title animate-slide-up stagger-1">
                Explore Our Courses
              </h1>

              <p className="courses-hero__subtitle animate-slide-up stagger-2">
                Discover specialized courses designed to help you build strong concepts, develop confidence,
                and move toward your academic goals.
              </p>
            </div>

            <div className="courses-hero__visual animate-scale-in stagger-3" aria-hidden="true">
              <div className="courses-hero__illustration">
                <HeroIllustration3D />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="courses-intro" aria-labelledby="courses-intro-heading">
        <div className="container">
          <header className="courses-intro__header">
            <div className="courses-intro__badge animate-fade-in">
              <span>OUR COURSES</span>
            </div>
            <h2 id="courses-intro-heading" className="courses-intro__title animate-slide-up stagger-1">
              Courses for Every <span className="courses-intro__highlight">Dream</span>
            </h2>
            <p className="courses-intro__subtitle animate-slide-up stagger-2">
              Whether you're aiming for JEE, NEET, or exploring your interests, we've got the right course for you.
            </p>
            <p className="courses-intro__motto animate-slide-up stagger-3">
              Learn • Focus • Grow
            </p>
          </header>

          <div className="courses-intro__grid" role="list">
            {COURSE_DETAILS.map((course, index) => (
              <article
                key={course.id}
                className="courses-intro__card card animate-slide-up"
                role="listitem"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="courses-intro__illustration" aria-hidden="true">
                  <CourseIllustration3D type={course.illustrationType} />
                </div>

                <div className="courses-intro__content">
                  <span className="courses-intro__card-badge">{course.badge}</span>
                  <h3 className="courses-intro__card-title">{course.shortTitle}</h3>
                  <p className="courses-intro__card-desc">{course.description}</p>
                </div>

                <Link
                  to={`/courses/${course.slug}`}
                  className="courses-intro__card-link"
                  aria-label={`Learn more about ${course.title}`}
                >
                  <span>Learn More</span>
                  <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}