// ─────────────────────────────────────────────────────────────
// Single source of truth for site content. Edit here to update copy.
// Note: no em-dashes anywhere. Use commas, periods, or parentheses.
// ─────────────────────────────────────────────────────────────

export const PROFILE = {
  name: "Kum Donalsien Akwo",
  role: "Cybersecurity and Network Engineer",
  pitch: "I design and defend networks, from enterprise infrastructure to AI-driven intrusion detection.",
  location: "Buea, Cameroon",
  email: "donalsienkum@gmail.com",
  phone: "+237 671 172 400",
  phoneHref: "+237671172400",
  github: "https://github.com/kadian-arch",
  linkedin: "https://www.linkedin.com/in/kumdonalsien/",
  resume: "/resume/Kum_Donalsien_Akwo_Resume.pdf",
  bio: [
    "I'm Kum Donalsien Akwo, a Computer Engineering graduate from the College of Technology, University of Buea, specializing in Networks and Security. My work sits at the meeting point of network engineering and cybersecurity: designing infrastructure that performs, and defending it against real threats.",
    "Over the past two years I've built hands-on experience with enterprise networks at Telnet Cameroon. I've configured Cisco and Fortigate systems, deployed secure and wireless networks, worked with routing protocols like OSPF and BGP, and set up IP surveillance and satellite internet on client sites. I later returned in a senior capacity to train and mentor a new batch of interns.",
    "Alongside the field work, I build my own security tools. My capstone, Bastion IDS, is a four-layer hybrid intrusion detection system that combines signature matching, machine learning, deep learning, and behavioural anomaly detection into one real-time platform, shipped as a full desktop application.",
    "I'm driven by systems that hold up under pressure, not just in a demo. I care about detection that works on live traffic, defenses that survive contact with real attackers, and clear, honest engineering. My direction is a security career that spans both sides of the fence, offensive and defensive.",
  ],
};

// Neutral, factual quick facts (not brag stats)
export const FACTS = [
  { k: "Education",  v: "B.Tech, Computer Engineering (Networks and Security), College of Technology, University of Buea, First Class" },
  { k: "Focus",      v: "Network security, intrusion detection, machine learning for cyber defense, defensive security" },
  { k: "Experience", v: "Network and security engineering, Telnet Cameroon (2024 to present)" },
  { k: "Currently",  v: "Graduate, open to funded study, roles, and collaborations" },
  { k: "Based in",   v: "Buea, Cameroon" },
];

export const SKILLS = [
  {
    group: "Security",
    items: ["IDS / IPS", "Penetration Testing", "Ethical Hacking", "Snort", "Suricata",
            "Wireshark", "Nmap", "Fortigate", "Kali Linux"],
  },
  {
    group: "Networking",
    items: ["Cisco IOS", "Routers and Switches", "OSPF", "BGP", "IS-IS", "RIP",
            "Network Design", "Wireless", "IP Addressing"],
  },
  {
    group: "Cloud and AWS",
    items: ["AWS (EC2, S3, VPC)", "Cloud Networking", "VPC Design", "IAM",
            "CloudFront / CDN", "CloudWatch", "Route 53"],
  },
  {
    group: "Programming",
    items: ["Python", "JavaScript", "C", "MySQL"],
  },
  {
    group: "AI and ML",
    items: ["scikit-learn", "Keras / TensorFlow", "Random Forest", "XGBoost", "CatBoost",
            "Isolation Forest", "Autoencoders", "Deep Neural Networks"],
  },
  {
    group: "Frameworks and Tools",
    items: ["React", "Tailwind CSS", "FastAPI", "Flask", "Electron", "Vite",
            "Docker", "Git", "VirtualBox", "Linux"],
  },
];

