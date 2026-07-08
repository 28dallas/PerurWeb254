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
    location: "Morpus, West Pokot County, Kenya",
    type: "Full-time",
    department: "MERL",
    summary: "Perur Rays of Hope (PRoH), in partnership with Global Give Back Circle (GGBC), is seeking a dynamic, passionate, and experienced MERL Program Assistant to support the MERL department at HER Lab Program in West Pokot County. This role involves contributing to MERL activities and providing close supervision and guidance to a team of two MERL Analysts. The MERL Assistant will play a pivotal role in ensuring the accuracy and effectiveness of data collection, data management, interviewing, and participant engagement processes.",
    responsibilities: [
      "Support data collection, data management, and participant engagement processes.",
      "Supervise and guide a team of two MERL Analysts.",
      "Contribute to program monitoring, tracking, internal and external reporting.",
      "Support continuous learning and evidence-based program improvement.",
      "Facilitate stakeholder engagement activities."
    ],
    requirements: [
      "Experience in Monitoring, Evaluation, Research, and Learning (MERL).",
      "Strong data collection and management skills.",
      "Ability to supervise and mentor junior team members.",
      "Excellent communication and reporting skills.",
      "Commitment to community-centered program delivery."
    ],
    deadline: "Before 20th July 2026",
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
