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
  notThis: string[]
}

export const PATHWAYS: Pathway[] = [
  {
    slug: 'construction',
    name: 'Construction',
    short: 'Construction readiness',
    status: 'First pathway',
    phase: 'In development',
    tone: 'construction',
    image: publicUrl('media/crew.jpg'),
    imageAlt: 'Two workers in orange safety gear on a concrete deck among rebar and power tools.',
    summary:
      'Occupational English, safety, tools, measurement, and supervised practice for entry-level construction work in Alberta.',
    promise:
      'Construction is the pathway Purpose Academy is building first. Learners move from pictures and workplace words to instructions, safety gates, shop practice, and documented skill.',
    forWhom:
      'Adults who want to enter construction in Alberta, including newcomers and career changers. Prior trade experience is welcome. It is not required.',
    studies: [
      { title: 'Workplace language', text: 'Visual vocabulary, simple sentences, and the instructions a site actually uses.' },
      { title: 'Digital foundations', text: 'Mouse, files, email, and the confidence to handle ordinary workplace tasks on a screen.' },
      { title: 'Safety, throughout', text: 'Hazards, PPE, tool safety, site safety, and emergency procedures. Practical work stays closed until the gate is passed.' },
      { title: 'Measurement and math', text: 'The numbers, drawings, and checks that keep work square, level, and safe.' },
      { title: 'Materials', text: 'Name what a job is made of, and know what it is for.' },
      { title: 'Hand tools and power tools', text: 'Identify, handle, and talk about the tools. Awareness comes before unsupervised use.' },
      { title: 'Framing', text: 'The structure of a build, taught with video, practice, and assignments.' },
      { title: 'Interior finishes', text: 'The work that closes a space, taught as a system rather than a list of parts.' },
      { title: 'Exterior systems', text: 'Weather, envelope, and the outside of the building.' },
      { title: 'Trade awareness', text: 'Basic electrical, plumbing, and HVAC awareness so a new worker can recognize the work and the limits of their role.' },
      { title: 'Supervised practice', text: 'Stations where an instructor watches the skill. A video is not a competency.' },
      { title: 'Workplace transfer', text: 'Approved on-site experience, with attendance, a daily log, and supervisor feedback.' },
    ],
    leavesWith: [
      'A Skills Passport that separates what was learned, practised, and instructor-verified.',
      'Workplace English for construction, including the words that were hard at the start.',
      'A record of safety learning that had to be completed before practical work.',
      'Employment preparation: a resume, interview practice, and a plan for employer conversations.',
      'Follow-up designed at 30, 90, and 180 days after the program, once cohorts exist.',
    ],
    notThis: [
      'It is not an apprenticeship and it is not a Red Seal credential.',
      'It does not issue third-party safety certificates unless a recognized provider is actually used, and that will be named.',
      'It does not promise a job, a wage, or an employer.',
      'A 400-hour foundational curriculum is the working baseline. Final hours, title, and schedule will be published when they are confirmed.',
    ],
  },
  {
    slug: 'logistics',
    name: 'Logistics',
    short: 'Logistics readiness',
    status: 'Later pathway',
    phase: 'After Construction',
    tone: 'logistics',
    image: publicUrl('media/warehouse.jpg'),
    imageAlt: 'A warehouse aisle of yellow bins and tall racks of boxed inventory.',
    summary:
      'The same learning architecture, retuned for warehouse and logistics work: vocabulary, equipment, inventory, and safety.',
    promise:
      'Logistics stays on the map because the school is one system with more than one door. It opens only after Construction has been validated, staffed, and approved for the work it claims.',
    forWhom:
      'Adults aiming at warehouse, inventory, and movement-of-goods roles. The pathway is described now so the direction is visible. It is not open for enrolment.',
    studies: [
      { title: 'Occupational vocabulary', text: 'The words of receiving, put-away, picking, packing, and shipping.' },
      { title: 'Warehouse safety', text: 'Pedestrian routes, equipment awareness, and the rules that keep a floor orderly.' },
      { title: 'Inventory systems', text: 'Scanning, locations, counts, and the digital tasks that sit beside the physical work.' },
      { title: 'Workplace communication', text: 'Instructions, handoffs, and the English a shift actually requires.' },
      { title: 'Supervised practice', text: 'The same rule as Construction: an instructor verifies what was demonstrated.' },
    ],
    leavesWith: [
      'The same evidence standard: Learned, Practised, Competent.',
      'A Skills Passport scoped to logistics competencies, once the pathway exists.',
    ],
    notThis: [
      'This pathway is not currently offered.',
      'It will not open on a slogan. It needs its own employer evidence, safety rules, and regulatory path.',
    ],
  },
  {
    slug: 'community-support',
    name: 'Community Support',
    short: 'Community support readiness',
    status: 'Later pathway',
    phase: 'After Construction',
    tone: 'community',
    image: publicUrl('media/community.jpg'),
    imageAlt: 'A woman seated in a bright office, looking toward the camera.',
    summary:
      'A future pathway for client communication, documentation, boundaries, and front-line community work.',
    promise:
      'Community Support is held until the occupation, the credential implications, and the placement rules are understood on their own terms. Dignity and privacy are part of the design, not a slogan added later.',
    forWhom:
      'Adults drawn to work that supports other people: community agencies, older adults, disability services, and newcomer settings. The page exists so the intention is public. The program is not.',
    studies: [
      { title: 'Client communication', text: 'Plain language, listening, and the words a support role uses every day.' },
      { title: 'Documentation', text: 'Notes that are accurate, respectful, and limited to what the role requires.' },
      { title: 'Professional boundaries', text: 'What the work is, and what it must not become.' },
      { title: 'Privacy', text: 'Personal information stays inside the purpose it was given for.' },
      { title: 'Referrals', text: 'Knowing when a need belongs to another service, and how to say so clearly.' },
    ],
    leavesWith: [
      'A future Skills Passport for this pathway, only after the competencies are independently validated.',
    ],
    notThis: [
      'Purpose Academy does not replace settlement, health, or legal services.',
      'This pathway is not offered, and it will not be offered until placement requirements are clear.',
    ],
  },
]

