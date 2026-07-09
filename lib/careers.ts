export type CareerRole = {
  title: string;
  location: string;
  type: string;
  department: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  deadline?: string;
  expired?: boolean;
  pdf?: string;
  applyHref: string;
};

const applicationEmail = "info@perurraysofhope.org";

function applicationHref(title: string) {
  const subject = encodeURIComponent(`Application for ${title}`);
  const body = encodeURIComponent(
    `Dear Perur Rays of Hope Team,\n\nI would like to apply for the ${title} position.\n\nMy name is:\nMy phone number is:\n\nI have attached my CV and supporting documents.\n\nKind regards,`
  );

  return `mailto:${applicationEmail}?subject=${subject}&body=${body}`;
}

export const careerRoles: CareerRole[] = [
  {
    title: "MERL Program Assistant",
    location: "West Pokot, Kenya",
    type: "Full-time",
    department: "Monitoring, Evaluation, Research & Learning",
    summary: "We are seeking a dedicated and motivated individual to join our team as a Monitoring, Evaluation, Research, and Learning (MERL) Program Assistant. This role involves contributing to MERL activities while providing close supervision and guidance to a team of two MERL Analysts, ensuring accuracy and effectiveness in data collection, data management, interviewing, and participant engagement processes.",
    responsibilities: [
      "Supervise and provide day-to-day guidance to two MERL Analysts in data collection and field activities.",
      "Support program monitoring, tracking, and internal and external reporting processes.",
      "Lead and coordinate data collection, data entry, cleaning, and management using approved tools.",
      "Conduct and oversee participant interviews, focus group discussions, and community engagement.",
      "Contribute to continuous learning, evidence-based program improvement, and stakeholder engagement.",
      "Prepare timely MERL reports, summaries, and documentation for program and donor use."
    ],
    requirements: [
      "Diploma or degree in Monitoring & Evaluation, Statistics, Social Sciences, or a related field.",
      "At least 1–2 years of experience in MERL, data collection, or program support roles.",
      "Proficiency in data collection tools (ODK, KoboToolbox, or similar) and MS Excel or equivalent.",
      "Strong analytical, communication, and report-writing skills.",
      "Experience working in community-based or NGO settings is an added advantage.",
      "Commitment to safeguarding, data privacy, and ethical research practices."
    ],
    deadline: "25th July 2026",
    expired: false,
    pdf: "/jobs/merl-program-assistant.pdf",
    applyHref: applicationHref("MERL Program Assistant")
  },
  {
    title: "Entrepreneurship Trainer",
    location: "West Pokot, Kenya",
    type: "Trainer / Consultancy",
    department: "Youth Livelihoods",
    summary: "Lead practical entrepreneurship training for learners and community participants, helping them build market-ready business skills.",
    responsibilities: [
      "Deliver entrepreneurship sessions using practical, participant-centered methods.",
      "Guide learners on business ideation, planning, costing, marketing, and customer care.",
      "Support assessment, mentorship, attendance tracking, and training reports."
    ],
    requirements: [
      "Relevant training or experience in entrepreneurship, business development, TVET, or enterprise coaching.",
      "Ability to facilitate hands-on learning for youth and community groups.",
      "Strong communication, documentation, and safeguarding awareness."
    ],
    deadline: "20th May 2026",
    expired: true,
    pdf: "/jobs/entrepreneurship-trainer.pdf",
    applyHref: applicationHref("Entrepreneurship Trainer")
  },
  {
    title: "Solar PV Installation Trainer",
    location: "West Pokot, Kenya",
    type: "Trainer / Consultancy",
    department: "Skills Training",
    summary: "Train participants in safe, practical Solar PV installation skills, with emphasis on technical competence and workplace readiness.",
    responsibilities: [
      "Facilitate Solar PV installation theory, demonstrations, and practical sessions.",
      "Guide learners on tools, safety, system components, installation checks, and maintenance basics.",
      "Prepare learner progress updates, practical assessments, and training documentation."
    ],
    requirements: [
      "Relevant technical qualification or proven experience in Solar PV installation.",
      "Experience training youth, apprentices, or community learners is preferred.",
      "Strong safety practice, communication skills, and commitment to quality training."
    ],
    deadline: "26th May 2026",
    expired: true,
    pdf: "/jobs/solar-pv-installation-trainer.pdf",
    applyHref: applicationHref("Solar PV Installation Trainer")
  }
];
