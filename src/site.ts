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
    status: 'First program',
    phase: 'In development',
    tone: 'construction',
    image: publicUrl('media/crew.jpg'),
    imageAlt: 'Two workers in orange safety gear on a concrete deck among rebar and power tools.',
    summary:
      'Workplace English, safety, tools, measurement, and supervised practice for entry-level construction work in Alberta.',
    promise:
      'Construction is the first program. Students learn the words a site uses, the safety required before practical work, and the tasks an instructor can watch and record.',
    forWhom:
      'Adults entering construction in Alberta, including newcomers and people changing careers. Previous trade experience is welcome. It is not required.',
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
      { title: 'Supervised practice', text: 'Stations where an instructor watches the skill. Watching a video is not the same as demonstrating it.' },
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
    status: 'Not open',
    phase: 'After Construction',
    tone: 'logistics',
    image: publicUrl('media/warehouse.jpg'),
    imageAlt: 'A warehouse aisle of yellow bins and tall racks of boxed inventory.',
    summary:
      'Warehouse and logistics work: vocabulary, equipment, inventory, and safety. This program is not open.',
    promise:
      'Logistics will use the same standard as Construction: workplace English, safety, supervised practice, and an instructor’s record. It will not be offered until Construction has been staffed and the logistics requirements are written.',
    forWhom:
      'Adults aiming at warehouse, inventory, and shipping roles. The program is described here so the plan is public. It is not open for enrolment.',
    studies: [
      { title: 'Occupational vocabulary', text: 'The words of receiving, put-away, picking, packing, and shipping.' },
      { title: 'Warehouse safety', text: 'Pedestrian routes, equipment awareness, and the rules that keep a floor orderly.' },
      { title: 'Inventory systems', text: 'Scanning, locations, counts, and the digital tasks that sit beside the physical work.' },
      { title: 'Workplace communication', text: 'Instructions, handoffs, and the English a shift actually requires.' },
      { title: 'Supervised practice', text: 'The same rule as Construction: an instructor verifies what was demonstrated.' },
    ],
    leavesWith: [
      'The same three records as Construction: Learned, Practised, and Competent.',
      'A Skills Passport for logistics competencies, once the program exists.',
    ],
    notThis: [
      'This program is not offered.',
      'It needs its own task list, safety rules, and regulatory review before a start date can be set.',
    ],
  },
  {
    slug: 'community-support',
    name: 'Community Support',
    short: 'Community support readiness',
    status: 'Not open',
    phase: 'After Construction',
    tone: 'community',
    image: publicUrl('media/community.jpg'),
    imageAlt: 'A support worker sits at a table with two older women, knitting with them in a care setting.',
    summary:
      'Client communication, notes, professional boundaries, and front-line community work. This program is not open.',
    promise:
      'Community Support will be written for the occupation it serves, including placement rules and privacy. It will not be offered until those requirements are clear.',
    forWhom:
      'Adults interested in work that supports other people, including community agencies, older adults, disability services, and newcomer services. The program is not open for enrolment.',
    studies: [
      { title: 'Client communication', text: 'Plain language, listening, and the words a support role uses every day.' },
      { title: 'Documentation', text: 'Notes that are accurate, respectful, and limited to what the role requires.' },
      { title: 'Professional boundaries', text: 'What the work is, and what it must not become.' },
      { title: 'Privacy', text: 'Personal information stays inside the purpose it was given for.' },
      { title: 'Referrals', text: 'Knowing when a need belongs to another service, and how to say so clearly.' },
    ],
    leavesWith: [
      'A Skills Passport for this program, after the competencies have been validated.',
    ],
    notThis: [
      'Purpose Academy does not replace settlement, health, or legal services.',
      'This program is not offered. It will not be offered until placement requirements are clear.',
    ],
  },
]

export const STAGES = [
  {
    id: 'entry',
    n: '01',
    title: 'Entry and baseline',
    text: 'Registration, consent, a baseline look at language, numeracy, computer skill and safety awareness, then a program choice.',
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
  { n: 4, stage: '01', title: 'Career interest', text: 'Which kind of work fits your strengths. Interest guides the program. It does not create a credential.' },
  { n: 5, stage: '01', title: 'Choose your program', text: 'Construction is the program being prepared. Logistics and Community Support are listed, and they are not open.' },
  { n: 6, stage: '01', title: 'Support language', text: 'Spanish, French, Arabic, Hindi, Amharic, or Tigrinya can explain a lesson while the English is still forming.' },
  { n: 7, stage: '02', title: 'Visual vocabulary', text: 'See the object, hear the English word, and read a plain meaning before you are asked to use it from memory.' },
  { n: 8, stage: '02', title: 'Supported practice', text: 'Match the word to the picture, in class and at home. The translation is removed once the English is usable.' },
  { n: 9, stage: '02', title: 'English-only vocabulary', text: 'The picture stays. The translation does not. The assessment stays in English.' },
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
    text: 'You can explain the skill. A lesson, a picture, or a quiz can reach this point. It is a record of understanding, not of doing the work.',
  },
  {
    name: 'Practised',
    text: 'You have tried the skill with someone watching. The attempt is recorded. The standard may still be ahead of you.',
  },
  {
    name: 'Competent',
    text: 'An authorized instructor confirms that the criteria were met. The learning platform cannot assign this status.',
  },
] as const

