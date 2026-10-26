export interface FacultyProfile {
  id: string;
  name: string;
  title: string;
  subject: string;
  photoPath: string;
  photoAlt: string;
  qualifications: string[];
  experience: string | null;
  credentials: string[];
  additionalRoles: string[];
  teachingApproach: string;
  background: string;
}

export const FACULTY_PROFILES: FacultyProfile[] = [
  {
    id: 'mahesh-sir',
    name: 'Mahesh Sir',
    title: 'Marketing Head & Management Head',
    subject: 'Counselling & Discipline Coaching',
    photoPath: '/images/faculty/mahesh-sir.jpg',
    photoAlt: 'Mahesh Sir - Marketing Head and Management Head',
    qualifications: ['M.P.Ed.'],
    experience: '14 years',
    credentials: [],
    additionalRoles: ['Counselling experience', 'Discipline coach'],
    teachingApproach: 'Experienced in managing, mentoring, and guiding students towards their goals.',
    background: 'With 14 years of experience, Mahesh Sir serves as both Marketing Head and Management Head. His background in physical education combined with extensive counselling experience makes him uniquely qualified to guide and mentor students towards their academic goals while maintaining discipline and focus.',
  },
  {
    id: 'ankit-sir',
    name: 'Ankit Sir',
    title: 'Senior Physics Faculty',
    subject: 'Physics (JEE/NEET)',
    photoPath: '/images/faculty/ankit-sir.jpg',
    photoAlt: 'Ankit Sir - Senior Physics Faculty',
    qualifications: ['M.Sc. Physics', 'B.Ed.', 'B.Sc. (Non-Medical)'],
    experience: '6 years',
    credentials: ['IIT-JEE qualified', 'GATE qualified'],
    additionalRoles: [],
    teachingApproach: 'Concept-focused teaching with practical and numerical-based learning.',
    background: 'Ankit Sir brings strong academic credentials with an M.Sc. in Physics, B.Ed., and B.Sc. (Non-Medical). Having qualified both IIT-JEE and GATE, he combines deep subject knowledge with firsthand experience of competitive examinations. His 6 years of teaching experience focuses on building strong conceptual foundations through practical applications and numerical problem-solving.',
  },
  {
    id: 'arjun-sir',
    name: 'Arjun Sir',
    title: 'Senior History & Political Science Faculty',
    subject: 'History & Political Science (Humanities/UPSC Foundation)',
    photoPath: '/images/faculty/arjun-sir.jpg',
    photoAlt: 'Arjun Sir - Senior History & Political Science Faculty',
    qualifications: ['M.A. History (Delhi University)', 'B.A. History Honours (Delhi University)', 'B.Ed.'],
    experience: '8 years',
    credentials: [],
    additionalRoles: ['Former UPSC faculty'],
    teachingApproach: 'Conceptual teaching and peer-based learning.',
    background: 'Arjun Sir holds M.A. and B.A. (Honours) in History from Delhi University along with a B.Ed. degree. With 8 years of experience teaching History and Political Science, including a background as former UPSC faculty, he brings deep expertise in humanities subjects. His teaching methodology emphasizes conceptual understanding and collaborative peer-based learning approaches.',
  },
  {
    id: 'anmol-maam',
    name: "Anmol Ma'am",
    title: 'Senior Mathematics Faculty',
    subject: 'Mathematics (JEE Main & Advanced)',
    photoPath: '/images/faculty/anmol-maam.jpg',
    photoAlt: "Anmol Ma'am - Senior Mathematics Faculty",
    qualifications: ['M.Sc. (IIT Roorkee)', 'B.Sc. (Delhi University)'],
    experience: '12 years',
    credentials: [],
    additionalRoles: [],
    teachingApproach: 'Concept-based learning, strong foundations, scientific thinking, and exam-oriented skills.',
    background: "Anmol Ma'am is an IIT Roorkee alumnus with an M.Sc. degree and B.Sc. from Delhi University. With 12 years of dedicated experience in Mathematics, she specializes in JEE Main and JEE Advanced preparation. Her teaching philosophy centers on concept-based learning, building strong mathematical foundations, fostering scientific thinking, and developing exam-oriented problem-solving skills.",
  },
  {
    id: 'arvind-sir',
    name: 'Arvind Sir',
    title: 'Senior Biology Faculty',
    subject: 'Zoology, Biology (NEET & Foundation)',
    photoPath: '/images/faculty/arvind-sir.jpg',
    photoAlt: 'Arvind Sir - Senior Biology Faculty',
    qualifications: ['M.Sc. Zoology', 'B.Ed.', 'B.Sc. (Zoology and Botany)'],
    experience: '12 years',
    credentials: ['CTET qualified', 'HTET qualified'],
    additionalRoles: ['Backend management'],
    teachingApproach: 'Making difficult concepts easier to understand.',
    background: 'Arvind Sir holds an M.Sc. in Zoology, B.Ed., and B.Sc. in Zoology and Botany. With 12 years of teaching experience and CTET/HTET qualifications, he specializes in Zoology and Biology for NEET and Foundation courses. His additional role in backend management demonstrates his organizational capabilities. His teaching approach focuses on simplifying complex biological concepts for better student comprehension.',
  },
  {
    id: 'ashish-sir',
    name: 'Ashish Sir',
    title: 'Senior Chemistry Faculty',
    subject: 'Chemistry',
    photoPath: '/images/faculty/ashish-sir.jpg',
    photoAlt: 'Ashish Sir - Senior Chemistry Faculty',
    qualifications: ['M.Sc. Chemistry', 'B.Ed.'],
    experience: '5+ years',
    credentials: [],
    additionalRoles: [],
    teachingApproach: 'Practical and experimental learning.',
    background: 'Ashish Sir holds an M.Sc. in Chemistry and B.Ed. With 5+ years of teaching experience, he specializes in Chemistry education. His teaching methodology emphasizes practical and experimental learning approaches, helping students connect theoretical concepts with real-world applications through hands-on experimentation and practical demonstrations.',
  },
  {
    id: 'soniya-maam',
    name: "Soniya Ma'am",
    title: 'Foundation Mathematics Faculty',
    subject: 'Mathematics (Foundation Level)',
    photoPath: '/images/faculty/soniya-maam.jpg',
    photoAlt: "Soniya Ma'am - Foundation Mathematics Faculty",
    qualifications: ['B.Sc.', 'B.Ed.'],
    experience: null,
    credentials: [],
    additionalRoles: [],
    teachingApproach: 'Supportive foundational Mathematics learning.',
    background: "Soniya Ma'am holds B.Sc. and B.Ed. qualifications and joins the faculty as a fresher specializing in foundational Mathematics learning. Her teaching approach focuses on providing supportive, encouraging guidance to students building their mathematical foundations at the early stages of their academic journey.",
  },
];