export const STAGES = [
  {
    id: 'entry',
    n: '01',
    title: 'Entry and baseline',
    text: 'Registration, consent, a baseline look at language, numeracy, digital skill and safety awareness, then a pathway choice.',
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
    text: 'Stations and projects. An authorized instructor watches the work. Safety gates stay closed until they are met.',
  },
  {
    id: 'workplace',
    n: '05',
    title: 'Workplace transfer',
    text: 'Approved site experience: orientation, a task log, attendance, and supervisor feedback.',
  },
  {
    id: 'transition',
    n: '06',
    title: 'Transition',
    text: 'Final assessment, a Skills Passport, resume and interview support, then follow-up after people leave.',
  },
] as const

export const STEPS: { n: number; title: string; text: string; stage: string }[] = [
  { n: 1, stage: '01', title: 'Login', text: 'A secure door for students, instructors, and administrators. Each person sees only their own work.' },
  { n: 2, stage: '01', title: 'Registration', text: 'Name, contact, the language you want beside English, and the experience you already carry.' },
  { n: 3, stage: '01', title: 'Baseline assessment', text: 'Language, numeracy, digital skills, safety awareness, and work readiness. A starting point, not a verdict.' },
  { n: 4, stage: '01', title: 'Career interest', text: 'Which kind of work fits your strengths. Interest guides the pathway. It does not invent a credential.' },
  { n: 5, stage: '01', title: 'Choose your pathway', text: 'Construction is the door being built first. The other two stay visible so the school has a shape.' },
  { n: 6, stage: '01', title: 'Supplementary language', text: 'Spanish, French, Arabic, Hindi, Amharic, or Tigrinya can carry meaning while English is still forming.' },
  { n: 7, stage: '02', title: 'Visual vocabulary', text: 'See the object. Hear the English word. Read a plain meaning. Understanding comes before memorizing.' },
  { n: 8, stage: '02', title: 'Supported practice', text: 'Match the word to the picture, in class and at home. The support is a bridge, and bridges are temporary.' },
  { n: 9, stage: '02', title: 'English-only vocabulary', text: 'When the word is yours, the translation steps back. The standard does not get easier. The route does.' },
  { n: 10, stage: '02', title: 'Simple sentences', text: 'Use the word in a sentence a workplace would actually say.' },
  { n: 11, stage: '02', title: 'Workplace instructions', text: 'Hear an instruction, follow it, and show that the language survived contact with the task.' },
  { n: 12, stage: '02', title: 'Basic computer skills', text: 'A mouse, a file, an email. Digital confidence for the workplaces people are walking into.' },
  { n: 13, stage: '02', title: 'Safety training', text: 'Hazards, PPE, tool safety, site safety, emergency procedures. Practical modules stay locked until this is done.' },
  { n: 14, stage: '03', title: 'Tools, materials, and equipment', text: 'Identify them, understand them, and practise with them under supervision.' },
  { n: 15, stage: '03', title: 'Construction systems and skills', text: 'Framing, interior finishes, exterior systems, trade awareness, measurement, and construction math.' },
  { n: 16, stage: '04', title: 'Hands-on practice', text: 'Learned, then practised, then instructor-verified. Those are three different states.' },
  { n: 17, stage: '05', title: 'On-site training', text: 'A daily log, supervised tasks, and feedback in a real work environment.' },
  { n: 18, stage: '06', title: 'Final assessment', text: 'Safety, measurement, construction knowledge, workplace language, and practical skill.' },
  { n: 19, stage: '06', title: 'Skills Passport', text: 'A dated record of what was studied, practised, and demonstrated. It is not a regulated trade certificate.' },
  { n: 20, stage: '06', title: 'Employment connection', text: 'Resume support, employer conversations, and follow-up at 30, 90, and 180 days. Employment is the aim. It is not a guarantee.' },
]

