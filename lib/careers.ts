export type CareerRole = {
  title: string;
  location: string;
  type: string;
  department: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  deadline?: string;
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
    pdf: "/jobs/solar-pv-installation-trainer.pdf",
    applyHref: applicationHref("Solar PV Installation Trainer")
  }
];
