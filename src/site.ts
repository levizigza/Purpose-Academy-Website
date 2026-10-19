export function publicUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export const BRAND = {
  name: 'Purpose Academy',
  place: 'Calgary, Alberta',
  city: 'Calgary',
  email: 'hello@purposeacademy.ca',
  platform: 'https://levizigza.github.io/Purpose-Academy-Application/',
  platformName: 'Learning platform',
  tagline: 'Learn today. Build tomorrow.',
  line: 'From understanding to employment.',
} as const

export const LANGUAGES = ['Spanish', 'French', 'Arabic', 'Hindi', 'Amharic', 'Tigrinya'] as const

export type PathwaySlug = 'construction' | 'logistics' | 'community-support'

export type Pathway = {
  slug: PathwaySlug
  name: string
  short: string
  status: string
  phase: string
  tone: 'construction' | 'logistics' | 'community'
  image: string
  imageAlt: string
  summary: string
  promise: string
  forWhom: string
  studies: { title: string; text: string }[]
  leavesWith: string[]
  credential: string[]
}

export const PATHWAYS: Pathway[] = [
  {
    slug: 'construction',
    name: 'Construction',
    short: 'Construction foundations',
    status: 'Flagship',
    phase: 'Foundations',
    tone: 'construction',
    image: publicUrl('media/crew.jpg'),
    imageAlt: 'Two framers in hard hats pass a drill across a wood-frame wall.',
    summary:
      'Workplace English, site safety, tools, measurement, framing, and supervised practice for entry-level construction work in Alberta.',
    promise:
      'Students learn the words a site uses, the safety required before they pick up a tool, and the tasks an instructor watches and signs.',
    forWhom:
      'Adults entering construction in Alberta, including newcomers and people changing careers. Trade experience is welcome. It is not required to apply.',
    studies: [
      { title: 'Workplace language', text: 'Visual vocabulary, simple sentences, and the instructions a site actually uses.' },
      { title: 'Digital foundations', text: 'Mouse, files, email, and the ordinary computer tasks a workplace expects.' },
      { title: 'Safety', text: 'Hazards, PPE, tool safety, site safety, and emergency procedures. Practical work begins after the safety gate is passed.' },
      { title: 'Measurement and math', text: 'The numbers, drawings, and checks that keep work square, level, and safe.' },
      { title: 'Materials', text: 'Name what a job is made of, and know what it is for.' },
      { title: 'Hand tools and power tools', text: 'Identify the tool, handle it, and talk about it. An instructor is present before unsupervised use.' },
      { title: 'Framing', text: 'The structure of a build, taught with demonstration, practice, and assignments.' },
      { title: 'Interior finishes', text: 'The work that closes a space, taught as a system.' },
      { title: 'Exterior systems', text: 'Weather, the building envelope, and the outside of the building.' },
      { title: 'Trade awareness', text: 'Electrical, plumbing, and HVAC awareness, so a new worker can recognize the work and the limits of the role.' },
      { title: 'Supervised practice', text: 'Stations where an instructor watches the skill and records it.' },
      { title: 'Workplace transfer', text: 'On-site experience with attendance, a daily log, and supervisor feedback.' },
    ],
    leavesWith: [
      'A Skills Passport that separates what was learned, practised, and signed by an instructor.',
      'Workplace English for construction.',
      'A completed safety record, required before practical work.',
      'A resume, interview practice, and a plan for employer conversations.',
      'Follow-up at 30, 90, and 180 days after the program.',
    ],
    credential: [
      'The Skills Passport names each skill, the date, and the instructor who verified it.',
      'A Red Seal is a provincial apprenticeship credential. This program is the school’s foundations credential.',
      'Employment preparation is part of the program. The school follows graduates after they leave.',
    ],
  },
  {
    slug: 'logistics',
    name: 'Logistics',
    short: 'Logistics foundations',
    status: 'Foundations',
    phase: 'Foundations',
    tone: 'logistics',
    image: publicUrl('media/warehouse.jpg'),
    imageAlt: 'A warehouse aisle of yellow bins and tall racks of boxed inventory.',
    summary:
      'Warehouse and logistics work: the words of the floor, equipment awareness, inventory, and safety.',
    promise:
      'Students learn receiving, put-away, picking, packing, and shipping, then practise under an instructor who records what was demonstrated.',
    forWhom:
      'Adults preparing for warehouse, inventory, and shipping roles in Alberta. Apply through admissions and name the work you want.',
    studies: [
      { title: 'Occupational vocabulary', text: 'The words of receiving, put-away, picking, packing, and shipping.' },
      { title: 'Warehouse safety', text: 'Pedestrian routes, equipment awareness, and the rules that keep a floor orderly.' },
      { title: 'Inventory systems', text: 'Scanning, locations, counts, and the digital tasks beside the physical work.' },
      { title: 'Workplace communication', text: 'Instructions, handoffs, and the English a shift requires.' },
      { title: 'Supervised practice', text: 'An instructor verifies what was demonstrated and records it on the Skills Passport.' },
    ],
    leavesWith: [
      'A Skills Passport with Learned, Practised, and Competent recorded separately.',
      'Workplace English for a warehouse floor.',
      'Employment preparation and follow-up at 30, 90, and 180 days.',
    ],
    credential: [
      'The Skills Passport names each skill, the date, and the instructor who verified it.',
      'It is the school’s record of logistics foundations. It is separate from an equipment licence issued by someone else.',
    ],
  },
  {
    slug: 'community-support',
    name: 'Community Support',
    short: 'Community support foundations',
    status: 'Foundations',
    phase: 'Foundations',
    tone: 'community',
    image: publicUrl('media/community.jpg'),
    imageAlt: 'A support worker steadies a walker as an older person steps out of a car.',
    summary:
      'Client communication, notes, professional boundaries, and the daily work of supporting another person.',
    promise:
      'Students learn how to speak with a client, write a clear note, keep a professional boundary, and recognize when a need belongs to another service.',
    forWhom:
      'Adults preparing for work with community agencies, older adults, disability services, and newcomer services. Apply through admissions.',
    studies: [
      { title: 'Client communication', text: 'Plain language, listening, and the words a support role uses every day.' },
      { title: 'Documentation', text: 'Notes that are accurate, respectful, and limited to what the role requires.' },
      { title: 'Professional boundaries', text: 'What the work includes, and where it stops.' },
      { title: 'Privacy', text: 'Personal information stays inside the purpose it was given for.' },
      { title: 'Referrals', text: 'When a need belongs to another service, and how to say so clearly.' },
    ],
    leavesWith: [
      'A Skills Passport for the competencies an instructor has verified.',
      'A clear record of communication, documentation, and boundaries.',
    ],
    credential: [
      'The Skills Passport names each skill, the date, and the instructor who verified it.',
      'The school teaches, practises, and documents the work. Settlement, health, and legal services remain with those services.',
    ],
  },
]

