import { FACULTY_PROFILES } from './faculty';

export interface CourseDetail {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  fullDescription: string;
  subjects: string[];
  targetAudience: string[];
  keyFeatures: string[];
  teachingApproach: string;
  illustrationType: 'jee' | 'neet' | 'humanities' | 'foundation' | 'physics' | 'chemistry';
  facultyIds: string[];
  ctaText: string;
  ctaHref: string;
}

export const COURSE_DETAILS: CourseDetail[] = [
  {
    id: 'jee',
    slug: 'jee',
    title: 'JEE Preparation',
    shortTitle: 'JEE Main & Advanced',
    badge: 'JEE',
    description: 'Build a strong foundation in Physics, Chemistry and Mathematics with expert guidance.',
    fullDescription: 'Our comprehensive JEE preparation program is designed to help students master the complete JEE Main and Advanced syllabus. With a focus on conceptual clarity, problem-solving skills, and exam-oriented practice, we provide the tools and guidance needed to secure top ranks in one of India\'s most competitive engineering entrance examinations.',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    targetAudience: [
      'Class 11 & 12 students aiming for IITs and top engineering colleges',
      'JEE Main & Advanced aspirants seeking structured preparation',
      'Students looking for concept-focused coaching with expert faculty',
      'Repeaters and droppers aiming to improve their rank'
    ],
    keyFeatures: [
      'Complete JEE Main & Advanced syllabus coverage',
      'Concept-focused teaching with practical problem-solving',
      'Regular mock tests with detailed performance analytics',
      'Small batch sizes for personalized attention',
      'Doubt-solving sessions and one-on-one mentoring',
      'Comprehensive study materials and recorded lectures',
      'Previous year paper analysis and trend prediction',
      'Time management and exam strategy workshops'
    ],
    teachingApproach: 'Our JEE program emphasizes building strong fundamentals first, then progressively advancing to complex problem-solving. Each concept is taught with real-world applications and multiple solution approaches. Regular assessments track progress, while personalized feedback helps students identify and strengthen weak areas.',
    illustrationType: 'jee',
    facultyIds: ['ankit-sir', 'anmol-maam', 'ashish-sir'],
    ctaText: 'Book a Free Demo',
    ctaHref: '/contact'
  },
  {
    id: 'neet',
    slug: 'neet',
    title: 'NEET UG Preparation',
    shortTitle: 'NEET UG',
    badge: 'NEET',
    description: 'Get the right support to excel in Biology, Chemistry and Physics with our focused approach.',
    fullDescription: 'Our NEET UG preparation program provides comprehensive coverage of the medical entrance syllabus with special emphasis on Biology, which carries the highest weightage. Our expert faculty combines deep subject knowledge with proven teaching methodologies to help students achieve their medical college dreams.',
    subjects: ['Physics', 'Chemistry', 'Biology'],
    targetAudience: [
      'Class 11 & 12 students aiming for medical colleges (MBBS/BDS)',
      'NEET UG aspirants seeking structured, exam-focused preparation',
      'Students needing strong Biology foundation with Physics & Chemistry support',
      'Droppers and repeaters looking to improve their NEET score'
    ],
    keyFeatures: [
      'Complete NEET syllabus coverage with NCERT alignment',
      'Special emphasis on Biology (Botany & Zoology)',
      'Conceptual Physics & Chemistry for medical entrance',
      'Regular NEET-pattern mock tests and analysis',
      'Chapter-wise practice questions and previous year papers',
      'Small batches with individual attention',
      'Doubt resolution and concept reinforcement sessions',
      'Exam strategy, time management, and stress handling'
    ],
    teachingApproach: 'Our NEET program follows a structured approach starting with NCERT mastery, then advancing to competitive-level problems. Biology is taught with visual aids, diagrams, and memory techniques. Physics and Chemistry focus on conceptual understanding with medical entrance specific applications. Regular testing simulates actual exam conditions.',
    illustrationType: 'neet',
    facultyIds: ['arvind-sir', 'ashish-sir', 'ankit-sir'],
    ctaText: 'Book a Free Demo',
    ctaHref: '/contact'
  },
  {
    id: 'humanities',
    slug: 'humanities',
    title: 'Humanities (Classes 11–12)',
    shortTitle: 'Humanities',
    badge: 'HUMANITIES',
    description: 'Explore your passion with expert mentoring in History, Geography, Political Science and more.',
    fullDescription: 'Our Humanities program offers comprehensive coverage of Class 11–12 humanities subjects for board examinations and CUET domain preparation. With expert faculty from top universities and former UPSC faculty, we provide deep conceptual understanding and analytical thinking skills essential for humanities excellence.',
    subjects: ['History', 'Political Science', 'Geography', 'Economics', 'Psychology'],
    targetAudience: [
      'Class 11 & 12 Humanities stream students',
      'Board exam aspirants (CBSE, ICSE, State Boards)',
      'CUET domain subject preparation',
      'Students interested in UPSC, Law, Journalism, Civil Services foundations'
    ],
    keyFeatures: [
      'Complete board syllabus coverage for all humanities subjects',
      'CUET domain subject preparation included',
      'Expert faculty with Delhi University & UPSC background',
      'Conceptual teaching with analytical thinking development',
      'Answer writing practice and presentation skills',
      'Current affairs integration with static syllabus',
      'Map work, timeline, and data interpretation practice',
      'Essay writing and long-answer structuring workshops'
    ],
    teachingApproach: 'Our humanities pedagogy emphasizes conceptual understanding over rote memorization. We use peer-based learning, discussions, and analytical frameworks to develop critical thinking. History and Political Science are taught with cause-effect analysis, while Geography integrates map skills and data interpretation. Regular answer writing practice builds exam confidence.',
    illustrationType: 'humanities',
    facultyIds: ['arjun-sir'],
    ctaText: 'Book a Free Demo',
    ctaHref: '/contact'
  },
  {
    id: 'foundation',
    slug: 'foundation',
    title: 'Foundation Courses (Classes 9–10)',
    shortTitle: 'Foundation',
    badge: 'FOUNDATION',
    description: 'Build strong basics in core subjects and develop the skills for a brighter future.',
    fullDescription: 'Our Foundation program for Classes 9–10 builds strong conceptual foundations in Science, Mathematics, and Social Studies. Designed to prepare students for board exams, Olympiads, NTSE, and future competitive exams like JEE/NEET, this program develops analytical thinking and problem-solving skills from an early stage.',
    subjects: ['Science (Physics, Chemistry, Biology)', 'Mathematics', 'Social Studies'],
    targetAudience: [
      'Class 9 & 10 students (CBSE, ICSE, State Boards)',
      'Olympiad and NTSE aspirants',
      'Students planning for future JEE/NEET preparation',
      'Learners wanting strong conceptual basics in core subjects'
    ],
    keyFeatures: [
      'Complete Class 9–10 board syllabus coverage',
      'Olympiad (NSO, IMO, NSTSE) and NTSE preparation',
      'Conceptual clarity in Science and Mathematics',
      'Early exposure to competitive exam patterns',
      'Regular assessments and progress tracking',
      'Supportive learning environment for young students',
      'Bridge course for smooth transition to Classes 11–12',
      'Parent-teacher interaction and progress reports'
    ],
    teachingApproach: 'Foundation teaching focuses on making learning enjoyable while building rigor. Concepts are introduced through real-life examples, experiments, and interactive methods. Mathematics emphasizes logical reasoning and multiple approaches. Science connects theory with practical applications. Regular low-stakes assessments build confidence without pressure.',
    illustrationType: 'foundation',
    facultyIds: ['arvind-sir', 'soniya-maam'],
    ctaText: 'Book a Free Demo',
    ctaHref: '/contact'
  },
  {
    id: 'physics',
    slug: 'physics',
    title: 'Physics',
    shortTitle: 'Physics',
    badge: 'PHYSICS',
    description: 'Understand the universe with concept clarity and practical problem-solving skills.',
    fullDescription: 'Our focused Physics course provides deep conceptual understanding of physical principles with extensive problem-solving practice. Designed for JEE, NEET, and board exam preparation, this course covers mechanics, thermodynamics, electromagnetism, optics, and modern physics with expert guidance from IIT-JEE qualified faculty.',
    subjects: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Modern Physics'],
    targetAudience: [
      'JEE Main & Advanced aspirants needing strong Physics',
      'NEET UG students requiring Physics for medical entrance',
      'Class 11 & 12 board exam students',
      'Anyone wanting to master Physics concepts and problem-solving'
    ],
    keyFeatures: [
      'Complete Physics syllabus for JEE, NEET, and Boards',
      'Concept-first approach with numerical problem-solving',
      'IIT-JEE qualified faculty with GATE qualification',
      'Derivation-based understanding, not formula memorization',
      'Regular topic-wise and full-syllabus tests',
      'Special focus on high-weightage JEE/NEET topics',
      'Error analysis and common misconception clearing',
      'Experimental demonstrations and practical applications'
    ],
    teachingApproach: 'Physics is taught through concept-focused teaching with practical and numerical-based learning. Each topic starts with fundamental principles, derives key formulas, and applies them to varied problem types. Emphasis on understanding the "why" behind each concept. Regular numerical practice builds speed and accuracy for competitive exams.',
    illustrationType: 'physics',
    facultyIds: ['ankit-sir'],
    ctaText: 'Book a Free Demo',
    ctaHref: '/contact'
  },
  {
    id: 'chemistry',
    slug: 'chemistry',
    title: 'Chemistry',
    shortTitle: 'Chemistry',
    badge: 'CHEMISTRY',
    description: 'From basics to advanced concepts, master Chemistry with interactive and focused learning.',
    fullDescription: 'Our Chemistry course covers Physical, Organic, and Inorganic Chemistry with a practical and experimental learning approach. Designed for JEE, NEET, and board exams, this course helps students connect theoretical concepts with real-world applications through hands-on demonstrations and focused problem-solving.',
    subjects: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry'],
    targetAudience: [
      'JEE Main & Advanced aspirants needing Chemistry mastery',
      'NEET UG students requiring Chemistry for medical entrance',
      'Class 11 & 12 board exam students',
      'Learners wanting practical understanding of chemical principles'
    ],
    keyFeatures: [
      'Complete Physical, Organic, and Inorganic Chemistry coverage',
      'Practical and experimental learning methodology',
      'M.Sc. Chemistry qualified faculty with B.Ed.',
      'Mechanism-based Organic Chemistry teaching',
      'Periodic trends and conceptual Inorganic Chemistry',
      'Numerical problem-solving in Physical Chemistry',
      'Reaction mechanism practice and named reactions',
      'Lab demonstrations and real-world applications'
    ],
    teachingApproach: 'Chemistry is taught through practical and experimental learning approaches. Physical Chemistry emphasizes numerical problem-solving with conceptual clarity. Organic Chemistry focuses on reaction mechanisms and logical thinking rather than memorization. Inorganic Chemistry uses periodic trends and conceptual frameworks. Regular practice with JEE/NEET pattern questions builds exam readiness.',
    illustrationType: 'chemistry',
    facultyIds: ['ashish-sir'],
    ctaText: 'Book a Free Demo',
    ctaHref: '/contact'
  }
];

export function getCourseBySlug(slug: string): CourseDetail | undefined {
  return COURSE_DETAILS.find(course => course.slug === slug);
}

export function getCourseFaculty(course: CourseDetail) {
  return course.facultyIds
    .map(id => FACULTY_PROFILES.find(f => f.id === id))
    .filter((f): f is typeof FACULTY_PROFILES[0] => f !== undefined);
}