export const VALUES = [
  { name: 'Dignity', text: 'Students are adults. A support language explains the lesson. It is not a way of treating a skilled person as a beginner.' },
  { name: 'Safety', text: 'Safety is taught before practical work and checked again when the tools come out.' },
  { name: 'Evidence', text: 'A claim about a skill, a partnership, or a result has to name its source. What has not been measured is not published as a result.' },
  { name: 'Practicality', text: 'Lessons follow tasks a workplace in Alberta asks an entry-level person to do.' },
  { name: 'Human judgment', text: 'The platform organizes lessons and records. Instructors teach, watch, correct, and decide.' },
  { name: 'Accessibility', text: 'Lessons and this website should be usable across languages, computer experience, and access needs.' },
] as const

export const TEAM = [
  { name: 'Saba Teklu', role: 'Founding builder' },
  { name: 'Kinfe Desta', role: 'Founding builder' },
  { name: 'ChuChu Asemelash', role: 'Founding builder' },
  { name: 'Yonas Tesfagabr', role: 'Founding builder' },
  { name: 'Levi Zigza', role: 'Founding builder' },
] as const

export const AUDIENCES = [
  {
    as: 'learner',
    title: 'Prospective learners',
    text: 'You may already know a trade, or you may be starting. Construction covers the English a site uses, the safety that comes first, and a record an employer can read. Enrolment is not open. You can ask to be told when a cohort is scheduled.',
  },
  {
    as: 'employer',
    title: 'Employers',
    text: 'A Skills Passport is meant to show what was taught, what was practised, and which instructor verified it. It does not say the person can operate every machine, and it is not a Red Seal.',
  },
  {
    as: 'partner',
    title: 'Referring organizations',
    text: 'A useful referral says who the program is for, what support is available, and what Purpose Academy does not provide. The school does not replace settlement, health, or legal services.',
  },
] as const

export const FACTS = [
  { term: 'Place', detail: 'Calgary, Alberta. A street address will be published when a campus is confirmed.' },
  { term: 'Status', detail: 'In development. These pages describe the school being built. They are not an offer of enrolment.' },
  { term: 'First program', detail: 'Construction. Logistics and Community Support are not open.' },
  { term: 'Language of instruction', detail: 'English. Spanish, French, Arabic, Hindi, Amharic, and Tigrinya may explain a lesson, and are then removed.' },
  { term: 'Assessment', detail: 'Learned, Practised, or Competent. Only an authorized instructor can record Competent.' },
  { term: 'Record', detail: 'A Skills Passport. It is not an apprenticeship, a Red Seal, or a safety certificate from an unnamed provider.' },
  { term: 'Tuition and start date', detail: 'Not set. A price and a date will be published when both are confirmed.' },
  { term: 'Student Aid', detail: 'Not available. Purpose Academy is not designated for Alberta Student Aid.' },
] as const

export const REQUIREMENTS = [
  { item: 'Who may enquire', now: 'Adults seeking entry-level construction work in Alberta, including newcomers and people changing careers.' },
  { item: 'Prior schooling', now: 'Not required in order to request information. A high-school requirement and a mature-learner rule will be published before enrolment opens.' },
  { item: 'Trade experience', now: 'Not required. Experience gained outside Canada should be described as it was.' },
  { item: 'English', now: 'Classes and assessments are in English. A support language may be used while the English is forming. An English benchmark has not been set. It will be published before enrolment opens.' },
  { item: 'What we ask', now: 'The work you want, the experience you already have, and whether Construction is the right program.' },
  { item: 'Tuition', now: 'Not set.' },
  { item: 'Start date', now: 'Not set. No cohort is scheduled.' },
  { item: 'Student Aid', now: 'Not designated. Do not plan a budget around it.' },
] as const

export const FAQS = [
  {
    q: 'Can I enrol today?',
    a: 'No. Construction is the first program, and no cohort is scheduled. Request information and we will write when a start date exists.',
  },
  {
    q: 'Is this an apprenticeship or a Red Seal program?',
    a: 'No. The program prepares people for entry-level work and keeps a record of what an instructor has seen. It does not replace an apprenticeship, a Red Seal, or any other regulated credential.',
  },
  {
    q: 'Can I use Alberta Student Aid?',
    a: 'No. Purpose Academy is not designated for Alberta Student Aid. Do not plan a budget around it.',
  },
  {
    q: 'What does it cost?',
    a: 'Tuition has not been set. It will be published with the program details, before anyone is asked to enrol.',
  },
  {
    q: 'Which languages can be used beside English?',
    a: 'Spanish, French, Arabic, Hindi, Amharic, and Tigrinya. They explain the lesson. English is the language of the class, the assessment, and the workplace.',
  },
  {
    q: 'Do I need construction experience already?',
    a: 'No. People with experience from another country are expected, and so are people starting without it. A baseline assessment finds the starting point.',
  },
  {
    q: 'Where is the campus?',
    a: 'Calgary, Alberta. A street address will be published when a campus is confirmed.',
  },
] as const

export function pathwayBySlug(slug: string | undefined) {
  return PATHWAYS.find((item) => item.slug === slug)
}
