import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Award, BookOpen, Users, Star, Target, CheckCircle2 } from 'lucide-react';
import { FACULTY_PROFILES } from '../data/faculty';
import './FacultyPage.css';

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function FacultyPhoto({ photoPath, photoAlt, name }: { photoPath: string; photoAlt: string; name: string }) {
  const [imgError, setImgError] = React.useState(false);

  if (imgError) {
    return (
      <div className="faculty-page__photo-placeholder" aria-hidden="true">
        <span className="faculty-page__initials">{getInitials(name)}</span>
      </div>
    );
  }

  return (
    <img
      src={photoPath}
      alt={photoAlt}
      className="faculty-page__photo"
      onError={() => setImgError(true)}
      loading="lazy"
    />
  );
}

function FacultyProfileCard({ profile }: { profile: typeof FACULTY_PROFILES[0] }) {
  return (
    <article className="faculty-page__profile card">
      <div className="faculty-page__profile-header">
        <div className="faculty-page__photo-wrapper">
          <FacultyPhoto photoPath={profile.photoPath} photoAlt={profile.photoAlt} name={profile.name} />
        </div>
        <div className="faculty-page__profile-meta">
          <h2 className="faculty-page__name">{profile.name}</h2>
          <p className="faculty-page__title">{profile.title}</p>
          <p className="faculty-page__subject">{profile.subject}</p>
        </div>
      </div>

      <div className="faculty-page__profile-body">
        <div className="faculty-page__section">
          <h3 className="faculty-page__section-title">
            <GraduationCap size={18} aria-hidden="true" />
            Qualifications
          </h3>
          <ul className="faculty-page__qualifications" role="list">
            {profile.qualifications.map((qual, idx) => (
              <li key={idx} className="faculty-page__qualification">
                <CheckCircle2 size={16} aria-hidden="true" />
                <span>{qual}</span>
              </li>
            ))}
          </ul>
        </div>

        {profile.experience && (
          <div className="faculty-page__section">
            <h3 className="faculty-page__section-title">
              <Award size={18} aria-hidden="true" />
              Experience
            </h3>
            <p className="faculty-page__experience">{profile.experience}</p>
          </div>
        )}

        {profile.credentials.length > 0 && (
          <div className="faculty-page__section">
            <h3 className="faculty-page__section-title">
              <Star size={18} aria-hidden="true" />
              Credentials
            </h3>
            <ul className="faculty-page__credentials" role="list">
              {profile.credentials.map((cred, idx) => (
                <li key={idx} className="faculty-page__credential">
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>{cred}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {profile.additionalRoles.length > 0 && (
          <div className="faculty-page__section">
            <h3 className="faculty-page__section-title">
              <Users size={18} aria-hidden="true" />
              Additional Roles
            </h3>
            <ul className="faculty-page__additional-roles" role="list">
              {profile.additionalRoles.map((role, idx) => (
                <li key={idx} className="faculty-page__additional-role">
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="faculty-page__section">
          <h3 className="faculty-page__section-title">
            <BookOpen size={18} aria-hidden="true" />
            Teaching Approach
          </h3>
          <p className="faculty-page__teaching-approach">{profile.teachingApproach}</p>
        </div>

        <div className="faculty-page__section">
          <h3 className="faculty-page__section-title">
            <Target size={18} aria-hidden="true" />
            Background
          </h3>
          <p className="faculty-page__background">{profile.background}</p>
        </div>
      </div>
    </article>
  );
}

export function FacultyPage() {
  return (
    <div className="faculty-page">
      <header className="faculty-page__hero">
        <div className="faculty-page__hero-bg" aria-hidden="true">
          <div className="faculty-page__gradient-orb" />
        </div>
        <div className="container">
          <div className="faculty-page__hero-content">
            <span className="faculty-page__badge">
              <GraduationCap size={16} aria-hidden="true" />
              Our Teaching Team
            </span>
            <h1 className="faculty-page__main-title">Meet Our Faculty</h1>
            <p className="faculty-page__hero-subtitle">
              Expert educators with deep subject knowledge and a passion for teaching.
              Our faculty combines academic excellence with real-world experience to guide
              every student towards their goals.
            </p>
          </div>
        </div>
      </header>

      <main className="faculty-page__main">
        <div className="container">
          <div className="faculty-page__intro">
            <h2 className="faculty-page__intro-title">Expert Guidance for Every Journey</h2>
            <p className="faculty-page__intro-text">
              At ExoStudies, we believe that the right mentor can transform a student's
              academic trajectory. Our faculty members bring together prestigious academic
              credentials, competitive exam success, and years of classroom experience.
              Each teacher is selected not just for their qualifications, but for their
              ability to make complex concepts accessible and inspire confidence in every learner.
            </p>
          </div>

          <div className="faculty-page__profiles" role="list">
            {FACULTY_PROFILES.map((profile) => (
              <FacultyProfileCard
                key={profile.id}
                profile={profile}
              />
            ))}
          </div>

          <div className="faculty-page__cta">
            <Link to="/contact" className="btn btn-primary btn--lg">
              Book a Free Demo
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <p className="faculty-page__cta-note">
              Experience our teaching methodology firsthand with a complimentary session
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}