export const STAGES = [
  {
    id: 'entry',
    n: '01',
    title: 'Entry and baseline',
    text: 'Registration, consent, a baseline in language, numeracy, computer skill and safety awareness, then a program choice.',
  },
  {
    id: 'foundations',
    n: '02',
    title: 'Supported foundations',
    text: 'Pictures, audio, a chosen support language, workplace sentences, computer basics, and safety theory.',
  },
  {
    id: 'technical',
    n: '03',
    title: 'Technical development',
    text: 'Tools, materials, measurement, drawings, and the systems of the trade, with checks along the way.',
  },
  {
    id: 'practice',
    n: '04',
    title: 'Supervised practice',
    text: 'Stations and projects. An instructor watches the work. Safety gates stay closed until they are met.',
  },
  {
    id: 'workplace',
    n: '05',
    title: 'Workplace transfer',
    text: 'Site experience: orientation, a task log, attendance, and supervisor feedback.',
  },
  {
    id: 'transition',
    n: '06',
    title: 'Transition',
    text: 'Final assessment, a Skills Passport, resume and interview support, then follow-up after students leave.',
  },
] as const

export const STEPS: { n: number; title: string; text: string; stage: string }[] = [
  { n: 1, stage: '01', title: 'Login', text: 'A secure door for students, instructors, and administrators. Each person sees their own work.' },
  { n: 2, stage: '01', title: 'Registration', text: 'Name, contact, the language you want beside English, and the experience you already carry.' },
  { n: 3, stage: '01', title: 'Baseline assessment', text: 'Language, numeracy, digital skills, safety awareness, and work readiness. A starting point.' },
  { n: 4, stage: '01', title: 'Career interest', text: 'Which kind of work fits your strengths. Interest guides the program you enter.' },
  { n: 5, stage: '01', title: 'Choose your program', text: 'Construction, Logistics, or Community Support. Admissions confirms the intake.' },
  { n: 6, stage: '01', title: 'Support language', text: 'Spanish, French, Arabic, Hindi, Amharic, or Tigrinya can sit beside a lesson while the English is forming.' },
  { n: 7, stage: '02', title: 'Visual vocabulary', text: 'See the object, hear the English word, and read a plain meaning before you are asked to use it from memory.' },
  { n: 8, stage: '02', title: 'Supported practice', text: 'Match the word to the picture, in class and at home. The translation comes off once the English is usable.' },
  { n: 9, stage: '02', title: 'English-only vocabulary', text: 'The picture stays. The assessment is in English.' },
  { n: 10, stage: '02', title: 'Simple sentences', text: 'Use the word in a sentence a workplace would actually say.' },
  { n: 11, stage: '02', title: 'Workplace instructions', text: 'Hear an instruction, follow it, and show that the language survived contact with the task.' },
  { n: 12, stage: '02', title: 'Basic computer skills', text: 'A mouse, a file, an email. The digital tasks the workplace expects.' },
  { n: 13, stage: '02', title: 'Safety training', text: 'Hazards, PPE, tool safety, site safety, emergency procedures. Practical modules open after this is done.' },
  { n: 14, stage: '03', title: 'Tools, materials, and equipment', text: 'Identify them, understand them, and practise with them under supervision.' },
  { n: 15, stage: '03', title: 'Trade systems and skills', text: 'The systems of the program: construction, the warehouse floor, or community support.' },
  { n: 16, stage: '04', title: 'Hands-on practice', text: 'Learned, then practised, then signed by an instructor. Those are three different records.' },
  { n: 17, stage: '05', title: 'On-site training', text: 'A daily log, supervised tasks, and feedback in a real workplace.' },
  { n: 18, stage: '06', title: 'Final assessment', text: 'Safety, the technical work of the program, workplace language, and practical skill.' },
  { n: 19, stage: '06', title: 'Skills Passport', text: 'A dated record of what was studied, practised, and demonstrated, signed by the instructor.' },
  { n: 20, stage: '06', title: 'Employment connection', text: 'Resume support, employer conversations, and follow-up at 30, 90, and 180 days.' },
]