export const STATES = [
  {
    name: 'Learned',
    text: 'You can explain the thing. A lesson, a picture, or a quiz can get you here. It is real, and it is not yet the work.',
  },
  {
    name: 'Practised',
    text: 'You have tried the skill with someone watching. The attempt counts. The standard may still be ahead of you.',
  },
  {
    name: 'Competent',
    text: 'An authorized instructor confirms the criteria. Technology does not award this state. A person does.',
  },
] as const

export const VALUES = [
  { name: 'Dignity', text: 'Adults arrive with experience and judgment. Language support is a scaffold, never a way of talking down.' },
  { name: 'Safety', text: 'Safety runs through the program. It is not a module you finish and forget before the tools come out.' },
  { name: 'Evidence', text: 'Claims about skill, partnerships, and outcomes have to be traceable. If we have not measured it, we do not print it.' },
  { name: 'Practicality', text: 'Lessons are organized around tasks a Canadian workplace actually asks someone to do.' },
  { name: 'Human judgment', text: 'The platform supports learning. Instructors teach, observe, correct, and evaluate.' },
  { name: 'Accessibility', text: 'The school should be understandable for people with different languages, digital experience, and access needs.' },
] as const

export const TEAM = [
  { name: 'Saba Teklu', role: 'Founding builder' },
  { name: 'Kinfe Desta', role: 'Founding builder' },
  { name: 'ChuChu Asemelash', role: 'Founding builder' },
  { name: 'Yonas Tesfagabr', role: 'Founding builder' },
  { name: 'Levi Zigza', role: 'Founding builder' },
] as const

export const AUDIENCES = [
  { as: 'learner', title: 'Prospective learners', text: 'A clear path, language support, and an honest account of what the program produces — and what it does not.' },
  { as: 'employer', title: 'Employers', text: 'Entry-level evidence you can read: what was taught, what was practised, and what an instructor verified.' },
  { as: 'partner', title: 'Community partners', text: 'A referral that says who the program is for, what support exists, and where the boundary is.' },
] as const

export const FAQS = [
  {
    q: 'Can I enrol today?',
    a: 'Not yet. Purpose Academy is in development, with Construction as the first pathway. Request information and you will hear when a cohort is actually being scheduled.',
  },
  {
    q: 'Is this an apprenticeship or a Red Seal program?',
    a: 'No. The school prepares people for entry-level work and documents evidence of readiness. It does not replace apprenticeship, a Red Seal, or any other regulated credential.',
  },
  {
    q: 'Can I use Alberta Student Aid?',
    a: 'No. Licensing and Student Aid designation are separate, and designation is not in place. Please do not plan a budget around it.',
  },
  {
    q: 'What does it cost?',
    a: 'Tuition will be published when a program and its price are confirmed. This site will not invent a number.',
  },
  {
    q: 'Which languages can sit beside English?',
    a: 'The learning model is designed around Spanish, French, Arabic, Hindi, Amharic, and Tigrinya. The support language explains the idea. English remains the language of the workplace.',
  },
  {
    q: 'Do I already need construction experience?',
    a: 'No. People with experience from another country are recognized. People starting fresh are expected. The baseline assessment finds the starting point.',
  },
  {
    q: 'Where is the campus?',
    a: 'Calgary, Alberta. A street address will be published when a facility is confirmed.',
  },
] as const

export function pathwayBySlug(slug: string | undefined) {
  return PATHWAYS.find((item) => item.slug === slug)
}
