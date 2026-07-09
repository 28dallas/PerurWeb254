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
    summary: "Perur Rays of Hope (PRoH), an implementation partner of the Global Give Back Circle, is seeking a dynamic, passionate, and experienced MERL Program Assistant to support the MERL department at HER Lab Program in West Pokot County. This role involves contributing to MERL activities and providing close supervision and guidance to a team of two MERL Analysts, ensuring accuracy and effectiveness of data collection, data management, interviewing, and participant engagement processes. The position is based on-site in Morpus, West Pokot.",
    responsibilities: [
      "Collaborate with senior MERL staff to design and implement monitoring and evaluation plans.",
      "Assist in data collection, data entry, and analysis, ensuring accuracy and timeliness.",
      "Provide close supervision, training, and performance evaluations of two MERL Analysts.",
      "Oversee data management activities, ensuring data accuracy, consistency, and security.",
      "Foster participant buy-in and ensure perspectives are accurately represented in reporting.",
      "Contribute to preparation of reports, summaries, and presentations for internal and external stakeholders."
    ],
    requirements: [
      "Bachelor's degree in social sciences, Statistics, Economics, M&E, development studies, or related field.",
      "Certificate in M&E, Data Science, Project Planning, or research methods is an added advantage.",
      "2+ years of proven M&E experience in the NGO or humanitarian sector.",
      "Experience with data collection tools (Qualtrics, ODK, Kobo Collect, SurveyCTO) and analysis software (SPSS, Stata, R, Advanced Excel).",
      "Prior experience in baseline, midline, and endline surveys and routine assessments.",
      "Relocation flexibility — position is based on-site in Morpus, West Pokot County."
    ],
    deadline: "Before 20th July 2026",
    pdf: "/jobs/merl-program-assistant.pdf",
    applyHref: "mailto:admin@perurraysofhope.org?cc=Vicky@perurraysofhope.org&subject=MERL%20Program%20Assistant&body=Dear%20Perur%20Rays%20of%20Hope%20Team%2C%0A%0APlease%20find%20attached%3A%0A-%20Updated%20CV%0A-%20Copies%20of%20academic%20and%20professional%20certificates%0A-%20Evidence%20of%20relevant%20experience%0A-%20At%20least%20two%20referees%0A%0AKind%20regards%2C"
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