export const STATES = [
  {
    name: 'Learned',
    text: 'You can explain the skill. A lesson, a picture, or a quiz can reach this point.',
  },
  {
    name: 'Practised',
    text: 'You have tried the skill with someone watching. The attempt is on the record.',
  },
  {
    name: 'Competent',
    text: 'An instructor confirms that the criteria were met and signs the record. The learning platform stores it. It does not award it.',
  },
] as const

export const VALUES = [
  { name: 'Dignity', text: 'Students are adults. A support language explains the lesson. A skilled person is not treated as a beginner.' },
  { name: 'Safety', text: 'Safety is taught before practical work and checked again when the tools come out.' },
  { name: 'Evidence', text: 'A Skills Passport names the skill, the date, and the instructor. A result the school publishes names who was counted.' },
  { name: 'Practicality', text: 'Lessons follow tasks a workplace in Alberta asks an entry-level person to do.' },
  { name: 'Human judgment', text: 'The platform organizes lessons and records. Instructors teach, watch, correct, and decide.' },
  { name: 'Accessibility', text: 'Lessons and this website are built to be usable across languages, computer experience, and access needs.' },
] as const

export const TEAM = [
  { name: 'Saba Teklu', role: 'Leadership' },
  { name: 'Kinfe Desta', role: 'Leadership' },
  { name: 'ChuChu Asemelash', role: 'Leadership' },
  { name: 'Yonas Tesfagabr', role: 'Leadership' },
  { name: 'Levi Zigza', role: 'Leadership' },
] as const