export const CERTIFICATIONS = [
  {
    name: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    date: "Exam passed, August 2026",
  },
  {
    name: "Fortinet Certified Fundamentals (FCF) in Cybersecurity",
    issuer: "Fortinet",
    date: "July 2026",
    valid: "Valid to July 2028",
    credentialUrl: "https://www.credly.com/badges/1dc45515-02e7-43ac-8c20-7c40e1dc2bae/public_url",
  },
  {
    name: "Cisco Networking Academy Capture the Flag 2026",
    issuer: "Cisco",
    date: "May 2026",
    credentialUrl: "https://www.credly.com/badges/90505453-7f99-4b54-9720-0efaa4e89075/public_url",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "September 2025",
    credentialUrl: "https://www.credly.com/badges/1047c8ac-b1cf-4d29-956d-4ecc3563ceb4/public_url",
  },
  {
    name: "Cyber Security",
    issuer: "Humanitarian Leadership Academy",
    date: "July 2024",
  },
  {
    name: "Cyber Crime",
    issuer: "Humanitarian Leadership Academy",
    date: "July 2024",
  },
];

// Project screenshots are imported in the component from src/assets/screenshots
export const BASTION = {
  title: "Bastion IDS",
  tagline: "Hybrid Network Intrusion Detection System",
  year: "2025 to 2026",
  summary:
    "A four-layer intrusion detection system that combines signature matching, a machine-learning ensemble, a deep neural network, and behavioural anomaly detection into one real-time pipeline. Built from the ground up and shipped as a Windows desktop application with a full SOC-style dashboard.",
  highlights: [
    "47,357 live Emerging Threats signatures at Layer 1 for instant verdicts on known attacks",
    "Machine-learning ensemble (Random Forest, XGBoost, CatBoost) trained on 650k+ labelled flows",
    "Deep neural network specialist plus an unsupervised anomaly engine for zero-day behaviour",
    "Live packet capture, forensic reports (PDF / HTML / CSV), and analyst feedback loop",
  ],
  stack: ["Python", "FastAPI", "React", "Electron", "TensorFlow", "XGBoost", "CatBoost", "Scapy"],
  repo: "https://github.com/kadian-arch/bastion-ids",
  download: "https://github.com/kadian-arch/bastion-ids/releases/latest",
};

// Secondary projects from the résumé
export const PROJECTS = [
  {
    title: "FairGlass",
    year: "2026",
    desc: "Proof of fair AI hiring, built on the Midnight blockchain. A Compact smart contract cryptographically proves that each hiring decision followed an agreed fairness policy: it issues a receipt when the rules hold, and refuses one when a forbidden attribute like age changes the outcome, all without exposing any candidate data.",
    tags: ["Midnight", "Smart Contract", "Privacy", "Cryptography", "Hackathon"],
    repo: "https://github.com/Eman2123/fairglass",
  },
  {
    title: "Network Monitoring Tools Evaluation",
    year: "2024",
    desc: "Evaluated industry IDS/IPS and monitoring tools to identify and prevent cyber threats, producing a formal analysis and recommendations report to strengthen security posture.",
    tags: ["Snort", "Suricata", "Security Onion", "Kitsune", "Nmap"],
  },
  {
    title: "Secure Chat and File Transfer",
    year: "2024 to 2025",
    desc: "A real-time multi-client chat application with secure file transfer, built on raw Python socket programming.",
    tags: ["Python", "Sockets", "Networking"],
  },
];

// Blog / writing. Add entries here as you publish.
export const POSTS = [
  {
    title: "Building Bastion IDS: a four-layer intrusion detection system from scratch",
    blurb: "How I combined signatures, machine learning, deep learning, and anomaly detection into one real-time platform, and what I learned shipping it as a real desktop app.",
    date: "2026",
    tag: "Project",
    href: "https://www.linkedin.com/in/kumdonalsien/",
  },
  {
    title: "FairGlass: proving AI hiring is fair without exposing candidate data",
    blurb: "Our MLH x Midnight hackathon build. A smart contract on Midnight issues a fairness receipt when a hiring decision follows the agreed policy, and refuses one when a forbidden attribute changes the result. Full write-up and demo on Devpost.",
    date: "2026",
    tag: "Project",
    href: "https://devpost.com/software/fairglass-proof-of-fair-ai-hiring",
  },
  {
    title: "Bastion IDS: Layer Contribution, Threshold Sensitivity, and Consensus Rule Design in a Deployed Hybrid Intrusion Detection System",
    blurb: "A co-authored research paper that measures how much each detection layer of Bastion contributes, how sensitive it is to its alert thresholds, and how the consensus rule that fuses the layers is designed. Being prepared for submission to a peer-reviewed journal.",
    date: "In progress",
    tag: "Article",
    href: "",
  },
];
