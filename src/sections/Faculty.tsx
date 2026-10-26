import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';
import { FACULTY_PROFILES } from '../data/faculty';
import './Faculty.css';

const PREVIEW_FACULTY = FACULTY_PROFILES.slice(0, 4);

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function FacultyPhotoPreview({ photoPath, photoAlt, name }: { photoPath: string; photoAlt: string; name: string }) {
  const [imgError, setImgError] = React.useState(false);

  if (imgError) {
    return (
      <div className="faculty__avatar-placeholder" aria-hidden="true">
        <span className="faculty__initials">{getInitials(name)}</span>
      </div>
    );
  }

  return (
    <img
      src={photoPath}
      alt={photoAlt}
      className="faculty__avatar-img"
      onError={() => setImgError(true)}
      loading="lazy"
    />
  );
}

export function Faculty() {
  return (
    <section className="faculty" aria-labelledby="faculty-heading">
      <div className="faculty__container container">
        <header className="faculty__header">
          <h2 id="faculty-heading" className="faculty__title">
            Meet Our Faculty
          </h2>
          <p className="faculty__subtitle">
            Expert educators with deep subject knowledge and a passion for teaching.
            Our faculty combines academic excellence with real-world experience to guide
            every student towards their goals.
          </p>
        </header>

        <div className="faculty__preview-grid" role="list">
          {PREVIEW_FACULTY.map((member, index) => (
            <article
              key={member.id}
              className="faculty__preview-card card"
              role="listitem"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="faculty__avatar-wrapper">
                <FacultyPhotoPreview
                  photoPath={member.photoPath}
                  photoAlt={member.photoAlt}
                  name={member.name}
                />
              </div>

              <div className="faculty__info">
                <h3 className="faculty__name">{member.name}</h3>
                <p className="faculty__title">{member.title}</p>
                <p className="faculty__subject">{member.subject}</p>
              </div>

              {member.experience && (
                <div className="faculty__experience-badge">
                  <Award size={14} aria-hidden="true" />
                  <span>{member.experience} Experience</span>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="faculty__cta-wrapper">
          <Link to="/faculty" className="btn btn-primary btn--lg faculty__cta-btn">
            Meet Our Faculty
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
          <p className="faculty__cta-note">
            View all 7 faculty members with complete profiles, qualifications, and teaching approaches
          </p>
        </div>
      </div>
    </section>
  );
}