export const AUDIENCES = [
  {
    as: 'learner',
    title: 'Prospective learners',
    text: 'You may already know the work, or you may be starting. Choose Construction, Logistics, or Community Support. Admissions confirms your intake, tuition, and where class meets.',
  },
  {
    as: 'employer',
    title: 'Employers',
    text: 'A Skills Passport shows what was taught, what was practised, and which instructor verified it. Read it before you interview. Tell us the tasks your site actually needs.',
  },
  {
    as: 'partner',
    title: 'Referring organizations',
    text: 'Refer adults who are ready for entry-level work and need workplace English, safety, computer skill, or a local record. The school teaches the program. Settlement, health, and legal services stay with those services.',
  },
] as const

export const FACTS = [
  { term: 'Place', detail: 'Calgary, Alberta.' },
  { term: 'Programs', detail: 'Construction, Logistics, and Community Support.' },
  { term: 'Language of instruction', detail: 'English. Spanish, French, Arabic, Hindi, Amharic, and Tigrinya explain a lesson, then come off.' },
  { term: 'Assessment', detail: 'Learned, Practised, or Competent. An instructor signs Competent.' },
  { term: 'Credential', detail: 'A Skills Passport: the school’s record of instructor-verified skill.' },
  { term: 'Admissions', detail: 'Apply online. Admissions replies with the next intake, tuition, and where class meets.' },
] as const

export const REQUIREMENTS = [
  { item: 'Who may apply', now: 'Adults preparing for entry-level work in Alberta, including newcomers and people changing careers.' },
  { item: 'Prior schooling', now: 'Tell admissions what you have completed. A mature learner is welcome.' },
  { item: 'Trade experience', now: 'Welcome, and not required. Experience from another country should be described as it was.' },
  { item: 'English', now: 'Classes and assessments are in English. A support language is available while the English is forming.' },
  { item: 'What to include', now: 'The program you want, the experience you already have, and a way for admissions to reply.' },
  { item: 'Tuition and intake', now: 'Confirmed by admissions for the intake you join.' },
] as const

export const FAQS = [
  {
    q: 'How do I apply?',
    a: 'Send the admissions form. We reply by email with the next intake, tuition, and what to bring to the first conversation.',
  },
  {
    q: 'What credential do I receive?',
    a: 'A Skills Passport. It records what you learned, what you practised, and what an instructor verified, with the date and the name of the instructor. A Red Seal is a separate provincial apprenticeship credential.',
  },
  {
    q: 'What does it cost, and when does it start?',
    a: 'Admissions confirms tuition and the next start date for the program you choose. Both are in the reply to your application.',
  },
  {
    q: 'Which languages can sit beside English?',
    a: 'Spanish, French, Arabic, Hindi, Amharic, and Tigrinya. They explain the lesson. English is the language of the class, the assessment, and the workplace.',
  },
  {
    q: 'Do I need trade experience already?',
    a: 'No. People with experience from another country are expected, and so are people starting without it. A baseline assessment finds the starting point.',
  },
  {
    q: 'Where are classes?',
    a: 'In Calgary. Admissions confirms the location for your intake when you apply.',
  },
] as const

export function pathwayBySlug(slug: string | undefined) {
  return PATHWAYS.find((item) => item.slug === slug)
}
